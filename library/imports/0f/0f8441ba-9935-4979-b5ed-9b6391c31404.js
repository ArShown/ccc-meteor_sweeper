"use strict";
cc._RF.push(module, '0f844G6mTVJebXtm2ORwxQE', 'board');
// scripts/board.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    gridFrame: cc.Node,
    tokens: cc.SpriteFrame,
    meteorPreFab: cc.Prefab,
    hoverClip: {
      "default": null,
      type: cc.AudioClip
    },
    clickClip: {
      "default": null,
      type: cc.AudioClip
    }
  },

  /* 目標節點是否點擊過 */
  isGridActived: function isGridActived(row, col) {
    return this.gridBox[row][col].params.isActived;
  },

  /* 網格hover樣式 */
  gridMouseEnterStyle: function gridMouseEnterStyle(row, col) {
    var graphics = this.gridBox[row][col].getComponent(cc.Graphics);
    graphics.clear();
    graphics.fillColor = new cc.Color(255, 255, 255, 100);
    graphics.fillRect(0, 0, this.gridSize, this.gridSize);
    graphics.enabled = true;
  },

  /* 清除網格hover樣式 */
  gridMouseLeaveStyle: function gridMouseLeaveStyle(row, col) {
    var graphics = this.gridBox[row][col].getComponent(cc.Graphics);
    graphics.clear();
    graphics.enabled = false;
  },

  /* 繪製網格 */
  spawnGrid: function spawnGrid(row, col) {
    var node = new cc.Node("Grid" + "_" + row + "_" + col);
    /* hover 樣式 */

    var graphics = node.addComponent(cc.Graphics);
    graphics.enabled = false;
    /* images */

    var sprite = node.addComponent(cc.Sprite);
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
  spawnBoard: function spawnBoard() {
    /* 格線 */
    var graphics = this.gridFrame.addComponent(cc.Graphics);
    graphics.lineWidth = 2;
    graphics.strokeColor = cc.Color.WHITE;
    graphics.strokeColor.a = 100;
    graphics.fillColor = new cc.Color(0, 0, 0, 0);
    graphics.fillRect(0, 0, this.gridFrame.width, this.gridFrame.height);
    graphics.stroke();
    var maxAnchor = this.gridSize * 10;

    for (var row = 0; row < 10; row++) {
      if (row > 0) {
        var anchor = this.gridSize * row;
        graphics.moveTo(0, anchor);
        graphics.lineTo(maxAnchor, anchor);
        graphics.stroke();
        graphics.moveTo(anchor, 0);
        graphics.lineTo(anchor, maxAnchor);
        graphics.stroke();
      }

      var colTemp = [];

      for (var col = 0; col < 10; col++) {
        /* 網格 */
        colTemp[col] = this.spawnGrid(row, col);
      }

      this.gridBox[row] = colTemp;
    }
  },
  spawnMeteor: function spawnMeteor(type) {
    var _this = this;

    var meteor = cc.instantiate(this.meteorPreFab);
    var meteorScript = meteor.getComponent("meteor");
    meteorScript.spawnMeteor(type);
    /* 檢查重疊 */

    var checkRepeatLocation = function checkRepeatLocation() {
      meteorScript.getLocation();
      if (meteorScript.location.some(function (_ref) {
        var row = _ref[0],
            col = _ref[1];
        return _this.gridBox[row][col].params.meteor;
      })) checkRepeatLocation();
      return;
    };

    checkRepeatLocation();
    /* 隕石定位 */

    meteorScript.setPosition(meteorScript.origin.col * this.gridSize, meteorScript.origin.row * this.gridSize);
    /* 更新變數 */

    meteorScript.location.forEach(function (_ref2) {
      var row = _ref2[0],
          col = _ref2[1];
      _this.gridBox[row][col].params.meteor = meteorScript;
    });
    this.node.addChild(meteor);
    this.meteorBox.push(meteor);
  },

  /* 給上層呼叫的啟動函式 */
  startHandler: function startHandler() {
    /* 繪製棋盤 */
    this.spawnBoard();
    /* 繪製隕石 */

    this.spawnMeteor("A");
    this.spawnMeteor("B");
    this.spawnMeteor("C");
    this.spawnMeteor("D");
    this.spawnMeteor("E");
    /* 開始監聽 */

    if (cc.sys.isMobile) {
      this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartHandler, this);
      this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveHandler, this);
      this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndHandler, this);
    } else {
      this.node.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
      this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeaveHandler, this);
      this.node.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this);
    }
  },
  overHandler: function overHandler() {
    this.meteorBox.forEach(function (meteor) {
      return meteor.active = true;
    });

    if (cc.sys.isMobile) {
      this.node.off(cc.Node.EventType.TOUCH_START, this.touchStartHandler, this);
      this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveHandler, this);
      this.node.off(cc.Node.EventType.TOUCH_END, this.touchEndHandler, this);
    } else {
      this.node.off(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
      this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeaveHandler, this);
      this.node.off(cc.Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this);
    }
  },
  checkIsOver: function checkIsOver() {
    var isAllShootDown = this.meteorBox.every(function (meteor) {
      var meteorScript = meteor.getComponent("meteor");
      return meteorScript.isShootDown;
    });
    return isAllShootDown;
  },

  /* 透過座標取得對應的行列（陣列索引） */
  getCurrentLocation: function getCurrentLocation(y, x) {
    var _ref3 = [
    /* row */
    Math.min(9, parseInt((y - this._startY) / this.gridSize)),
    /* col */
    Math.min(9, parseInt((x - this._startX) / this.gridSize))],
        currentRow = _ref3[0],
        currentCol = _ref3[1];
    var activeBomb = this.getActiveBomb();

    switch (activeBomb) {
      case 1:
        return [[currentRow, currentCol]];

      case 2:
        return [[currentRow + 1, currentCol - 1], [currentRow + 1, currentCol + 1], [currentRow, currentCol], [currentRow - 1, currentCol - 1], [currentRow - 1, currentCol + 1]].filter(function (_ref4) {
          var r = _ref4[0],
              c = _ref4[1];
          return r <= 9 && c <= 9 && r >= 0 && c >= 0;
        });

      case 3:
        return [[currentRow + 1, currentCol - 1], [currentRow + 1, currentCol], [currentRow + 1, currentCol + 1], [currentRow, currentCol - 1], [currentRow, currentCol], [currentRow, currentCol + 1], [currentRow - 1, currentCol - 1], [currentRow - 1, currentCol], [currentRow - 1, currentCol + 1]].filter(function (_ref5) {
          var r = _ref5[0],
              c = _ref5[1];
          return r <= 9 && c <= 9 && r >= 0 && c >= 0;
        });
    }
  },

  /* ============================================ */

  /* event listeners */

  /* ============================================ */
  touchStartHandler: function touchStartHandler(event) {
    var _this2 = this;

    var _event$getLocation = event.getLocation(),
        x = _event$getLocation.x,
        y = _event$getLocation.y;

    var locations = this.getCurrentLocation(y, x);
    /* 當前網格沒有狀態才渲染樣式 */

    locations.forEach(function (_ref6) {
      var row = _ref6[0],
          col = _ref6[1];
      if (!_this2.isGridActived(row, col)) _this2.gridMouseEnterStyle(row, col);
    });
    /* 更新變數 */

    this._prevLocations = locations;
    return false;
  },
  touchMoveHandler: function touchMoveHandler(event) {
    var _event$getLocation2 = event.getLocation(),
        x = _event$getLocation2.x,
        y = _event$getLocation2.y;

    var posY = y - this._startY,
        posX = x - this._startX;
    /* 超出範圍視為leave */

    if (posY > this.node.height || posY < 0 || posX > this.node.width || posX < 0) {
      this.mouseLeaveHandler(event);
      return false;
    }

    this.mouseMoveHandler(event);
    return false;
  },
  touchEndHandler: function touchEndHandler(event) {
    this.mouseDownHandler(event);
    return false;
  },
  mouseMoveHandler: function mouseMoveHandler(event) {
    var _this3 = this;

    var _event$getLocation3 = event.getLocation(),
        x = _event$getLocation3.x,
        y = _event$getLocation3.y;

    var locations = this.getCurrentLocation(y, x);
    /* 處理前一個座標 */

    var prev = this._prevLocations.map(function (_ref7) {
      var r = _ref7[0],
          c = _ref7[1];
      return r + "_" + c;
    });

    var current = locations.map(function (_ref8) {
      var r = _ref8[0],
          c = _ref8[1];
      return r + "_" + c;
    });
    var diff = current.filter(function (str) {
      return prev.indexOf(str) === -1;
    });
    /* 有差集表示位置移動 */

    if (diff.length > 0) {
      /* 樣式還原 */
      this._prevLocations.forEach(function (_ref9) {
        var row = _ref9[0],
            col = _ref9[1];
        return _this3.gridMouseLeaveStyle(row, col);
      });
      /* 更新變數 */


      this._prevLocations = locations;
      /* 當前網格沒有狀態才渲染樣式 */

      var isNotActivedLocations = locations.filter(function (_ref10) {
        var row = _ref10[0],
            col = _ref10[1];
        return !_this3.isGridActived(row, col);
      });
      /* 需要渲染網格 */

      if (isNotActivedLocations.length > 0) {
        /* 渲染網格 */
        isNotActivedLocations.forEach(function (_ref11) {
          var row = _ref11[0],
              col = _ref11[1];
          return _this3.gridMouseEnterStyle(row, col);
        });
        /* 播放音效 */

        cc.audioEngine.play(this.hoverClip, false, 1);
      }
    }

    return false;
  },
  mouseLeaveHandler: function mouseLeaveHandler() {
    var _this4 = this;

    this._prevLocations.forEach(function (_ref12) {
      var row = _ref12[0],
          col = _ref12[1];

      /* 網格已有狀態就不處理 */
      if (!_this4.isGridActived(row, col)) _this4.gridMouseLeaveStyle(row, col);
    });
  },
  mouseDownHandler: function mouseDownHandler(event) {
    var _this5 = this;

    var _event$getLocation4 = event.getLocation(),
        x = _event$getLocation4.x,
        y = _event$getLocation4.y;

    var locations = this.getCurrentLocation(y, x);
    /* 當前所有網格已有狀態就不處理 */

    if (locations.every(function (_ref13) {
      var row = _ref13[0],
          col = _ref13[1];
      return _this5.isGridActived(row, col);
    })) return false;
    /* 當前網格沒有狀態就將樣式還原 */

    locations.forEach(function (_ref14) {
      var row = _ref14[0],
          col = _ref14[1];

      _this5.gridMouseLeaveStyle(row, col);
      /* 目標節點 */


      var targetNode = _this5.gridBox[row][col];
      var meteorScript = targetNode.params.meteor;
      /* 點擊的目標有船表示擊中 */

      var isHit = meteorScript !== null;
      /* 拿節點中的精靈 */

      var sprite = targetNode.getComponent(cc.Sprite);
      /* 變更渲染起始點 */

      sprite.node.anchorX = sprite.node.anchorY = 0;
      /* 選染模式 */

      sprite.sizeMode = 0;
      /* 擊中與未擊中的樣式 */

      sprite.spriteFrame = isHit ? _this5.hitSpriteFrame : _this5.missSpriteFrame;
      /* 顯示精靈 */

      sprite.enabled = true;
      /* 更新目標節點狀態 */

      targetNode.params.isActived = true;
      targetNode.params.status = isHit ? "hit" : "miss";
      /* 目標是否擊沉 */

      if (isHit && !meteorScript.location.some(function (_ref15) {
        var row = _ref15[0],
            col = _ref15[1];
        return !_this5.gridBox[row][col].params.isActived;
      })) {
        meteorScript.setShootDown();

        _this5.meteorBox.forEach(function (meteor) {
          var meteorScript = meteor.getComponent("meteor");

          if (meteorScript.isShootDown) {
            meteor.active = true;
          }
        });
      }
    });
    /* 播放音效 */

    cc.audioEngine.play(this.clickClip, false, 0.3);
    /* 檢查遊戲結束 */

    if (this.checkIsOver()) this.changeGameStatusHandler("win");
    /* 更新炸彈數量 */

    this.minusBombCountHandler();
    return false;
  },
  setMinusBombCountHandler: function setMinusBombCountHandler(handler) {
    this.minusBombCountHandler = handler;
  },
  setGetActiveBombHandler: function setGetActiveBombHandler(handler) {
    this.getActiveBomb = handler;
  },
  setGameStatusHandler: function setGameStatusHandler(handler) {
    this.changeGameStatusHandler = handler;
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
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

    this.getActiveBomb = function () {
      return -1;
    };

    this.minusBombCountHandler = function () {
      return false;
    };

    this.changeGameStatusHandler = function () {
      return null;
    };
    /* 打擊狀態 */


    this.missSpriteFrame = this.tokens.clone();
    this.missSpriteFrame.setRect(new cc.rect(32, 0, 32, 32));
    this.hitSpriteFrame = this.tokens.clone();
    this.hitSpriteFrame.setRect(new cc.rect(64, 0, 32, 32));
  },
  start: function start() {},
  onDestroy: function onDestroy() {
    if (cc.sys.isMobile) {
      this.node.off(cc.Node.EventType.TOUCH_START, this.touchStartHandler, this);
      this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveHandler, this);
      this.node.off(cc.Node.EventType.TOUCH_END, this.touchEndHandler, this);
    } else {
      this.node.off(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
      this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeaveHandler, this);
      this.node.off(cc.Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this);
    }
  } // update (dt) {},

});

cc._RF.pop();