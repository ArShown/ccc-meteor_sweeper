cc.Class({
  extends: cc.Component,

  properties: {
    tokens: cc.SpriteFrame,
    shipPreFab: cc.Prefab
  },

  /* 目標節點是否點擊過 */
  isGridActived(row, col) {
    return this.gridBox[row][col].params.isActived;
  },

  /* 網格hover樣式 */
  gridMouseEnterStyle(row, col) {
    let graphics = this.gridBox[row][col].getComponent(cc.Graphics);
    graphics.clear();
    graphics.fillColor = new cc.Color(255, 255, 255, 100);
    graphics.fillRect(0, 0, this.gridSize, this.gridSize);
    graphics.enabled = true;
  },

  /* 清除網格hover樣式 */
  gridMouseLeaveStyle(row, col) {
    let graphics = this.gridBox[row][col].getComponent(cc.Graphics);
    graphics.clear();
    graphics.enabled = false;
  },

  /* 繪製網格 */
  spawnGrid(row, col) {
    let node = new cc.Node("Grid" + "_" + row + "_" + col);
    /* hover 樣式 */
    let graphics = node.addComponent(cc.Graphics);
    graphics.enabled = false;

    /* images */
    let sprite = node.addComponent(cc.Sprite);
    sprite.enabled = false;

    /* 節點資訊 */
    node.params = {
      ship: null,
      isActived: false,
      status: null
    };
    node.x = col * this.gridSize;
    node.y = row * this.gridSize;
    node.width = node.height = this.gridSize;
    node.zIndex = 2;
    node.parent = this.node;
    return node;
  },

  /* 繪製棋盤，將網格以二維陣列存放 */
  spawnBoard() {
    for (let row = 0; row < 10; row++) {
      let colTemp = [];
      for (let col = 0; col < 10; col++) {
        colTemp[col] = this.spawnGrid(row, col);
      }
      this.gridBox[row] = colTemp
    }
  },

  spawnShip(type) {
    let ship = cc.instantiate(this.shipPreFab);
    let shipScript = ship.getComponent("ship");
    shipScript.spawnShip(type);

    /* 檢查重疊 */
    let checkRepeatLocation = () => {
      shipScript.getLocation();
      if (shipScript.location.some(([row, col]) => this.gridBox[row][col].params.ship))
        checkRepeatLocation();
      return;
    }
    checkRepeatLocation();

    /* 船隻定位 */
    shipScript.setPosition(
      shipScript.origin.col * this.gridSize,
      shipScript.origin.row * this.gridSize
    );
    /* 更新變數 */
    shipScript.location.forEach(([row, col]) => {
      this.gridBox[row][col].params.ship = shipScript;
    });
    this.node.addChild(ship);
    this.shipBox.push(ship);
  },

  /* 給上層呼叫的啟動函式 */
  startHandler() {
    this.enabled = true;
    /* 繪製棋盤 */
    this.spawnBoard();

    /* 繪製戰艦 */
    this.spawnShip('A');
    this.spawnShip('B');
    this.spawnShip('C');
    this.spawnShip('S');
    this.spawnShip('P');

    /* 開始監聽 */
    this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseEnterHandler, this);
    this.node.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeaveHandler, this);
    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this);
  },

  /* 透過座標取得對應的行列（陣列索引） */
  getCurrentLocation(y, x) {
    return [
      /* row */
      parseInt((y - this._startY) / this.gridSize),
      /* col */
      parseInt((x - this._startX) / this.gridSize)
    ];
  },

  /* ============================================ */
  /* event listeners */
  /* ============================================ */
  mouseEnterHandler(event) {
    let {
      x,
      y
    } = event.getLocation();
    /* 記錄進入座標 */
    [this._prevGridRow, this._prevGridCol] = this.getCurrentLocation(y, x);
  },

  mouseMoveHandler(event) {
    let {
      x,
      y
    } = event.getLocation();
    let [currentRow, currentCol] = this.getCurrentLocation(y, x);
    /* 當前網格沒有狀態才渲染樣式 */
    if (!this.isGridActived(currentRow, currentCol))
      this.gridMouseEnterStyle(currentRow, currentCol);

    /* 處理前一個座標 */
    if (this._prevGridRow !== currentRow || this._prevGridCol !== currentCol) {
      /* 樣式還原 */
      this.gridMouseLeaveStyle(this._prevGridRow, this._prevGridCol);
      /* 更新變數 */
      this._prevGridRow = currentRow;
      this._prevGridCol = currentCol;
    }
  },

  mouseLeaveHandler() {
    /* 當前網格已狀態就不處理 */
    if (this.isGridActived(this._prevGridRow, this._prevGridCol))
      return false;
    this.gridMouseLeaveStyle(this._prevGridRow, this._prevGridCol);
  },

  mouseDownHandler(event) {
    let {
      x,
      y
    } = event.getLocation();
    let [currentRow, currentCol] = this.getCurrentLocation(y, x);
    /* 當前網格已狀態就不處理 */
    if (this.isGridActived(currentRow, currentCol))
      return false;

    /* 當前網格沒有狀態就將樣式還原 */
    this.gridMouseLeaveStyle(currentRow, currentCol);

    /* 目標節點 */
    let targetNode = this.gridBox[currentRow][currentCol];
    let shipScript = targetNode.params.ship;
    /* 點擊的目標有船表示擊中 */
    let isHit = shipScript !== null;
    /* 拿節點中的精靈 */
    let sprite = targetNode.getComponent(cc.Sprite);
    /* 變更渲染起始點 */
    sprite.node.anchorX = sprite.node.anchorY = 0;
    /* 選染模式 */
    sprite.sizeMode = 0;
    /* 擊中與未擊中的樣式 */
    sprite.spriteFrame = isHit ? this.hitSpriteFrame : this.missSpriteFrame;
    /* 顯示精靈 */
    sprite.enabled = true;
    /* 更新目標節點狀態 */
    targetNode.params.isActived = true;
    targetNode.params.status = isHit ? 'hit' : 'miss';
    /* 判斷船隻擊沉 */
    if (isHit && !shipScript.location.some(([row, col]) => !this.gridBox[row][col].params.isActived))
      shipScript.setShootDown();
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.enabled = false;
    this.gridSize = 50;
    this.node.width = this.node.height = 500;
    /* 網格容器 */
    this.gridBox = new Array(10).fill(new Array(10).fill(null));
    /* 戰艦容器 */
    this.shipBox = [];

    /* 計算座標用的 private variable */
    this._startX = 95.5;
    this._startY = 205;
    this._prevGridRow = null;
    this._prevGridCol = null;

    /* 打擊狀態 */
    this.missSpriteFrame = this.tokens.clone()
    this.missSpriteFrame.setRect(new cc.rect(32, 0, 32, 32));
    this.hitSpriteFrame = this.tokens.clone();
    this.hitSpriteFrame.setRect(new cc.rect(64, 0, 32, 32));
  },

  start() {

  },

  onDestroy() {
    this.node.off(cc.Node.EventType.MOUSE_ENTER, this.mouseEnterHandler, this);
    this.node.off(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
    this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeaveHandler, this);
    this.node.off(cc.Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this);
  },

  // update (dt) {},
});