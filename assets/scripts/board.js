cc.Class({
  extends: cc.Component,

  properties: {
    gridFrame: cc.Node,
    tokens: cc.SpriteFrame,
    meteorPreFab: cc.Prefab
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
      meteor: null,
      isActived: false,
      status: null
    };
    node.x = col * this.gridSize;
    node.y = row * this.gridSize;
    node.width = node.height = this.gridSize;
    node.parent = this.gridFrame;
    return node;
  },

  /* 繪製棋盤，將網格以二維陣列存放 */
  spawnBoard() {
    /* 格線 */
    let graphics = this.gridFrame.addComponent(cc.Graphics);
    graphics.lineWidth = 2;
    graphics.strokeColor = new cc.Color(255, 255, 255, 180);
    graphics.fillColor = new cc.Color(0, 0, 0, 0);
    graphics.fillRect(0, 0, this.gridFrame.width, this.gridFrame.height);
    graphics.stroke();

    let maxAnchor = this.gridSize * 10;
    for (let row = 0; row < 10; row++) {
      if (row > 0) {
        let anchor = this.gridSize * row;
        graphics.moveTo(0, anchor);
        graphics.lineTo(maxAnchor, anchor);
        graphics.moveTo(anchor, 0);
        graphics.lineTo(anchor, maxAnchor);
      }

      let colTemp = [];
      for (let col = 0; col < 10; col++) {
        /* 網格 */
        colTemp[col] = this.spawnGrid(row, col);
      }
      this.gridBox[row] = colTemp
    }
    graphics.stroke();
  },

  spawnMeteor(type) {
    let meteor = cc.instantiate(this.meteorPreFab);
    let meteorScript = meteor.getComponent("meteor");
    meteorScript.spawnMeteor(type);

    /* 檢查重疊 */
    let checkRepeatLocation = () => {
      meteorScript.getLocation();
      if (meteorScript.location.some(([row, col]) => this.gridBox[row][col].params.meteor))
        checkRepeatLocation();
      return;
    }
    checkRepeatLocation();

    /* 隕石定位 */
    meteorScript.setPosition(
      meteorScript.origin.col * this.gridSize,
      meteorScript.origin.row * this.gridSize
    );
    /* 更新變數 */
    meteorScript.location.forEach(([row, col]) => {
      this.gridBox[row][col].params.meteor = meteorScript;
    });
    this.node.addChild(meteor);
    this.meteorBox.push(meteor);
  },

  /* 給上層呼叫的啟動函式 */
  startHandler() {
    this.enabled = true;
    /* 繪製棋盤 */
    this.spawnBoard();

    /* 繪製隕石 */
    this.spawnMeteor('A');
    this.spawnMeteor('B');
    this.spawnMeteor('C');
    this.spawnMeteor('D');
    this.spawnMeteor('E');

    /* 開始監聽 */
    this.node.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeaveHandler, this);
    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this);
    this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartHandler, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveHandler, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.mouseDownHandler, this);
  },

  overHandler() {
    this.meteorBox.forEach(meteor => meteor.active = true);
    this.node.off(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
    this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeaveHandler, this);
    this.node.off(cc.Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this);
    this.node.off(cc.Node.EventType.TOUCH_START, this.touchStartHandler, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveHandler, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.mouseDownHandler, this);
  },

  checkIsOver() {
    let isAllShootDown = this.meteorBox.every(meteor => {
      let meteorScript = meteor.getComponent("meteor");
      return meteorScript.isShootDown;
    });
    return isAllShootDown;
  },

  /* 透過座標取得對應的行列（陣列索引） */
  getCurrentLocation(y, x) {
    let [currentRow, currentCol] = [
      /* row */
      Math.min(9, parseInt((y - this._startY) / this.gridSize)),
      /* col */
      Math.min(9, parseInt((x - this._startX) / this.gridSize))
    ];
    let activeBomb = this.getActiveBomb();

    switch (activeBomb) {
      case 1:
        return [
          [currentRow, currentCol]
        ];
      case 2:
        return [
          [currentRow + 1, currentCol - 1],
          [currentRow + 1, currentCol + 1],
          [currentRow, currentCol],
          [currentRow - 1, currentCol - 1],
          [currentRow - 1, currentCol + 1]
        ].filter(([r, c]) => r <= 9 && c <= 9 && r >= 0 && c >= 0);
      case 3:
        return [
          [currentRow + 1, currentCol - 1],
          [currentRow + 1, currentCol],
          [currentRow + 1, currentCol + 1],
          [currentRow, currentCol - 1],
          [currentRow, currentCol],
          [currentRow, currentCol + 1],
          [currentRow - 1, currentCol - 1],
          [currentRow - 1, currentCol],
          [currentRow - 1, currentCol + 1]
        ].filter(([r, c]) => r <= 9 && c <= 9 && r >= 0 && c >= 0);
    }

  },

  /* ============================================ */
  /* event listeners */
  /* ============================================ */
  touchStartHandler(event) {
    let {
      x,
      y
    } = event.getLocation();
    let locations = this.getCurrentLocation(y, x);

    /* 當前網格沒有狀態才渲染樣式 */
    locations.forEach(([row, col]) => {
      if (!this.isGridActived(row, col))
        this.gridMouseEnterStyle(row, col);
    });
    /* 更新變數 */
    this._prevLocations = locations;

    return false;
  },

  touchMoveHandler(event) {
    let {
      x,
      y
    } = event.getLocation();

    let posY = y - this._startY,
      posX = x - this._startX;
    /* 超出範圍視為leave */
    if ((posY > this.node.height) || posY < 0 || (posX > this.node.width) || posX < 0) {
      this.mouseLeaveHandler(event);
      return false;
    }

    this.mouseMoveHandler(event);
  },

  mouseMoveHandler(event) {
    let {
      x,
      y
    } = event.getLocation();
    let locations = this.getCurrentLocation(y, x);

    /* 處理前一個座標 */
    let prev = this._prevLocations.map(([r, c]) => r + '_' + c);
    let current = locations.map(([r, c]) => r + '_' + c);
    let diff = locations.filter(str => prev.indexOf(str) === -1)
    /* 有差集表示位置移動 */
    if (diff.length > 0) {
      /* 樣式還原 */
      this._prevLocations.forEach(([row, col]) => this.gridMouseLeaveStyle(row, col));
      /* 更新變數 */
      this._prevLocations = locations;
    }

    /* 當前網格沒有狀態才渲染樣式 */
    locations.forEach(([row, col]) => {
      if (!this.isGridActived(row, col))
        this.gridMouseEnterStyle(row, col);
    });

    return false;
  },

  mouseLeaveHandler() {
    this._prevLocations.forEach(([row, col]) => {
      /* 網格已有狀態就不處理 */
      if (!this.isGridActived(row, col))
        this.gridMouseLeaveStyle(row, col)
    });
  },

  mouseDownHandler(event) {
    let {
      x,
      y
    } = event.getLocation();
    let locations = this.getCurrentLocation(y, x);
    /* 當前所有網格已有狀態就不處理 */
    if (locations.every(([row, col]) => this.isGridActived(row, col)))
      return false;

    /* 當前網格沒有狀態就將樣式還原 */
    locations.forEach(([row, col]) => {
      this.gridMouseLeaveStyle(row, col);
      /* 目標節點 */
      let targetNode = this.gridBox[row][col];
      let meteorScript = targetNode.params.meteor;
      /* 點擊的目標有船表示擊中 */
      let isHit = meteorScript !== null;
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
      /* 目標是否擊沉 */
      if (isHit && !meteorScript.location.some(([row, col]) => !this.gridBox[row][col].params.isActived))
        meteorScript.setShootDown();
    });
    /* 檢查遊戲結束 */
    if (this.checkIsOver())
      this.changeGameStatusHandler('win');

    this.minusBombCountHandler();
  },

  setMinusBombCountHandler(handler) {
    this.minusBombCountHandler = handler;
  },

  setGetActiveBombHandler(handler) {
    this.getActiveBomb = handler;
  },

  setGameStatusHandler(handler) {
    this.changeGameStatusHandler = handler;
  },
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.enabled = false;
    this.gridSize = 50;
    this.node.width = this.node.height = 500;
    /* 網格容器 */
    this.gridBox = new Array(10).fill(new Array(10).fill(null));
    /* 戰艦容器 */
    this.meteorBox = [];
    /* 調整節點順序 */
    this.gridFrame.zIndex = 2;
    this.meteorPreFab.zIndex = 1;

    /* 計算座標用的 private variable */
    this._startX = 70;
    this._startY = 230;
    this._prevLocations = [];
    this._isLegalPosition = false;

    /* 初始化上層參數 */
    this.getActiveBomb = () => -1;
    this.minusBombCountHandler = () => false;
    this.changeGameStatusHandler = () => null;

    /* 打擊狀態 */
    this.missSpriteFrame = this.tokens.clone()
    this.missSpriteFrame.setRect(new cc.rect(32, 0, 32, 32));
    this.hitSpriteFrame = this.tokens.clone();
    this.hitSpriteFrame.setRect(new cc.rect(64, 0, 32, 32));
  },

  start() {

  },

  onDestroy() {
    this.node.off(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
    this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeaveHandler, this);
    this.node.off(cc.Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this);
    this.node.off(cc.Node.EventType.TOUCH_START, this.touchStartHandler, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.mouseDownHandler, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveHandler, this);
  },

  // update (dt) {},
});