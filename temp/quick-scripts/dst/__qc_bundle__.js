
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_reversed_rotateTo');
require('./assets/scripts/background');
require('./assets/scripts/board');
require('./assets/scripts/button-audio-effect/button-audio-effect');
require('./assets/scripts/dialog/cover');
require('./assets/scripts/dialog/dialog');
require('./assets/scripts/game');
require('./assets/scripts/intro');
require('./assets/scripts/meteor');
require('./assets/scripts/rule');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/button-audio-effect/button-audio-effect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e696c1SA4VOE6ASgdl4pXxT', 'button-audio-effect');
// scripts/button-audio-effect/button-audio-effect.js

"use strict";

cc.Class({
  "extends": cc.Button,
  properties: {
    clip: {
      "default": null,
      type: cc.AudioClip
    }
  },
  _onTouchEnded: function _onTouchEnded(event) {
    if (!this.interactable || !this.enabledInHierarchy) return;

    if (this._pressed) {
      cc.audioEngine.play(this.clip, false, 1);
      cc.Component.EventHandler.emitEvents(this.clickEvents, event);
      this.node.emit('click', this);
    }

    this._pressed = false;

    this._updateState();

    event.stopPropagation();
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2J1dHRvbi1hdWRpby1lZmZlY3QvYnV0dG9uLWF1ZGlvLWVmZmVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQnV0dG9uIiwicHJvcGVydGllcyIsImNsaXAiLCJ0eXBlIiwiQXVkaW9DbGlwIiwiX29uVG91Y2hFbmRlZCIsImV2ZW50IiwiaW50ZXJhY3RhYmxlIiwiZW5hYmxlZEluSGllcmFyY2h5IiwiX3ByZXNzZWQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJDb21wb25lbnQiLCJFdmVudEhhbmRsZXIiLCJlbWl0RXZlbnRzIiwiY2xpY2tFdmVudHMiLCJub2RlIiwiZW1pdCIsIl91cGRhdGVTdGF0ZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLE1BREw7QUFFUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLElBQUksRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkw7QUFESSxHQUZMO0FBU1BDLEVBQUFBLGFBVE8seUJBU09DLEtBVFAsRUFTYztBQUNuQixRQUFJLENBQUMsS0FBS0MsWUFBTixJQUFzQixDQUFDLEtBQUtDLGtCQUFoQyxFQUFvRDs7QUFFcEQsUUFBSSxLQUFLQyxRQUFULEVBQW1CO0FBQ2pCWCxNQUFBQSxFQUFFLENBQUNZLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLVCxJQUF6QixFQUErQixLQUEvQixFQUFzQyxDQUF0QztBQUNBSixNQUFBQSxFQUFFLENBQUNjLFNBQUgsQ0FBYUMsWUFBYixDQUEwQkMsVUFBMUIsQ0FBcUMsS0FBS0MsV0FBMUMsRUFBdURULEtBQXZEO0FBQ0EsV0FBS1UsSUFBTCxDQUFVQyxJQUFWLENBQWUsT0FBZixFQUF3QixJQUF4QjtBQUNEOztBQUNELFNBQUtSLFFBQUwsR0FBZ0IsS0FBaEI7O0FBQ0EsU0FBS1MsWUFBTDs7QUFDQVosSUFBQUEsS0FBSyxDQUFDYSxlQUFOO0FBQ0Q7QUFwQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5CdXR0b24sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBjbGlwOiB7XG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgfVxuICB9LFxuXG4gIF9vblRvdWNoRW5kZWQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaW50ZXJhY3RhYmxlIHx8ICF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuX3ByZXNzZWQpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5jbGlwLCBmYWxzZSwgMSk7XG4gICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5jbGlja0V2ZW50cywgZXZlbnQpO1xuICAgICAgdGhpcy5ub2RlLmVtaXQoJ2NsaWNrJywgdGhpcyk7XG4gICAgfVxuICAgIHRoaXMuX3ByZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JvYXJkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ3JpZEZyYW1lIiwiTm9kZSIsInRva2VucyIsIlNwcml0ZUZyYW1lIiwibWV0ZW9yUHJlRmFiIiwiUHJlZmFiIiwiaG92ZXJDbGlwIiwidHlwZSIsIkF1ZGlvQ2xpcCIsImNsaWNrQ2xpcCIsImlzR3JpZEFjdGl2ZWQiLCJyb3ciLCJjb2wiLCJncmlkQm94IiwicGFyYW1zIiwiaXNBY3RpdmVkIiwiZ3JpZE1vdXNlRW50ZXJTdHlsZSIsImdyYXBoaWNzIiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJjbGVhciIsImZpbGxDb2xvciIsIkNvbG9yIiwiZmlsbFJlY3QiLCJncmlkU2l6ZSIsImVuYWJsZWQiLCJncmlkTW91c2VMZWF2ZVN0eWxlIiwic3Bhd25HcmlkIiwibm9kZSIsImFkZENvbXBvbmVudCIsInNwcml0ZSIsIlNwcml0ZSIsIm1ldGVvciIsInN0YXR1cyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJwYXJlbnQiLCJzcGF3bkJvYXJkIiwibGluZVdpZHRoIiwic3Ryb2tlQ29sb3IiLCJXSElURSIsImEiLCJzdHJva2UiLCJtYXhBbmNob3IiLCJhbmNob3IiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjb2xUZW1wIiwic3Bhd25NZXRlb3IiLCJpbnN0YW50aWF0ZSIsIm1ldGVvclNjcmlwdCIsImNoZWNrUmVwZWF0TG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsImxvY2F0aW9uIiwic29tZSIsInNldFBvc2l0aW9uIiwib3JpZ2luIiwiZm9yRWFjaCIsImFkZENoaWxkIiwibWV0ZW9yQm94IiwicHVzaCIsInN0YXJ0SGFuZGxlciIsInN5cyIsImlzTW9iaWxlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoU3RhcnRIYW5kbGVyIiwiVE9VQ0hfTU9WRSIsInRvdWNoTW92ZUhhbmRsZXIiLCJUT1VDSF9FTkQiLCJ0b3VjaEVuZEhhbmRsZXIiLCJNT1VTRV9NT1ZFIiwibW91c2VNb3ZlSGFuZGxlciIsIk1PVVNFX0xFQVZFIiwibW91c2VMZWF2ZUhhbmRsZXIiLCJNT1VTRV9ET1dOIiwibW91c2VEb3duSGFuZGxlciIsIm92ZXJIYW5kbGVyIiwiYWN0aXZlIiwib2ZmIiwiY2hlY2tJc092ZXIiLCJpc0FsbFNob290RG93biIsImV2ZXJ5IiwiaXNTaG9vdERvd24iLCJnZXRDdXJyZW50TG9jYXRpb24iLCJNYXRoIiwibWluIiwicGFyc2VJbnQiLCJfc3RhcnRZIiwiX3N0YXJ0WCIsImN1cnJlbnRSb3ciLCJjdXJyZW50Q29sIiwiYWN0aXZlQm9tYiIsImdldEFjdGl2ZUJvbWIiLCJmaWx0ZXIiLCJyIiwiYyIsImV2ZW50IiwibG9jYXRpb25zIiwiX3ByZXZMb2NhdGlvbnMiLCJwb3NZIiwicG9zWCIsInByZXYiLCJtYXAiLCJjdXJyZW50IiwiZGlmZiIsInN0ciIsImluZGV4T2YiLCJsZW5ndGgiLCJpc05vdEFjdGl2ZWRMb2NhdGlvbnMiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJ0YXJnZXROb2RlIiwiaXNIaXQiLCJhbmNob3JYIiwiYW5jaG9yWSIsInNpemVNb2RlIiwic3ByaXRlRnJhbWUiLCJoaXRTcHJpdGVGcmFtZSIsIm1pc3NTcHJpdGVGcmFtZSIsInNldFNob290RG93biIsImNoYW5nZUdhbWVTdGF0dXNIYW5kbGVyIiwibWludXNCb21iQ291bnRIYW5kbGVyIiwic2V0TWludXNCb21iQ291bnRIYW5kbGVyIiwiaGFuZGxlciIsInNldEdldEFjdGl2ZUJvbWJIYW5kbGVyIiwic2V0R2FtZVN0YXR1c0hhbmRsZXIiLCJvbkxvYWQiLCJBcnJheSIsImZpbGwiLCJ6SW5kZXgiLCJfaXNMZWdhbFBvc2l0aW9uIiwiY2xvbmUiLCJzZXRSZWN0IiwicmVjdCIsInN0YXJ0Iiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztB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QXFZUEMsRUFBQUEsU0FyWU8sdUJBcVlLO0FBQ1YsUUFBSS9JLEVBQUUsQ0FBQ29FLEdBQUgsQ0FBT0MsUUFBWCxFQUFxQjtBQUNuQixXQUFLckMsSUFBTCxDQUFVc0QsR0FBVixDQUFjdEYsRUFBRSxDQUFDSyxJQUFILENBQVFrRSxTQUFSLENBQWtCQyxXQUFoQyxFQUE2QyxLQUFLQyxpQkFBbEQsRUFBcUUsSUFBckU7QUFDQSxXQUFLekMsSUFBTCxDQUFVc0QsR0FBVixDQUFjdEYsRUFBRSxDQUFDSyxJQUFILENBQVFrRSxTQUFSLENBQWtCRyxVQUFoQyxFQUE0QyxLQUFLQyxnQkFBakQsRUFBbUUsSUFBbkU7QUFDQSxXQUFLM0MsSUFBTCxDQUFVc0QsR0FBVixDQUFjdEYsRUFBRSxDQUFDSyxJQUFILENBQVFrRSxTQUFSLENBQWtCSyxTQUFoQyxFQUEyQyxLQUFLQyxlQUFoRCxFQUFpRSxJQUFqRTtBQUNELEtBSkQsTUFJTztBQUNMLFdBQUs3QyxJQUFMLENBQVVzRCxHQUFWLENBQWN0RixFQUFFLENBQUNLLElBQUgsQ0FBUWtFLFNBQVIsQ0FBa0JPLFVBQWhDLEVBQTRDLEtBQUtDLGdCQUFqRCxFQUFtRSxJQUFuRTtBQUNBLFdBQUsvQyxJQUFMLENBQVVzRCxHQUFWLENBQWN0RixFQUFFLENBQUNLLElBQUgsQ0FBUWtFLFNBQVIsQ0FBa0JTLFdBQWhDLEVBQTZDLEtBQUtDLGlCQUFsRCxFQUFxRSxJQUFyRTtBQUNBLFdBQUtqRCxJQUFMLENBQVVzRCxHQUFWLENBQWN0RixFQUFFLENBQUNLLElBQUgsQ0FBUWtFLFNBQVIsQ0FBa0JXLFVBQWhDLEVBQTRDLEtBQUtDLGdCQUFqRCxFQUFtRSxJQUFuRTtBQUNEO0FBQ0YsR0EvWU0sQ0FpWlA7O0FBalpPLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICBncmlkRnJhbWU6IGNjLk5vZGUsXG4gICAgdG9rZW5zOiBjYy5TcHJpdGVGcmFtZSxcbiAgICBtZXRlb3JQcmVGYWI6IGNjLlByZWZhYixcbiAgICBob3ZlckNsaXA6IHtcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgfSxcbiAgICBjbGlja0NsaXA6IHtcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgfSxcbiAgfSxcblxuICAvKiDnm67mqJnnr4Dpu57mmK/lkKbpu57mk4rpgY4gKi9cbiAgaXNHcmlkQWN0aXZlZChyb3csIGNvbCkge1xuICAgIHJldHVybiB0aGlzLmdyaWRCb3hbcm93XVtjb2xdLnBhcmFtcy5pc0FjdGl2ZWRcbiAgfSxcblxuICAvKiDntrLmoLxob3Zlcuaoo+W8jyAqL1xuICBncmlkTW91c2VFbnRlclN0eWxlKHJvdywgY29sKSB7XG4gICAgbGV0IGdyYXBoaWNzID0gdGhpcy5ncmlkQm94W3Jvd11bY29sXS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpXG4gICAgZ3JhcGhpY3MuY2xlYXIoKVxuICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAxMDApXG4gICAgZ3JhcGhpY3MuZmlsbFJlY3QoMCwgMCwgdGhpcy5ncmlkU2l6ZSwgdGhpcy5ncmlkU2l6ZSlcbiAgICBncmFwaGljcy5lbmFibGVkID0gdHJ1ZVxuICB9LFxuXG4gIC8qIOa4hemZpOe2suagvGhvdmVy5qij5byPICovXG4gIGdyaWRNb3VzZUxlYXZlU3R5bGUocm93LCBjb2wpIHtcbiAgICBsZXQgZ3JhcGhpY3MgPSB0aGlzLmdyaWRCb3hbcm93XVtjb2xdLmdldENvbXBvbmVudChjYy5HcmFwaGljcylcbiAgICBncmFwaGljcy5jbGVhcigpXG4gICAgZ3JhcGhpY3MuZW5hYmxlZCA9IGZhbHNlXG4gIH0sXG5cbiAgLyog57mq6KO957ay5qC8ICovXG4gIHNwYXduR3JpZChyb3csIGNvbCkge1xuICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoXCJHcmlkXCIgKyBcIl9cIiArIHJvdyArIFwiX1wiICsgY29sKVxuICAgIC8qIGhvdmVyIOaoo+W8jyAqL1xuICAgIGxldCBncmFwaGljcyA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKVxuICAgIGdyYXBoaWNzLmVuYWJsZWQgPSBmYWxzZVxuXG4gICAgLyogaW1hZ2VzICovXG4gICAgbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSlcbiAgICBzcHJpdGUuZW5hYmxlZCA9IGZhbHNlXG5cbiAgICAvKiDnr4Dpu57os4foqIogKi9cbiAgICBub2RlLnBhcmFtcyA9IHtcbiAgICAgIG1ldGVvcjogbnVsbCxcbiAgICAgIGlzQWN0aXZlZDogZmFsc2UsXG4gICAgICBzdGF0dXM6IG51bGwsXG4gICAgfVxuICAgIG5vZGUueCA9IGNvbCAqIHRoaXMuZ3JpZFNpemVcbiAgICBub2RlLnkgPSByb3cgKiB0aGlzLmdyaWRTaXplXG4gICAgbm9kZS53aWR0aCA9IG5vZGUuaGVpZ2h0ID0gdGhpcy5ncmlkU2l6ZVxuICAgIG5vZGUucGFyZW50ID0gdGhpcy5ncmlkRnJhbWVcbiAgICByZXR1cm4gbm9kZVxuICB9LFxuXG4gIC8qIOe5quijveaji+ebpO+8jOWwh+e2suagvOS7peS6jOe2remZo+WIl+WtmOaUviAqL1xuICBzcGF3bkJvYXJkKCkge1xuICAgIC8qIOagvOe3miAqL1xuICAgIGxldCBncmFwaGljcyA9IHRoaXMuZ3JpZEZyYW1lLmFkZENvbXBvbmVudChjYy5HcmFwaGljcylcbiAgICBncmFwaGljcy5saW5lV2lkdGggPSAyXG4gICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5XSElURVxuICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yLmEgPSAxMDBcbiAgICBncmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgMClcbiAgICBncmFwaGljcy5maWxsUmVjdCgwLCAwLCB0aGlzLmdyaWRGcmFtZS53aWR0aCwgdGhpcy5ncmlkRnJhbWUuaGVpZ2h0KVxuICAgIGdyYXBoaWNzLnN0cm9rZSgpXG5cbiAgICBsZXQgbWF4QW5jaG9yID0gdGhpcy5ncmlkU2l6ZSAqIDEwXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICBpZiAocm93ID4gMCkge1xuICAgICAgICBsZXQgYW5jaG9yID0gdGhpcy5ncmlkU2l6ZSAqIHJvd1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8oMCwgYW5jaG9yKVxuICAgICAgICBncmFwaGljcy5saW5lVG8obWF4QW5jaG9yLCBhbmNob3IpXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpXG5cbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKGFuY2hvciwgMClcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKGFuY2hvciwgbWF4QW5jaG9yKVxuICAgICAgICBncmFwaGljcy5zdHJva2UoKVxuICAgICAgfVxuXG4gICAgICBsZXQgY29sVGVtcCA9IFtdXG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgLyog57ay5qC8ICovXG4gICAgICAgIGNvbFRlbXBbY29sXSA9IHRoaXMuc3Bhd25HcmlkKHJvdywgY29sKVxuICAgICAgfVxuICAgICAgdGhpcy5ncmlkQm94W3Jvd10gPSBjb2xUZW1wXG4gICAgfVxuICB9LFxuXG4gIHNwYXduTWV0ZW9yKHR5cGUpIHtcbiAgICBsZXQgbWV0ZW9yID0gY2MuaW5zdGFudGlhdGUodGhpcy5tZXRlb3JQcmVGYWIpXG4gICAgbGV0IG1ldGVvclNjcmlwdCA9IG1ldGVvci5nZXRDb21wb25lbnQoXCJtZXRlb3JcIilcbiAgICBtZXRlb3JTY3JpcHQuc3Bhd25NZXRlb3IodHlwZSlcblxuICAgIC8qIOaqouafpemHjeeWiiAqL1xuICAgIGxldCBjaGVja1JlcGVhdExvY2F0aW9uID0gKCkgPT4ge1xuICAgICAgbWV0ZW9yU2NyaXB0LmdldExvY2F0aW9uKClcbiAgICAgIGlmIChcbiAgICAgICAgbWV0ZW9yU2NyaXB0LmxvY2F0aW9uLnNvbWUoXG4gICAgICAgICAgKFtyb3csIGNvbF0pID0+IHRoaXMuZ3JpZEJveFtyb3ddW2NvbF0ucGFyYW1zLm1ldGVvclxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIGNoZWNrUmVwZWF0TG9jYXRpb24oKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNoZWNrUmVwZWF0TG9jYXRpb24oKVxuXG4gICAgLyog6ZqV55+z5a6a5L2NICovXG4gICAgbWV0ZW9yU2NyaXB0LnNldFBvc2l0aW9uKFxuICAgICAgbWV0ZW9yU2NyaXB0Lm9yaWdpbi5jb2wgKiB0aGlzLmdyaWRTaXplLFxuICAgICAgbWV0ZW9yU2NyaXB0Lm9yaWdpbi5yb3cgKiB0aGlzLmdyaWRTaXplXG4gICAgKVxuICAgIC8qIOabtOaWsOiuiuaVuCAqL1xuICAgIG1ldGVvclNjcmlwdC5sb2NhdGlvbi5mb3JFYWNoKChbcm93LCBjb2xdKSA9PiB7XG4gICAgICB0aGlzLmdyaWRCb3hbcm93XVtjb2xdLnBhcmFtcy5tZXRlb3IgPSBtZXRlb3JTY3JpcHRcbiAgICB9KVxuICAgIHRoaXMubm9kZS5hZGRDaGlsZChtZXRlb3IpXG4gICAgdGhpcy5tZXRlb3JCb3gucHVzaChtZXRlb3IpXG4gIH0sXG5cbiAgLyog57Wm5LiK5bGk5ZG85Y+r55qE5ZWf5YuV5Ye95byPICovXG4gIHN0YXJ0SGFuZGxlcigpIHtcbiAgICAvKiDnuaroo73mo4vnm6QgKi9cbiAgICB0aGlzLnNwYXduQm9hcmQoKVxuXG4gICAgLyog57mq6KO96ZqV55+zICovXG4gICAgdGhpcy5zcGF3bk1ldGVvcihcIkFcIilcbiAgICB0aGlzLnNwYXduTWV0ZW9yKFwiQlwiKVxuICAgIHRoaXMuc3Bhd25NZXRlb3IoXCJDXCIpXG4gICAgdGhpcy5zcGF3bk1ldGVvcihcIkRcIilcbiAgICB0aGlzLnNwYXduTWV0ZW9yKFwiRVwiKVxuXG4gICAgLyog6ZaL5aeL55uj6IG9ICovXG4gICAgaWYgKGNjLnN5cy5pc01vYmlsZSkge1xuICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRIYW5kbGVyLCB0aGlzKVxuICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlSGFuZGxlciwgdGhpcylcbiAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRIYW5kbGVyLCB0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKVxuICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyLCB0aGlzKVxuICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMubW91c2VEb3duSGFuZGxlciwgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgb3ZlckhhbmRsZXIoKSB7XG4gICAgdGhpcy5tZXRlb3JCb3guZm9yRWFjaCgobWV0ZW9yKSA9PiAobWV0ZW9yLmFjdGl2ZSA9IHRydWUpKVxuICAgIGlmIChjYy5zeXMuaXNNb2JpbGUpIHtcbiAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydEhhbmRsZXIsIHRoaXMpXG4gICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlSGFuZGxlciwgdGhpcylcbiAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kSGFuZGxlciwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9NT1ZFLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpXG4gICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyLCB0aGlzKVxuICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpXG4gICAgfVxuICB9LFxuXG4gIGNoZWNrSXNPdmVyKCkge1xuICAgIGxldCBpc0FsbFNob290RG93biA9IHRoaXMubWV0ZW9yQm94LmV2ZXJ5KChtZXRlb3IpID0+IHtcbiAgICAgIGxldCBtZXRlb3JTY3JpcHQgPSBtZXRlb3IuZ2V0Q29tcG9uZW50KFwibWV0ZW9yXCIpXG4gICAgICByZXR1cm4gbWV0ZW9yU2NyaXB0LmlzU2hvb3REb3duXG4gICAgfSlcbiAgICByZXR1cm4gaXNBbGxTaG9vdERvd25cbiAgfSxcblxuICAvKiDpgI/pgY7luqfmqJnlj5blvpflsI3mh4nnmoTooYzliJfvvIjpmaPliJfntKLlvJXvvIkgKi9cbiAgZ2V0Q3VycmVudExvY2F0aW9uKHksIHgpIHtcbiAgICBsZXQgW2N1cnJlbnRSb3csIGN1cnJlbnRDb2xdID0gW1xuICAgICAgLyogcm93ICovXG4gICAgICBNYXRoLm1pbig5LCBwYXJzZUludCgoeSAtIHRoaXMuX3N0YXJ0WSkgLyB0aGlzLmdyaWRTaXplKSksXG4gICAgICAvKiBjb2wgKi9cbiAgICAgIE1hdGgubWluKDksIHBhcnNlSW50KCh4IC0gdGhpcy5fc3RhcnRYKSAvIHRoaXMuZ3JpZFNpemUpKSxcbiAgICBdXG4gICAgbGV0IGFjdGl2ZUJvbWIgPSB0aGlzLmdldEFjdGl2ZUJvbWIoKVxuXG4gICAgc3dpdGNoIChhY3RpdmVCb21iKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBbW2N1cnJlbnRSb3csIGN1cnJlbnRDb2xdXVxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIFtjdXJyZW50Um93ICsgMSwgY3VycmVudENvbCAtIDFdLFxuICAgICAgICAgIFtjdXJyZW50Um93ICsgMSwgY3VycmVudENvbCArIDFdLFxuICAgICAgICAgIFtjdXJyZW50Um93LCBjdXJyZW50Q29sXSxcbiAgICAgICAgICBbY3VycmVudFJvdyAtIDEsIGN1cnJlbnRDb2wgLSAxXSxcbiAgICAgICAgICBbY3VycmVudFJvdyAtIDEsIGN1cnJlbnRDb2wgKyAxXSxcbiAgICAgICAgXS5maWx0ZXIoKFtyLCBjXSkgPT4gciA8PSA5ICYmIGMgPD0gOSAmJiByID49IDAgJiYgYyA+PSAwKVxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIFtjdXJyZW50Um93ICsgMSwgY3VycmVudENvbCAtIDFdLFxuICAgICAgICAgIFtjdXJyZW50Um93ICsgMSwgY3VycmVudENvbF0sXG4gICAgICAgICAgW2N1cnJlbnRSb3cgKyAxLCBjdXJyZW50Q29sICsgMV0sXG4gICAgICAgICAgW2N1cnJlbnRSb3csIGN1cnJlbnRDb2wgLSAxXSxcbiAgICAgICAgICBbY3VycmVudFJvdywgY3VycmVudENvbF0sXG4gICAgICAgICAgW2N1cnJlbnRSb3csIGN1cnJlbnRDb2wgKyAxXSxcbiAgICAgICAgICBbY3VycmVudFJvdyAtIDEsIGN1cnJlbnRDb2wgLSAxXSxcbiAgICAgICAgICBbY3VycmVudFJvdyAtIDEsIGN1cnJlbnRDb2xdLFxuICAgICAgICAgIFtjdXJyZW50Um93IC0gMSwgY3VycmVudENvbCArIDFdLFxuICAgICAgICBdLmZpbHRlcigoW3IsIGNdKSA9PiByIDw9IDkgJiYgYyA8PSA5ICYmIHIgPj0gMCAmJiBjID49IDApXG4gICAgfVxuICB9LFxuXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIC8qIGV2ZW50IGxpc3RlbmVycyAqL1xuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICB0b3VjaFN0YXJ0SGFuZGxlcihldmVudCkge1xuICAgIGxldCB7IHgsIHkgfSA9IGV2ZW50LmdldExvY2F0aW9uKClcbiAgICBsZXQgbG9jYXRpb25zID0gdGhpcy5nZXRDdXJyZW50TG9jYXRpb24oeSwgeClcblxuICAgIC8qIOeVtuWJjee2suagvOaykuacieeLgOaFi+aJjea4suafk+aoo+W8jyAqL1xuICAgIGxvY2F0aW9ucy5mb3JFYWNoKChbcm93LCBjb2xdKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNHcmlkQWN0aXZlZChyb3csIGNvbCkpIHRoaXMuZ3JpZE1vdXNlRW50ZXJTdHlsZShyb3csIGNvbClcbiAgICB9KVxuICAgIC8qIOabtOaWsOiuiuaVuCAqL1xuICAgIHRoaXMuX3ByZXZMb2NhdGlvbnMgPSBsb2NhdGlvbnNcbiAgICByZXR1cm4gZmFsc2VcbiAgfSxcblxuICB0b3VjaE1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxuXG4gICAgbGV0IHBvc1kgPSB5IC0gdGhpcy5fc3RhcnRZLFxuICAgICAgcG9zWCA9IHggLSB0aGlzLl9zdGFydFhcbiAgICAvKiDotoXlh7rnr4TlnI3oppbngrpsZWF2ZSAqL1xuICAgIGlmIChcbiAgICAgIHBvc1kgPiB0aGlzLm5vZGUuaGVpZ2h0IHx8XG4gICAgICBwb3NZIDwgMCB8fFxuICAgICAgcG9zWCA+IHRoaXMubm9kZS53aWR0aCB8fFxuICAgICAgcG9zWCA8IDBcbiAgICApIHtcbiAgICAgIHRoaXMubW91c2VMZWF2ZUhhbmRsZXIoZXZlbnQpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLm1vdXNlTW92ZUhhbmRsZXIoZXZlbnQpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sXG5cbiAgdG91Y2hFbmRIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd25IYW5kbGVyKGV2ZW50KVxuICAgIHJldHVybiBmYWxzZVxuICB9LFxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBsZXQgeyB4LCB5IH0gPSBldmVudC5nZXRMb2NhdGlvbigpXG4gICAgbGV0IGxvY2F0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudExvY2F0aW9uKHksIHgpXG5cbiAgICAvKiDomZXnkIbliY3kuIDlgIvluqfmqJkgKi9cbiAgICBsZXQgcHJldiA9IHRoaXMuX3ByZXZMb2NhdGlvbnMubWFwKChbciwgY10pID0+IHIgKyBcIl9cIiArIGMpXG4gICAgbGV0IGN1cnJlbnQgPSBsb2NhdGlvbnMubWFwKChbciwgY10pID0+IHIgKyBcIl9cIiArIGMpXG4gICAgbGV0IGRpZmYgPSBjdXJyZW50LmZpbHRlcigoc3RyKSA9PiBwcmV2LmluZGV4T2Yoc3RyKSA9PT0gLTEpXG4gICAgLyog5pyJ5beu6ZuG6KGo56S65L2N572u56e75YuVICovXG4gICAgaWYgKGRpZmYubGVuZ3RoID4gMCkge1xuICAgICAgLyog5qij5byP6YKE5Y6fICovXG4gICAgICB0aGlzLl9wcmV2TG9jYXRpb25zLmZvckVhY2goKFtyb3csIGNvbF0pID0+XG4gICAgICAgIHRoaXMuZ3JpZE1vdXNlTGVhdmVTdHlsZShyb3csIGNvbClcbiAgICAgIClcbiAgICAgIC8qIOabtOaWsOiuiuaVuCAqL1xuICAgICAgdGhpcy5fcHJldkxvY2F0aW9ucyA9IGxvY2F0aW9uc1xuXG4gICAgICAvKiDnlbbliY3ntrLmoLzmspLmnInni4DmhYvmiY3muLLmn5PmqKPlvI8gKi9cbiAgICAgIGxldCBpc05vdEFjdGl2ZWRMb2NhdGlvbnMgPSBsb2NhdGlvbnMuZmlsdGVyKFxuICAgICAgICAoW3JvdywgY29sXSkgPT4gIXRoaXMuaXNHcmlkQWN0aXZlZChyb3csIGNvbClcbiAgICAgIClcbiAgICAgIC8qIOmcgOimgea4suafk+e2suagvCAqL1xuICAgICAgaWYgKGlzTm90QWN0aXZlZExvY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8qIOa4suafk+e2suagvCAqL1xuICAgICAgICBpc05vdEFjdGl2ZWRMb2NhdGlvbnMuZm9yRWFjaCgoW3JvdywgY29sXSkgPT5cbiAgICAgICAgICB0aGlzLmdyaWRNb3VzZUVudGVyU3R5bGUocm93LCBjb2wpXG4gICAgICAgIClcbiAgICAgICAgLyog5pKt5pS+6Z+z5pWIICovXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5ob3ZlckNsaXAsIGZhbHNlLCAxKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9LFxuXG4gIG1vdXNlTGVhdmVIYW5kbGVyKCkge1xuICAgIHRoaXMuX3ByZXZMb2NhdGlvbnMuZm9yRWFjaCgoW3JvdywgY29sXSkgPT4ge1xuICAgICAgLyog57ay5qC85bey5pyJ54uA5oWL5bCx5LiN6JmV55CGICovXG4gICAgICBpZiAoIXRoaXMuaXNHcmlkQWN0aXZlZChyb3csIGNvbCkpIHRoaXMuZ3JpZE1vdXNlTGVhdmVTdHlsZShyb3csIGNvbClcbiAgICB9KVxuICB9LFxuXG4gIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBsZXQgeyB4LCB5IH0gPSBldmVudC5nZXRMb2NhdGlvbigpXG4gICAgbGV0IGxvY2F0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudExvY2F0aW9uKHksIHgpXG4gICAgLyog55W25YmN5omA5pyJ57ay5qC85bey5pyJ54uA5oWL5bCx5LiN6JmV55CGICovXG4gICAgaWYgKGxvY2F0aW9ucy5ldmVyeSgoW3JvdywgY29sXSkgPT4gdGhpcy5pc0dyaWRBY3RpdmVkKHJvdywgY29sKSkpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIC8qIOeVtuWJjee2suagvOaykuacieeLgOaFi+WwseWwh+aoo+W8j+mChOWOnyAqL1xuICAgIGxvY2F0aW9ucy5mb3JFYWNoKChbcm93LCBjb2xdKSA9PiB7XG4gICAgICB0aGlzLmdyaWRNb3VzZUxlYXZlU3R5bGUocm93LCBjb2wpXG4gICAgICAvKiDnm67mqJnnr4Dpu54gKi9cbiAgICAgIGxldCB0YXJnZXROb2RlID0gdGhpcy5ncmlkQm94W3Jvd11bY29sXVxuICAgICAgbGV0IG1ldGVvclNjcmlwdCA9IHRhcmdldE5vZGUucGFyYW1zLm1ldGVvclxuICAgICAgLyog6bue5pOK55qE55uu5qiZ5pyJ6Ii56KGo56S65pOK5LitICovXG4gICAgICBsZXQgaXNIaXQgPSBtZXRlb3JTY3JpcHQgIT09IG51bGxcbiAgICAgIC8qIOaLv+evgOm7nuS4reeahOeyvumdiCAqL1xuICAgICAgbGV0IHNwcml0ZSA9IHRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcbiAgICAgIC8qIOiuiuabtOa4suafk+i1t+Wni+m7niAqL1xuICAgICAgc3ByaXRlLm5vZGUuYW5jaG9yWCA9IHNwcml0ZS5ub2RlLmFuY2hvclkgPSAwXG4gICAgICAvKiDpgbjmn5PmqKHlvI8gKi9cbiAgICAgIHNwcml0ZS5zaXplTW9kZSA9IDBcbiAgICAgIC8qIOaTiuS4reiIh+acquaTiuS4reeahOaoo+W8jyAqL1xuICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gaXNIaXQgPyB0aGlzLmhpdFNwcml0ZUZyYW1lIDogdGhpcy5taXNzU3ByaXRlRnJhbWVcbiAgICAgIC8qIOmhr+ekuueyvumdiCAqL1xuICAgICAgc3ByaXRlLmVuYWJsZWQgPSB0cnVlXG4gICAgICAvKiDmm7TmlrDnm67mqJnnr4Dpu57ni4DmhYsgKi9cbiAgICAgIHRhcmdldE5vZGUucGFyYW1zLmlzQWN0aXZlZCA9IHRydWVcbiAgICAgIHRhcmdldE5vZGUucGFyYW1zLnN0YXR1cyA9IGlzSGl0ID8gXCJoaXRcIiA6IFwibWlzc1wiXG4gICAgICAvKiDnm67mqJnmmK/lkKbmk4rmsokgKi9cbiAgICAgIGlmIChcbiAgICAgICAgaXNIaXQgJiZcbiAgICAgICAgIW1ldGVvclNjcmlwdC5sb2NhdGlvbi5zb21lKFxuICAgICAgICAgIChbcm93LCBjb2xdKSA9PiAhdGhpcy5ncmlkQm94W3Jvd11bY29sXS5wYXJhbXMuaXNBY3RpdmVkXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBtZXRlb3JTY3JpcHQuc2V0U2hvb3REb3duKClcbiAgICAgICAgdGhpcy5tZXRlb3JCb3guZm9yRWFjaCgobWV0ZW9yKSA9PiB7XG4gICAgICAgICAgbGV0IG1ldGVvclNjcmlwdCA9IG1ldGVvci5nZXRDb21wb25lbnQoXCJtZXRlb3JcIilcbiAgICAgICAgICBpZiAobWV0ZW9yU2NyaXB0LmlzU2hvb3REb3duKSB7XG4gICAgICAgICAgICBtZXRlb3IuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC8qIOaSreaUvumfs+aViCAqL1xuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5jbGlja0NsaXAsIGZhbHNlLCAwLjMpXG5cbiAgICAvKiDmqqLmn6XpgYrmiLLntZDmnZ8gKi9cbiAgICBpZiAodGhpcy5jaGVja0lzT3ZlcigpKSB0aGlzLmNoYW5nZUdhbWVTdGF0dXNIYW5kbGVyKFwid2luXCIpXG5cbiAgICAvKiDmm7TmlrDngrjlvYjmlbjph48gKi9cbiAgICB0aGlzLm1pbnVzQm9tYkNvdW50SGFuZGxlcigpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sXG5cbiAgc2V0TWludXNCb21iQ291bnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICB0aGlzLm1pbnVzQm9tYkNvdW50SGFuZGxlciA9IGhhbmRsZXJcbiAgfSxcblxuICBzZXRHZXRBY3RpdmVCb21iSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgdGhpcy5nZXRBY3RpdmVCb21iID0gaGFuZGxlclxuICB9LFxuXG4gIHNldEdhbWVTdGF0dXNIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICB0aGlzLmNoYW5nZUdhbWVTdGF0dXNIYW5kbGVyID0gaGFuZGxlclxuICB9LFxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ncmlkU2l6ZSA9IDUwXG4gICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5ub2RlLmhlaWdodCA9IDUwMFxuICAgIC8qIOe2suagvOWuueWZqCAqL1xuICAgIHRoaXMuZ3JpZEJveCA9IG5ldyBBcnJheSgxMCkuZmlsbChuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkpXG4gICAgLyog5oiw6Imm5a655ZmoICovXG4gICAgdGhpcy5tZXRlb3JCb3ggPSBbXVxuICAgIC8qIOiqv+aVtOevgOm7numghuW6jyAqL1xuICAgIHRoaXMuZ3JpZEZyYW1lLnpJbmRleCA9IDJcbiAgICB0aGlzLm1ldGVvclByZUZhYi56SW5kZXggPSAxXG5cbiAgICAvKiDoqIjnrpfluqfmqJnnlKjnmoQgcHJpdmF0ZSB2YXJpYWJsZSAqL1xuICAgIHRoaXMuX3N0YXJ0WCA9IDcwXG4gICAgdGhpcy5fc3RhcnRZID0gMjMwXG4gICAgdGhpcy5fcHJldkxvY2F0aW9ucyA9IFtdXG4gICAgdGhpcy5faXNMZWdhbFBvc2l0aW9uID0gZmFsc2VcblxuICAgIC8qIOWIneWni+WMluS4iuWxpOWPg+aVuCAqL1xuICAgIHRoaXMuZ2V0QWN0aXZlQm9tYiA9ICgpID0+IC0xXG4gICAgdGhpcy5taW51c0JvbWJDb3VudEhhbmRsZXIgPSAoKSA9PiBmYWxzZVxuICAgIHRoaXMuY2hhbmdlR2FtZVN0YXR1c0hhbmRsZXIgPSAoKSA9PiBudWxsXG5cbiAgICAvKiDmiZPmk4rni4DmhYsgKi9cbiAgICB0aGlzLm1pc3NTcHJpdGVGcmFtZSA9IHRoaXMudG9rZW5zLmNsb25lKClcbiAgICB0aGlzLm1pc3NTcHJpdGVGcmFtZS5zZXRSZWN0KG5ldyBjYy5yZWN0KDMyLCAwLCAzMiwgMzIpKVxuICAgIHRoaXMuaGl0U3ByaXRlRnJhbWUgPSB0aGlzLnRva2Vucy5jbG9uZSgpXG4gICAgdGhpcy5oaXRTcHJpdGVGcmFtZS5zZXRSZWN0KG5ldyBjYy5yZWN0KDY0LCAwLCAzMiwgMzIpKVxuICB9LFxuXG4gIHN0YXJ0KCkge30sXG5cbiAgb25EZXN0cm95KCkge1xuICAgIGlmIChjYy5zeXMuaXNNb2JpbGUpIHtcbiAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydEhhbmRsZXIsIHRoaXMpXG4gICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlSGFuZGxlciwgdGhpcylcbiAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kSGFuZGxlciwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9NT1ZFLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpXG4gICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyLCB0aGlzKVxuICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpXG4gICAgfVxuICB9LFxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSlcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69029jbr/dHXZ/UkTooxQDU', 'game');
// scripts/game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    board: cc.Node,
    bomb1: cc.Node,
    bomb2: cc.Node,
    bomb3: cc.Node,
    dialogPrefab: cc.Prefab,
    ruleWindow: cc.Node,
    bgClip: {
      "default": null,
      type: cc.AudioClip
    },
    loseClip: {
      "default": null,
      type: cc.AudioClip
    },
    winClip: {
      "default": null,
      type: cc.AudioClip
    }
  },
  switchActive: function switchActive(e, number) {
    var _this = this;

    number = +number;
    if (number === this.bombActive) return;
    if (this.bombCount[number] === 0) return;
    cc.resources.load("prefab/bomb_normal", cc.Prefab, function (err, prefab) {
      _this.bombBox.forEach(function (bomb, idx) {
        if (idx === 0 || idx === number) return;
        var border = bomb.getChildByName("bottom_flex__item__border");
        /** 停止所有動作 */

        border.stopAllActions();
        /** 校正角度 */

        cc.tween(border).to(0, {
          angle: 0
        }).start();
        border.removeAllChildren();
        border.addChild(cc.instantiate(prefab));
        var bg = bomb.getChildByName("bottom_flex__item__bg");
        var ctx = bg.getComponent(cc.Graphics);
        ctx.clear();
        ctx.fillColor = "#0BA390";
        ctx.circle(0, -2, 55);
        ctx.fill();
        var content = bomb.getChildByName("bottom_flex__item__content");
        var contentImg = content.getChildByName("bomb_img");
        contentImg.scale = 0.8;
        contentImg.color = new cc.Color(136, 136, 136);
        var contentCount = content.getChildByName("bomb_count");
        contentCount.getComponent(cc.Label).fontSize = 16;
        contentCount.color = new cc.Color(136, 136, 136);
      });
    });
    cc.resources.load("prefab/bomb_active", cc.Prefab, function (err, prefab) {
      _this.bombBox.forEach(function (bomb, idx) {
        if (idx !== 0 && idx === number) {
          var border = bomb.getChildByName("bottom_flex__item__border");
          border.removeAllChildren();
          border.addChild(cc.instantiate(prefab)); // border.runAction(cc.repeatForever(cc.rotateBy(7, 360)))

          cc.tween(border).repeatForever(cc.tween().to(7, {
            angle: 360
          })).start();
          var bg = bomb.getChildByName("bottom_flex__item__bg");
          var ctx = bg.getComponent(cc.Graphics);
          ctx.clear();
          ctx.fillColor = "#A2F7EC";
          ctx.circle(0, 0, 65);
          ctx.fill();
          var content = bomb.getChildByName("bottom_flex__item__content");
          var contentImg = content.getChildByName("bomb_img");
          contentImg.scale = 1;
          contentImg.color = new cc.Color(255, 255, 255);
          var contentCount = content.getChildByName("bomb_count");
          contentCount.getComponent(cc.Label).fontSize = 20;
          contentCount.color = new cc.Color(255, 255, 255);
        }
      });
    });
    this.bombActive = number;
  },
  minusBombCount: function minusBombCount() {
    this.bombCount[this.bombActive] -= 1;
    this.upgradeBombCount();

    if (this.bombCount[this.bombActive] === 0) {
      var nextIdx = this.bombCount.findIndex(function (n) {
        return n > 0;
      });
      if (nextIdx >= 0) this.switchActive(null, nextIdx);else this.gameOver("lose");
    }
  },
  upgradeBombCount: function upgradeBombCount() {
    var _this2 = this;

    this.bombBox.forEach(function (bomb, idx) {
      if (idx !== 0) {
        var currentCount = _this2.bombCount[idx];
        var content = bomb.getChildByName("bottom_flex__item__content");
        var contentCount = content.getChildByName("bomb_count");
        contentCount.getComponent(cc.Label).string = "x " + currentCount;
      }
    });
  },
  gameOver: function gameOver(status) {
    if (this.gameStatus !== "playing") return false;
    this.gameStatus = status;
    this.boardScript.overHandler();
    var dialog = cc.instantiate(this.dialogPrefab);
    this.node.addChild(dialog);
    if (status === "lose") cc.audioEngine.play(this.loseClip, false, 1);else cc.audioEngine.play(this.winClip, false, 1);
    var dialogScript = dialog.getComponent("dialog");
    dialogScript.setContent("you " + status + "! replay?");
    dialogScript.setCallback(function () {
      return cc.director.loadScene("game");
    });
  },
  backToIntro: function backToIntro() {
    var dialog = cc.instantiate(this.dialogPrefab);
    this.node.addChild(dialog);
    var dialogScript = dialog.getComponent("dialog");
    dialogScript.setContent("You really want to go ahead?");
    dialogScript.setCallback(function () {
      return cc.director.loadScene("intro");
    });
  },
  replay: function replay() {
    var dialog = cc.instantiate(this.dialogPrefab);
    this.node.addChild(dialog);
    var dialogScript = dialog.getComponent("dialog");
    dialogScript.setContent("Replay?");
    dialogScript.setCallback(function () {
      return cc.director.loadScene("game");
    });
  },
  ruleDisplay: function ruleDisplay() {
    this.ruleWindow.active = true;
    this.ruleWindow.getComponent(cc.Animation).play("slice-in");
  },
  ruleHidden: function ruleHidden() {
    this.ruleWindow.getComponent(cc.Animation).play("slice-out");
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.clipId = cc.audioEngine.play(this.bgClip, true, 0.5);
    this.bombActive = 0;
    this.bombBox = [, this.bomb1, this.bomb2, this.bomb3];
    this.bombCount = [, 26, 3, 1];
    this.gameStatus = "playing";
    this.boardScript = this.board.getComponent("board");
    this.upgradeBombCount();
  },
  start: function start() {
    var _this3 = this;

    this.switchActive(null, 1);
    this.boardScript.setGetActiveBombHandler(function () {
      return _this3.bombActive;
    });
    this.boardScript.setGameStatusHandler(this.gameOver.bind(this));
    this.boardScript.setMinusBombCountHandler(this.minusBombCount.bind(this));
    this.boardScript.startHandler();
  },
  onDestroy: function onDestroy() {
    cc.audioEngine.stop(this.clipId);
  } // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJib2FyZCIsIk5vZGUiLCJib21iMSIsImJvbWIyIiwiYm9tYjMiLCJkaWFsb2dQcmVmYWIiLCJQcmVmYWIiLCJydWxlV2luZG93IiwiYmdDbGlwIiwidHlwZSIsIkF1ZGlvQ2xpcCIsImxvc2VDbGlwIiwid2luQ2xpcCIsInN3aXRjaEFjdGl2ZSIsImUiLCJudW1iZXIiLCJib21iQWN0aXZlIiwiYm9tYkNvdW50IiwicmVzb3VyY2VzIiwibG9hZCIsImVyciIsInByZWZhYiIsImJvbWJCb3giLCJmb3JFYWNoIiwiYm9tYiIsImlkeCIsImJvcmRlciIsImdldENoaWxkQnlOYW1lIiwic3RvcEFsbEFjdGlvbnMiLCJ0d2VlbiIsInRvIiwiYW5nbGUiLCJzdGFydCIsInJlbW92ZUFsbENoaWxkcmVuIiwiYWRkQ2hpbGQiLCJpbnN0YW50aWF0ZSIsImJnIiwiY3R4IiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJjbGVhciIsImZpbGxDb2xvciIsImNpcmNsZSIsImZpbGwiLCJjb250ZW50IiwiY29udGVudEltZyIsInNjYWxlIiwiY29sb3IiLCJDb2xvciIsImNvbnRlbnRDb3VudCIsIkxhYmVsIiwiZm9udFNpemUiLCJyZXBlYXRGb3JldmVyIiwibWludXNCb21iQ291bnQiLCJ1cGdyYWRlQm9tYkNvdW50IiwibmV4dElkeCIsImZpbmRJbmRleCIsIm4iLCJnYW1lT3ZlciIsImN1cnJlbnRDb3VudCIsInN0cmluZyIsInN0YXR1cyIsImdhbWVTdGF0dXMiLCJib2FyZFNjcmlwdCIsIm92ZXJIYW5kbGVyIiwiZGlhbG9nIiwibm9kZSIsImF1ZGlvRW5naW5lIiwicGxheSIsImRpYWxvZ1NjcmlwdCIsInNldENvbnRlbnQiLCJzZXRDYWxsYmFjayIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYmFja1RvSW50cm8iLCJyZXBsYXkiLCJydWxlRGlzcGxheSIsImFjdGl2ZSIsIkFuaW1hdGlvbiIsInJ1bGVIaWRkZW4iLCJvbkxvYWQiLCJjbGlwSWQiLCJzZXRHZXRBY3RpdmVCb21iSGFuZGxlciIsInNldEdhbWVTdGF0dXNIYW5kbGVyIiwiYmluZCIsInNldE1pbnVzQm9tYkNvdW50SGFuZGxlciIsInN0YXJ0SGFuZGxlciIsIm9uRGVzdHJveSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEQTtBQUVWQyxJQUFBQSxLQUFLLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGQTtBQUdWRSxJQUFBQSxLQUFLLEVBQUVQLEVBQUUsQ0FBQ0ssSUFIQTtBQUlWRyxJQUFBQSxLQUFLLEVBQUVSLEVBQUUsQ0FBQ0ssSUFKQTtBQUtWSSxJQUFBQSxZQUFZLEVBQUVULEVBQUUsQ0FBQ1UsTUFMUDtBQU1WQyxJQUFBQSxVQUFVLEVBQUVYLEVBQUUsQ0FBQ0ssSUFOTDtBQU9WTyxJQUFBQSxNQUFNLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5DLE1BQUFBLElBQUksRUFBRWIsRUFBRSxDQUFDYztBQUZILEtBUEU7QUFXVkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSRixNQUFBQSxJQUFJLEVBQUViLEVBQUUsQ0FBQ2M7QUFGRCxLQVhBO0FBZVZFLElBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFTLElBREY7QUFFUEgsTUFBQUEsSUFBSSxFQUFFYixFQUFFLENBQUNjO0FBRkY7QUFmQyxHQUhMO0FBd0JQRyxFQUFBQSxZQXhCTyx3QkF3Qk1DLENBeEJOLEVBd0JTQyxNQXhCVCxFQXdCaUI7QUFBQTs7QUFDdEJBLElBQUFBLE1BQU0sR0FBRyxDQUFDQSxNQUFWO0FBQ0EsUUFBSUEsTUFBTSxLQUFLLEtBQUtDLFVBQXBC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LFNBQUtNLE9BQUwsR0FBZSxHQUFHLEtBQUtwQixLQUFSLEVBQWUsS0FBS0MsS0FBcEIsRUFBMkIsS0FBS0MsS0FBaEMsQ0FBZjtBQUNBLFNBQUthLFNBQUwsR0FBaUIsR0FBRyxFQUFILEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBakI7QUFDQSxTQUFLNkMsVUFBTCxHQUFrQixTQUFsQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBSy9ELEtBQUwsQ0FBV3NDLFlBQVgsQ0FBd0IsT0FBeEIsQ0FBbkI7QUFDQSxTQUFLZ0IsZ0JBQUw7QUFDRCxHQXJLTTtBQXVLUHRCLEVBQUFBLEtBdktPLG1CQXVLQztBQUFBOztBQUNOLFNBQUtuQixZQUFMLENBQWtCLElBQWxCLEVBQXdCLENBQXhCO0FBQ0EsU0FBS2tELFdBQUwsQ0FBaUJtQix1QkFBakIsQ0FBeUM7QUFBQSxhQUFNLE1BQUksQ0FBQ2xFLFVBQVg7QUFBQSxLQUF6QztBQUNBLFNBQUsrQyxXQUFMLENBQWlCb0Isb0JBQWpCLENBQXNDLEtBQUt6QixRQUFMLENBQWMwQixJQUFkLENBQW1CLElBQW5CLENBQXRDO0FBQ0EsU0FBS3JCLFdBQUwsQ0FBaUJzQix3QkFBakIsQ0FBMEMsS0FBS2hDLGNBQUwsQ0FBb0IrQixJQUFwQixDQUF5QixJQUF6QixDQUExQztBQUNBLFNBQUtyQixXQUFMLENBQWlCdUIsWUFBakI7QUFDRCxHQTdLTTtBQStLUEMsRUFBQUEsU0EvS08sdUJBK0tLO0FBQ1YzRixJQUFBQSxFQUFFLENBQUN1RSxXQUFILENBQWVxQixJQUFmLENBQW9CLEtBQUtQLE1BQXpCO0FBQ0QsR0FqTE0sQ0FrTFA7O0FBbExPLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICBib2FyZDogY2MuTm9kZSxcbiAgICBib21iMTogY2MuTm9kZSxcbiAgICBib21iMjogY2MuTm9kZSxcbiAgICBib21iMzogY2MuTm9kZSxcbiAgICBkaWFsb2dQcmVmYWI6IGNjLlByZWZhYixcbiAgICBydWxlV2luZG93OiBjYy5Ob2RlLFxuICAgIGJnQ2xpcDoge1xuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICB9LFxuICAgIGxvc2VDbGlwOiB7XG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgIH0sXG4gICAgd2luQ2xpcDoge1xuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICB9LFxuICB9LFxuXG4gIHN3aXRjaEFjdGl2ZShlLCBudW1iZXIpIHtcbiAgICBudW1iZXIgPSArbnVtYmVyXG4gICAgaWYgKG51bWJlciA9PT0gdGhpcy5ib21iQWN0aXZlKSByZXR1cm5cblxuICAgIGlmICh0aGlzLmJvbWJDb3VudFtudW1iZXJdID09PSAwKSByZXR1cm5cblxuICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL2JvbWJfbm9ybWFsXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICB0aGlzLmJvbWJCb3guZm9yRWFjaCgoYm9tYiwgaWR4KSA9PiB7XG4gICAgICAgIGlmIChpZHggPT09IDAgfHwgaWR4ID09PSBudW1iZXIpIHJldHVyblxuICAgICAgICBsZXQgYm9yZGVyID0gYm9tYi5nZXRDaGlsZEJ5TmFtZShcImJvdHRvbV9mbGV4X19pdGVtX19ib3JkZXJcIilcbiAgICAgICAgLyoqIOWBnOatouaJgOacieWLleS9nCAqL1xuICAgICAgICBib3JkZXIuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAvKiog5qCh5q2j6KeS5bqmICovXG4gICAgICAgIGNjLnR3ZWVuKGJvcmRlcikudG8oMCwgeyBhbmdsZTogMCB9KS5zdGFydCgpXG4gICAgICAgIGJvcmRlci5yZW1vdmVBbGxDaGlsZHJlbigpXG4gICAgICAgIGJvcmRlci5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZShwcmVmYWIpKVxuXG4gICAgICAgIGxldCBiZyA9IGJvbWIuZ2V0Q2hpbGRCeU5hbWUoXCJib3R0b21fZmxleF9faXRlbV9fYmdcIilcbiAgICAgICAgbGV0IGN0eCA9IGJnLmdldENvbXBvbmVudChjYy5HcmFwaGljcylcbiAgICAgICAgY3R4LmNsZWFyKClcbiAgICAgICAgY3R4LmZpbGxDb2xvciA9IFwiIzBCQTM5MFwiXG4gICAgICAgIGN0eC5jaXJjbGUoMCwgLTIsIDU1KVxuICAgICAgICBjdHguZmlsbCgpXG5cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBib21iLmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2ZsZXhfX2l0ZW1fX2NvbnRlbnRcIilcbiAgICAgICAgbGV0IGNvbnRlbnRJbWcgPSBjb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm9tYl9pbWdcIilcblxuICAgICAgICBjb250ZW50SW1nLnNjYWxlID0gMC44XG4gICAgICAgIGNvbnRlbnRJbWcuY29sb3IgPSBuZXcgY2MuQ29sb3IoMTM2LCAxMzYsIDEzNilcblxuICAgICAgICBsZXQgY29udGVudENvdW50ID0gY29udGVudC5nZXRDaGlsZEJ5TmFtZShcImJvbWJfY291bnRcIilcbiAgICAgICAgY29udGVudENvdW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSAxNlxuICAgICAgICBjb250ZW50Q291bnQuY29sb3IgPSBuZXcgY2MuQ29sb3IoMTM2LCAxMzYsIDEzNilcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL2JvbWJfYWN0aXZlXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICB0aGlzLmJvbWJCb3guZm9yRWFjaCgoYm9tYiwgaWR4KSA9PiB7XG4gICAgICAgIGlmIChpZHggIT09IDAgJiYgaWR4ID09PSBudW1iZXIpIHtcbiAgICAgICAgICBsZXQgYm9yZGVyID0gYm9tYi5nZXRDaGlsZEJ5TmFtZShcImJvdHRvbV9mbGV4X19pdGVtX19ib3JkZXJcIilcbiAgICAgICAgICBib3JkZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKVxuICAgICAgICAgIGJvcmRlci5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZShwcmVmYWIpKVxuICAgICAgICAgIC8vIGJvcmRlci5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5yb3RhdGVCeSg3LCAzNjApKSlcbiAgICAgICAgICBjYy50d2Vlbihib3JkZXIpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihjYy50d2VlbigpLnRvKDcsIHsgYW5nbGU6IDM2MCB9KSlcbiAgICAgICAgICAgIC5zdGFydCgpXG5cbiAgICAgICAgICBsZXQgYmcgPSBib21iLmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2ZsZXhfX2l0ZW1fX2JnXCIpXG4gICAgICAgICAgbGV0IGN0eCA9IGJnLmdldENvbXBvbmVudChjYy5HcmFwaGljcylcbiAgICAgICAgICBjdHguY2xlYXIoKVxuICAgICAgICAgIGN0eC5maWxsQ29sb3IgPSBcIiNBMkY3RUNcIlxuICAgICAgICAgIGN0eC5jaXJjbGUoMCwgMCwgNjUpXG4gICAgICAgICAgY3R4LmZpbGwoKVxuXG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBib21iLmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2ZsZXhfX2l0ZW1fX2NvbnRlbnRcIilcbiAgICAgICAgICBsZXQgY29udGVudEltZyA9IGNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJib21iX2ltZ1wiKVxuICAgICAgICAgIGNvbnRlbnRJbWcuc2NhbGUgPSAxXG4gICAgICAgICAgY29udGVudEltZy5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1KVxuICAgICAgICAgIGxldCBjb250ZW50Q291bnQgPSBjb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm9tYl9jb3VudFwiKVxuICAgICAgICAgIGNvbnRlbnRDb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gMjBcbiAgICAgICAgICBjb250ZW50Q291bnQuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5ib21iQWN0aXZlID0gbnVtYmVyXG4gIH0sXG5cbiAgbWludXNCb21iQ291bnQoKSB7XG4gICAgdGhpcy5ib21iQ291bnRbdGhpcy5ib21iQWN0aXZlXSAtPSAxXG4gICAgdGhpcy51cGdyYWRlQm9tYkNvdW50KClcbiAgICBpZiAodGhpcy5ib21iQ291bnRbdGhpcy5ib21iQWN0aXZlXSA9PT0gMCkge1xuICAgICAgbGV0IG5leHRJZHggPSB0aGlzLmJvbWJDb3VudC5maW5kSW5kZXgoKG4pID0+IG4gPiAwKVxuICAgICAgaWYgKG5leHRJZHggPj0gMCkgdGhpcy5zd2l0Y2hBY3RpdmUobnVsbCwgbmV4dElkeClcbiAgICAgIGVsc2UgdGhpcy5nYW1lT3ZlcihcImxvc2VcIilcbiAgICB9XG4gIH0sXG5cbiAgdXBncmFkZUJvbWJDb3VudCgpIHtcbiAgICB0aGlzLmJvbWJCb3guZm9yRWFjaCgoYm9tYiwgaWR4KSA9PiB7XG4gICAgICBpZiAoaWR4ICE9PSAwKSB7XG4gICAgICAgIGxldCBjdXJyZW50Q291bnQgPSB0aGlzLmJvbWJDb3VudFtpZHhdXG4gICAgICAgIGxldCBjb250ZW50ID0gYm9tYi5nZXRDaGlsZEJ5TmFtZShcImJvdHRvbV9mbGV4X19pdGVtX19jb250ZW50XCIpXG4gICAgICAgIGxldCBjb250ZW50Q291bnQgPSBjb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm9tYl9jb3VudFwiKVxuICAgICAgICBjb250ZW50Q291bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcInggXCIgKyBjdXJyZW50Q291bnRcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGdhbWVPdmVyKHN0YXR1cykge1xuICAgIGlmICh0aGlzLmdhbWVTdGF0dXMgIT09IFwicGxheWluZ1wiKSByZXR1cm4gZmFsc2VcblxuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IHN0YXR1c1xuICAgIHRoaXMuYm9hcmRTY3JpcHQub3ZlckhhbmRsZXIoKVxuXG4gICAgbGV0IGRpYWxvZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGlhbG9nUHJlZmFiKVxuICAgIHRoaXMubm9kZS5hZGRDaGlsZChkaWFsb2cpXG5cbiAgICBpZiAoc3RhdHVzID09PSBcImxvc2VcIikgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmxvc2VDbGlwLCBmYWxzZSwgMSlcbiAgICBlbHNlIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy53aW5DbGlwLCBmYWxzZSwgMSlcblxuICAgIGxldCBkaWFsb2dTY3JpcHQgPSBkaWFsb2cuZ2V0Q29tcG9uZW50KFwiZGlhbG9nXCIpXG4gICAgZGlhbG9nU2NyaXB0LnNldENvbnRlbnQoXCJ5b3UgXCIgKyBzdGF0dXMgKyBcIiEgcmVwbGF5P1wiKVxuICAgIGRpYWxvZ1NjcmlwdC5zZXRDYWxsYmFjaygoKSA9PiBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpKVxuICB9LFxuXG4gIGJhY2tUb0ludHJvKCkge1xuICAgIGxldCBkaWFsb2cgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpYWxvZ1ByZWZhYilcbiAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZGlhbG9nKVxuICAgIGxldCBkaWFsb2dTY3JpcHQgPSBkaWFsb2cuZ2V0Q29tcG9uZW50KFwiZGlhbG9nXCIpXG4gICAgZGlhbG9nU2NyaXB0LnNldENvbnRlbnQoXCJZb3UgcmVhbGx5IHdhbnQgdG8gZ28gYWhlYWQ/XCIpXG4gICAgZGlhbG9nU2NyaXB0LnNldENhbGxiYWNrKCgpID0+IGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImludHJvXCIpKVxuICB9LFxuXG4gIHJlcGxheSgpIHtcbiAgICBsZXQgZGlhbG9nID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWFsb2dQcmVmYWIpXG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKGRpYWxvZylcbiAgICBsZXQgZGlhbG9nU2NyaXB0ID0gZGlhbG9nLmdldENvbXBvbmVudChcImRpYWxvZ1wiKVxuICAgIGRpYWxvZ1NjcmlwdC5zZXRDb250ZW50KFwiUmVwbGF5P1wiKVxuICAgIGRpYWxvZ1NjcmlwdC5zZXRDYWxsYmFjaygoKSA9PiBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpKVxuICB9LFxuXG4gIHJ1bGVEaXNwbGF5KCkge1xuICAgIHRoaXMucnVsZVdpbmRvdy5hY3RpdmUgPSB0cnVlXG4gICAgdGhpcy5ydWxlV2luZG93LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzbGljZS1pblwiKVxuICB9LFxuXG4gIHJ1bGVIaWRkZW4oKSB7XG4gICAgdGhpcy5ydWxlV2luZG93LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzbGljZS1vdXRcIilcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5jbGlwSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmdDbGlwLCB0cnVlLCAwLjUpXG4gICAgdGhpcy5ib21iQWN0aXZlID0gMFxuICAgIHRoaXMuYm9tYkJveCA9IFssIHRoaXMuYm9tYjEsIHRoaXMuYm9tYjIsIHRoaXMuYm9tYjNdXG4gICAgdGhpcy5ib21iQ291bnQgPSBbLCAyNiwgMywgMV1cbiAgICB0aGlzLmdhbWVTdGF0dXMgPSBcInBsYXlpbmdcIlxuICAgIHRoaXMuYm9hcmRTY3JpcHQgPSB0aGlzLmJvYXJkLmdldENvbXBvbmVudChcImJvYXJkXCIpXG4gICAgdGhpcy51cGdyYWRlQm9tYkNvdW50KClcbiAgfSxcblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnN3aXRjaEFjdGl2ZShudWxsLCAxKVxuICAgIHRoaXMuYm9hcmRTY3JpcHQuc2V0R2V0QWN0aXZlQm9tYkhhbmRsZXIoKCkgPT4gdGhpcy5ib21iQWN0aXZlKVxuICAgIHRoaXMuYm9hcmRTY3JpcHQuc2V0R2FtZVN0YXR1c0hhbmRsZXIodGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpKVxuICAgIHRoaXMuYm9hcmRTY3JpcHQuc2V0TWludXNCb21iQ291bnRIYW5kbGVyKHRoaXMubWludXNCb21iQ291bnQuYmluZCh0aGlzKSlcbiAgICB0aGlzLmJvYXJkU2NyaXB0LnN0YXJ0SGFuZGxlcigpXG4gIH0sXG5cbiAgb25EZXN0cm95KCkge1xuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5jbGlwSWQpXG4gIH0sXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSlcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ec1aGXiIxOzoV7X8U4a60y', 'rule');
// scripts/rule.js

"use strict";

cc.Class({
  "extends": cc.Component,
  reset: function reset() {
    this.node.getChildByName('ScrollView').getComponent(cc.ScrollView).scrollToTop(0);
    this.node.active = false;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3J1bGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInJlc2V0Iiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiU2Nyb2xsVmlldyIsInNjcm9sbFRvVG9wIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxLQUhPLG1CQUdDO0FBQ04sU0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFlBQXpCLEVBQXVDQyxZQUF2QyxDQUFvRE4sRUFBRSxDQUFDTyxVQUF2RCxFQUFtRUMsV0FBbkUsQ0FBK0UsQ0FBL0U7QUFDQSxTQUFLSixJQUFMLENBQVVLLE1BQVYsR0FBbUIsS0FBbkI7QUFDRDtBQU5NLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU2Nyb2xsVmlldycpLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5zY3JvbGxUb1RvcCgwKTtcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/meteor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab16126wxNNq6Dep10Xpyh+', 'meteor');
// scripts/meteor.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // LIFE-CYCLE CALLBACKS:
  getShipMeta: function getShipMeta(type, direction) {
    switch (type) {
      case "A":
        {
          return {
            w: 100,
            h: 100,
            minRow: 0,
            minCol: 0,
            maxRow: 8,
            maxCol: 8,
            body: function body(row, col) {
              return [[row, col], [row + 1, col], [row, col + 1], [row + 1, col + 1]];
            }
          };
        }

      case "B":
        {
          switch (direction) {
            case "U":
            case "D":
              return {
                w: 150,
                h: 100,
                minRow: 0,
                minCol: 0,
                maxRow: 8,
                maxCol: 7,
                body: function body(row, col) {
                  return [[row, col], [row + 1, col], [row, col + 1], [row + 1, col + 1], [row, col + 2], [row + 1, col + 2]];
                }
              };

            case "L":
            case "R":
              return {
                w: 100,
                h: 150,
                minRow: 0,
                minCol: 0,
                maxRow: 7,
                maxCol: 8,
                body: function body(row, col) {
                  return [[row, col], [row + 1, col], [row + 2, col], [row, col + 1], [row + 1, col + 1], [row + 2, col + 1]];
                }
              };
          }
        }

      case "C":
        {
          return {
            w: 100,
            h: 100,
            minRow: 0,
            minCol: 0,
            maxRow: 8,
            maxCol: 8,
            body: function body(row, col) {
              return [[row, col], [row + 1, col], [row, col + 1], [row + 1, col + 1]];
            }
          };
        }

      case "D":
      case "E":
        {
          switch (direction) {
            case "U":
            case "D":
              return {
                w: 100,
                h: 50,
                minRow: 0,
                minCol: 0,
                maxRow: 9,
                maxCol: 8,
                body: function body(row, col) {
                  return [[row, col], [row, col + 1]];
                }
              };

            case "L":
            case "R":
              return {
                w: 50,
                h: 100,
                minRow: 0,
                minCol: 0,
                maxRow: 8,
                maxCol: 9,
                body: function body(row, col) {
                  return [[row + 1, col], [row, col]];
                }
              };
          }
        }
    }
  },
  getDirection: function getDirection() {
    return ["U", "D", "L", "R"][parseInt(Math.random() * 4)];
  },
  getLocation: function getLocation() {
    var _this$getShipMeta = this.getShipMeta(this.type, this.direction),
        minRow = _this$getShipMeta.minRow,
        minCol = _this$getShipMeta.minCol,
        maxRow = _this$getShipMeta.maxRow,
        maxCol = _this$getShipMeta.maxCol,
        body = _this$getShipMeta.body;

    var randomRow = parseInt(Math.random() * (maxRow - minRow + 1)) + minRow;
    var randomCol = parseInt(Math.random() * (maxCol - minCol + 1)) + minCol;
    this.origin = {
      row: randomRow,
      col: randomCol
    };
    this.location = body(randomRow, randomCol);
  },
  setPosition: function setPosition(x, y) {
    this.node.x = x;
    this.node.y = y;
  },
  spawnMeteor: function spawnMeteor(type) {
    var _this = this;

    this.type = type;
    this.direction = this.getDirection();

    var _this$getShipMeta2 = this.getShipMeta(this.type, this.direction),
        w = _this$getShipMeta2.w,
        h = _this$getShipMeta2.h;

    cc.resources.load("images/Meteor_" + type + "/" + type + "_" + this.direction, cc.SpriteFrame, function (err, spriteFrame) {
      var sprite = _this.node.getComponent(cc.Sprite);

      sprite.spriteFrame = spriteFrame;
      _this.node.width = w;
      _this.node.height = h;
    });
  },
  setShootDown: function setShootDown() {
    this.isShootDown = true;
    this.node.color = new cc.Color(255, 0, 0);
  },
  onLoad: function onLoad() {
    this.node.opacity = 200;
    this.node.active = false;
    this.isShootDown = false;
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21ldGVvci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiZ2V0U2hpcE1ldGEiLCJ0eXBlIiwiZGlyZWN0aW9uIiwidyIsImgiLCJtaW5Sb3ciLCJtaW5Db2wiLCJtYXhSb3ciLCJtYXhDb2wiLCJib2R5Iiwicm93IiwiY29sIiwiZ2V0RGlyZWN0aW9uIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiZ2V0TG9jYXRpb24iLCJyYW5kb21Sb3ciLCJyYW5kb21Db2wiLCJvcmlnaW4iLCJsb2NhdGlvbiIsInNldFBvc2l0aW9uIiwieCIsInkiLCJub2RlIiwic3Bhd25NZXRlb3IiLCJyZXNvdXJjZXMiLCJsb2FkIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJzcHJpdGVGcmFtZSIsInNwcml0ZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0U2hvb3REb3duIiwiaXNTaG9vdERvd24iLCJjb2xvciIsIkNvbG9yIiwib25Mb2FkIiwib3BhY2l0eSIsImFjdGl2ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQO0FBRUFDLEVBQUFBLFdBSk8sdUJBSUtDLElBSkwsRUFJV0MsU0FKWCxFQUlzQjtBQUMzQixZQUFRRCxJQUFSO0FBQ0UsV0FBSyxHQUFMO0FBQVU7QUFDUixpQkFBTztBQUNMRSxZQUFBQSxDQUFDLEVBQUUsR0FERTtBQUVMQyxZQUFBQSxDQUFDLEVBQUUsR0FGRTtBQUdMQyxZQUFBQSxNQUFNLEVBQUUsQ0FISDtBQUlMQyxZQUFBQSxNQUFNLEVBQUUsQ0FKSDtBQUtMQyxZQUFBQSxNQUFNLEVBQUUsQ0FMSDtBQU1MQyxZQUFBQSxNQUFNLEVBQUUsQ0FOSDtBQU9MQyxZQUFBQSxJQUFJLEVBQUUsY0FBQ0MsR0FBRCxFQUFNQyxHQUFOO0FB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Q0QsR0FwS007QUFzS1BNLEVBQUFBLEtBdEtPLG1CQXNLQyxDQUFFLENBdEtILENBd0tQOztBQXhLTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgZ2V0U2hpcE1ldGEodHlwZSwgZGlyZWN0aW9uKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwiQVwiOiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdzogMTAwLFxuICAgICAgICAgIGg6IDEwMCxcbiAgICAgICAgICBtaW5Sb3c6IDAsXG4gICAgICAgICAgbWluQ29sOiAwLFxuICAgICAgICAgIG1heFJvdzogOCxcbiAgICAgICAgICBtYXhDb2w6IDgsXG4gICAgICAgICAgYm9keTogKHJvdywgY29sKSA9PiBbXG4gICAgICAgICAgICBbcm93LCBjb2xdLFxuICAgICAgICAgICAgW3JvdyArIDEsIGNvbF0sXG4gICAgICAgICAgICBbcm93LCBjb2wgKyAxXSxcbiAgICAgICAgICAgIFtyb3cgKyAxLCBjb2wgKyAxXSxcbiAgICAgICAgICBdLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlIFwiQlwiOiB7XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgY2FzZSBcIlVcIjpcbiAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdzogMTUwLFxuICAgICAgICAgICAgICBoOiAxMDAsXG4gICAgICAgICAgICAgIG1pblJvdzogMCxcbiAgICAgICAgICAgICAgbWluQ29sOiAwLFxuICAgICAgICAgICAgICBtYXhSb3c6IDgsXG4gICAgICAgICAgICAgIG1heENvbDogNyxcbiAgICAgICAgICAgICAgYm9keTogKHJvdywgY29sKSA9PiBbXG4gICAgICAgICAgICAgICAgW3JvdywgY29sXSxcbiAgICAgICAgICAgICAgICBbcm93ICsgMSwgY29sXSxcbiAgICAgICAgICAgICAgICBbcm93LCBjb2wgKyAxXSxcbiAgICAgICAgICAgICAgICBbcm93ICsgMSwgY29sICsgMV0sXG4gICAgICAgICAgICAgICAgW3JvdywgY29sICsgMl0sXG4gICAgICAgICAgICAgICAgW3JvdyArIDEsIGNvbCArIDJdLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgY2FzZSBcIlJcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHc6IDEwMCxcbiAgICAgICAgICAgICAgaDogMTUwLFxuICAgICAgICAgICAgICBtaW5Sb3c6IDAsXG4gICAgICAgICAgICAgIG1pbkNvbDogMCxcbiAgICAgICAgICAgICAgbWF4Um93OiA3LFxuICAgICAgICAgICAgICBtYXhDb2w6IDgsXG4gICAgICAgICAgICAgIGJvZHk6IChyb3csIGNvbCkgPT4gW1xuICAgICAgICAgICAgICAgIFtyb3csIGNvbF0sXG4gICAgICAgICAgICAgICAgW3JvdyArIDEsIGNvbF0sXG4gICAgICAgICAgICAgICAgW3JvdyArIDIsIGNvbF0sXG4gICAgICAgICAgICAgICAgW3JvdywgY29sICsgMV0sXG4gICAgICAgICAgICAgICAgW3JvdyArIDEsIGNvbCArIDFdLFxuICAgICAgICAgICAgICAgIFtyb3cgKyAyLCBjb2wgKyAxXSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBcIkNcIjoge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHc6IDEwMCxcbiAgICAgICAgICBoOiAxMDAsXG4gICAgICAgICAgbWluUm93OiAwLFxuICAgICAgICAgIG1pbkNvbDogMCxcbiAgICAgICAgICBtYXhSb3c6IDgsXG4gICAgICAgICAgbWF4Q29sOiA4LFxuICAgICAgICAgIGJvZHk6IChyb3csIGNvbCkgPT4gW1xuICAgICAgICAgICAgW3JvdywgY29sXSxcbiAgICAgICAgICAgIFtyb3cgKyAxLCBjb2xdLFxuICAgICAgICAgICAgW3JvdywgY29sICsgMV0sXG4gICAgICAgICAgICBbcm93ICsgMSwgY29sICsgMV0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBcIkRcIjpcbiAgICAgIGNhc2UgXCJFXCI6IHtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIFwiVVwiOlxuICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB3OiAxMDAsXG4gICAgICAgICAgICAgIGg6IDUwLFxuICAgICAgICAgICAgICBtaW5Sb3c6IDAsXG4gICAgICAgICAgICAgIG1pbkNvbDogMCxcbiAgICAgICAgICAgICAgbWF4Um93OiA5LFxuICAgICAgICAgICAgICBtYXhDb2w6IDgsXG4gICAgICAgICAgICAgIGJvZHk6IChyb3csIGNvbCkgPT4gW1xuICAgICAgICAgICAgICAgIFtyb3csIGNvbF0sXG4gICAgICAgICAgICAgICAgW3JvdywgY29sICsgMV0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICBjYXNlIFwiUlwiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdzogNTAsXG4gICAgICAgICAgICAgIGg6IDEwMCxcbiAgICAgICAgICAgICAgbWluUm93OiAwLFxuICAgICAgICAgICAgICBtaW5Db2w6IDAsXG4gICAgICAgICAgICAgIG1heFJvdzogOCxcbiAgICAgICAgICAgICAgbWF4Q29sOiA5LFxuICAgICAgICAgICAgICBib2R5OiAocm93LCBjb2wpID0+IFtcbiAgICAgICAgICAgICAgICBbcm93ICsgMSwgY29sXSxcbiAgICAgICAgICAgICAgICBbcm93LCBjb2xdLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gW1wiVVwiLCBcIkRcIiwgXCJMXCIsIFwiUlwiXVtwYXJzZUludChNYXRoLnJhbmRvbSgpICogNCldXG4gIH0sXG5cbiAgZ2V0TG9jYXRpb24oKSB7XG4gICAgbGV0IHsgbWluUm93LCBtaW5Db2wsIG1heFJvdywgbWF4Q29sLCBib2R5IH0gPSB0aGlzLmdldFNoaXBNZXRhKFxuICAgICAgdGhpcy50eXBlLFxuICAgICAgdGhpcy5kaXJlY3Rpb25cbiAgICApXG4gICAgbGV0IHJhbmRvbVJvdyA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAobWF4Um93IC0gbWluUm93ICsgMSkpICsgbWluUm93XG4gICAgbGV0IHJhbmRvbUNvbCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAobWF4Q29sIC0gbWluQ29sICsgMSkpICsgbWluQ29sXG5cbiAgICB0aGlzLm9yaWdpbiA9IHtcbiAgICAgIHJvdzogcmFuZG9tUm93LFxuICAgICAgY29sOiByYW5kb21Db2wsXG4gICAgfVxuICAgIHRoaXMubG9jYXRpb24gPSBib2R5KHJhbmRvbVJvdywgcmFuZG9tQ29sKVxuICB9LFxuXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcbiAgICB0aGlzLm5vZGUueCA9IHhcbiAgICB0aGlzLm5vZGUueSA9IHlcbiAgfSxcblxuICBzcGF3bk1ldGVvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZVxuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKVxuICAgIGxldCB7IHcsIGggfSA9IHRoaXMuZ2V0U2hpcE1ldGEodGhpcy50eXBlLCB0aGlzLmRpcmVjdGlvbilcblxuICAgIGNjLnJlc291cmNlcy5sb2FkKFxuICAgICAgXCJpbWFnZXMvTWV0ZW9yX1wiICsgdHlwZSArIFwiL1wiICsgdHlwZSArIFwiX1wiICsgdGhpcy5kaXJlY3Rpb24sXG4gICAgICBjYy5TcHJpdGVGcmFtZSxcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWVcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gd1xuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gaFxuICAgICAgfVxuICAgIClcbiAgfSxcblxuICBzZXRTaG9vdERvd24oKSB7XG4gICAgdGhpcy5pc1Nob290RG93biA9IHRydWVcbiAgICB0aGlzLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAwLCAwKVxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDIwMFxuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2hvb3REb3duID0gZmFsc2VcbiAgfSxcblxuICBzdGFydCgpIHt9LFxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSlcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/dialog/cover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a84d04BSwRFJac3grNhGy1A', 'cover');
// scripts/dialog/cover.js

"use strict";

cc.Class({
  "extends": cc.Component,
  stopBubbling: function stopBubbling(e) {
    e.stopPropagation();
    return false;
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.MOUSE_MOVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_START, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.stopBubbling, this);
  },
  onDestroy: function onDestroy() {
    this.node.off(cc.Node.EventType.MOUSE_MOVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.MOUSE_DOWN, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_START, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.stopBubbling, this);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RpYWxvZy9jb3Zlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RvcEJ1YmJsaW5nIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9NT1ZFIiwiTU9VU0VfTEVBVkUiLCJNT1VTRV9ET1dOIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfRU5EIiwib25EZXN0cm95Iiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxZQUhPLHdCQUdNQyxDQUhOLEVBR1M7QUFDZEEsSUFBQUEsQ0FBQyxDQUFDQyxlQUFGO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsR0FOTTtBQVFQO0FBRUFDLEVBQUFBLE1BVk8sb0JBVUU7QUFDUCxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTJDLEtBQUtSLFlBQWhELEVBQThELElBQTlEO0FBQ0EsU0FBS0ksSUFBTCxDQUFVQyxFQUFWLENBQWFSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCRSxXQUEvQixFQUE0QyxLQUFLVCxZQUFqRCxFQUErRCxJQUEvRDtBQUNBLFNBQUtJLElBQUwsQ0FBVUMsRUFBVixDQUFhUixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsVUFBL0IsRUFBMkMsS0FBS1YsWUFBaEQsRUFBOEQsSUFBOUQ7QUFDQSxTQUFLSSxJQUFMLENBQVVDLEVBQVYsQ0FBYVIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JJLFdBQS9CLEVBQTRDLEtBQUtYLFlBQWpELEVBQStELElBQS9EO0FBQ0EsU0FBS0ksSUFBTCxDQUFVQyxFQUFWLENBQWFSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCSyxVQUEvQixFQUEyQyxLQUFLWixZQUFoRCxFQUE4RCxJQUE5RDtBQUNBLFNBQUtJLElBQUwsQ0FBVUMsRUFBVixDQUFhUixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQk0sU0FBL0IsRUFBMEMsS0FBS2IsWUFBL0MsRUFBNkQsSUFBN0Q7QUFDRCxHQWpCTTtBQW1CUGMsRUFBQUEsU0FuQk8sdUJBbUJLO0FBQ1YsU0FBS1YsSUFBTCxDQUFVVyxHQUFWLENBQWNsQixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBaEMsRUFBNEMsS0FBS1IsWUFBakQsRUFBK0QsSUFBL0Q7QUFDQSxTQUFLSSxJQUFMLENBQVVXLEdBQVYsQ0FBY2xCLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCRSxXQUFoQyxFQUE2QyxLQUFLVCxZQUFsRCxFQUFnRSxJQUFoRTtBQUNBLFNBQUtJLElBQUwsQ0FBVVcsR0FBVixDQUFjbEIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JHLFVBQWhDLEVBQTRDLEtBQUtWLFlBQWpELEVBQStELElBQS9EO0FBQ0EsU0FBS0ksSUFBTCxDQUFVVyxHQUFWLENBQWNsQixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQkksV0FBaEMsRUFBNkMsS0FBS1gsWUFBbEQsRUFBZ0UsSUFBaEU7QUFDQSxTQUFLSSxJQUFMLENBQVVXLEdBQVYsQ0FBY2xCLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCSyxVQUFoQyxFQUE0QyxLQUFLWixZQUFqRCxFQUErRCxJQUEvRDtBQUNBLFNBQUtJLElBQUwsQ0FBVVcsR0FBVixDQUFjbEIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JNLFNBQWhDLEVBQTJDLEtBQUtiLFlBQWhELEVBQThELElBQTlEO0FBQ0Q7QUExQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgc3RvcEJ1YmJsaW5nKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX01PVkUsIHRoaXMuc3RvcEJ1YmJsaW5nLCB0aGlzKTtcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMuc3RvcEJ1YmJsaW5nLCB0aGlzKTtcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5zdG9wQnViYmxpbmcsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zdG9wQnViYmxpbmcsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnN0b3BCdWJibGluZywgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zdG9wQnViYmxpbmcsIHRoaXMpO1xuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX01PVkUsIHRoaXMuc3RvcEJ1YmJsaW5nLCB0aGlzKTtcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLnN0b3BCdWJibGluZywgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLnN0b3BCdWJibGluZywgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zdG9wQnViYmxpbmcsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5zdG9wQnViYmxpbmcsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnN0b3BCdWJibGluZywgdGhpcyk7XG4gIH1cbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17b6as9b7BNpZ15wM0LAYSg', 'use_reversed_rotateTo');
// migration/use_reversed_rotateTo.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.2.1/v2.2.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.2.1/v2.2.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateTo._reverse = true;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3JldmVyc2VkX3JvdGF0ZVRvLmpzIl0sIm5hbWVzIjpbImNjIiwiUm90YXRlVG8iLCJfcmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxRQUFaLEdBQXVCLElBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdjIuMS4wL3YyLjEuMS92Mi4yLjEvdjIuMi4yIHZlcnNpb25zLlxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuQWN0aW9uIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxuICpcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAvdjIuMS4xL3YyLjIuMS92Mi4yLjIg54mI5pys55qE5bel56iL77yMXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBBY3Rpb27vvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXG4gKi9cblxuY2MuUm90YXRlVG8uX3JldmVyc2UgPSB0cnVlO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/dialog/dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01159Mg+XdCPKsCf+EJ/R6X', 'dialog');
// scripts/dialog/dialog.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Label
  },
  resolve: function resolve() {
    this.resolveCallback();
  },
  reject: function reject() {
    this.node.destroy();
    this.rejectCallback();
  },
  setContent: function setContent(str) {
    this.content.getComponent(cc.Label).string = str;
  },
  setCallback: function setCallback(resolve, reject) {
    if (resolve === void 0) {
      resolve = function resolve() {
        return false;
      };
    }

    if (reject === void 0) {
      reject = function reject() {
        return false;
      };
    }

    this.resolveCallback = resolve;
    this.rejectCallback = reject;
  },
  onLoad: function onLoad() {
    this.resolveCallback = function () {
      return false;
    };

    this.rejectCallback = function () {
      return false;
    };
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RpYWxvZy9kaWFsb2cuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTGFiZWwiLCJyZXNvbHZlIiwicmVzb2x2ZUNhbGxiYWNrIiwicmVqZWN0Iiwibm9kZSIsImRlc3Ryb3kiLCJyZWplY3RDYWxsYmFjayIsInNldENvbnRlbnQiLCJzdHIiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJzZXRDYWxsYmFjayIsIm9uTG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSztBQURGLEdBSEw7QUFPUEMsRUFBQUEsT0FQTyxxQkFPRztBQUNSLFNBQUtDLGVBQUw7QUFDRCxHQVRNO0FBV1BDLEVBQUFBLE1BWE8sb0JBV0U7QUFDUCxTQUFLQyxJQUFMLENBQVVDLE9BQVY7QUFDQSxTQUFLQyxjQUFMO0FBQ0QsR0FkTTtBQWdCUEMsRUFBQUEsVUFoQk8sc0JBZ0JJQyxHQWhCSixFQWdCUztBQUNkLFNBQUtULE9BQUwsQ0FBYVUsWUFBYixDQUEwQmQsRUFBRSxDQUFDSyxLQUE3QixFQUFvQ1UsTUFBcEMsR0FBNkNGLEdBQTdDO0FBQ0QsR0FsQk07QUFvQlBHLEVBQUFBLFdBcEJPLHVCQW9CS1YsT0FwQkwsRUFvQjRCRSxNQXBCNUIsRUFvQmtEO0FBQUEsUUFBN0NGLE9BQTZDO0FBQTdDQSxNQUFBQSxPQUE2QyxHQUFuQztBQUFBLGVBQU0sS0FBTjtBQUFBLE9BQW1DO0FBQUE7O0FBQUEsUUFBdEJFLE1BQXNCO0FBQXRCQSxNQUFBQSxNQUFzQixHQUFiO0FBQUEsZUFBTSxLQUFOO0FBQUEsT0FBYTtBQUFBOztBQUN2RCxTQUFLRCxlQUFMLEdBQXVCRCxPQUF2QjtBQUNBLFNBQUtLLGNBQUwsR0FBc0JILE1BQXRCO0FBQ0QsR0F2Qk07QUF5QlBTLEVBQUFBLE1BekJPLG9CQXlCRTtBQUNQLFNBQUtWLGVBQUwsR0FBdUI7QUFBQSxhQUFNLEtBQU47QUFBQSxLQUF2Qjs7QUFDQSxTQUFLSSxjQUFMLEdBQXNCO0FBQUEsYUFBTSxLQUFOO0FBQUEsS0FBdEI7QUFDRDtBQTVCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgY29udGVudDogY2MuTGFiZWxcbiAgfSxcblxuICByZXNvbHZlKCkge1xuICAgIHRoaXMucmVzb2x2ZUNhbGxiYWNrKCk7XG4gIH0sXG5cbiAgcmVqZWN0KCkge1xuICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgdGhpcy5yZWplY3RDYWxsYmFjaygpO1xuICB9LFxuXG4gIHNldENvbnRlbnQoc3RyKSB7XG4gICAgdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RyO1xuICB9LFxuXG4gIHNldENhbGxiYWNrKHJlc29sdmUgPSAoKSA9PiBmYWxzZSwgcmVqZWN0ID0gKCkgPT4gZmFsc2UpIHtcbiAgICB0aGlzLnJlc29sdmVDYWxsYmFjayA9IHJlc29sdmU7XG4gICAgdGhpcy5yZWplY3RDYWxsYmFjayA9IHJlamVjdDtcbiAgfSxcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5yZXNvbHZlQ2FsbGJhY2sgPSAoKSA9PiBmYWxzZTtcbiAgICB0aGlzLnJlamVjdENhbGxiYWNrID0gKCkgPT4gZmFsc2U7XG4gIH1cbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/background.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '515f5VvvkdENIUqN0Twk+37', 'background');
// scripts/background.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bg1: cc.Node,
    bg2: cc.Node
  },
  setEnabled: function setEnabled() {
    this.enabled = true;
  },
  setDisabled: function setDisabled() {
    // 停止 update 運行
    this.enabled = false; // 停止所有行為

    this.node.stopAllActions();
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 初始化背景重置的觸發座標
    this.triggerY = -this.bg1.height;
    this.enabled = false;
    this.speed = 100;
  },
  start: function start() {},
  update: function update(dt) {
    // 背景移动
    this.bg1.y -= dt * this.speed;
    this.bg2.y -= dt * this.speed; // 重置

    if (this.bg1.y <= this.triggerY) this.bg1.y = this.bg2.y + this.bg1.height;else if (this.bg2.y <= this.triggerY) this.bg2.y = this.bg1.y + this.bg1.height;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhY2tncm91bmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZzEiLCJOb2RlIiwiYmcyIiwic2V0RW5hYmxlZCIsImVuYWJsZWQiLCJzZXREaXNhYmxlZCIsIm5vZGUiLCJzdG9wQWxsQWN0aW9ucyIsIm9uTG9hZCIsInRyaWdnZXJZIiwiaGVpZ2h0Iiwic3BlZWQiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLEdBQUcsRUFBRUosRUFBRSxDQUFDSyxJQURFO0FBRVZDLElBQUFBLEdBQUcsRUFBRU4sRUFBRSxDQUFDSztBQUZFLEdBSEw7QUFRUEUsRUFBQUEsVUFSTyx3QkFRTTtBQUNYLFNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0QsR0FWTTtBQVlQQyxFQUFBQSxXQVpPLHlCQVlPO0FBQ1o7QUFDQSxTQUFLRCxPQUFMLEdBQWUsS0FBZixDQUZZLENBR1o7O0FBQ0EsU0FBS0UsSUFBTCxDQUFVQyxjQUFWO0FBQ0QsR0FqQk07QUFtQlA7QUFFQUMsRUFBQUEsTUFyQk8sb0JBcUJFO0FBQ1A7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLENBQUMsS0FBS1QsR0FBTCxDQUFTVSxNQUExQjtBQUNBLFNBQUtOLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS08sS0FBTCxHQUFhLEdBQWI7QUFDRCxHQTFCTTtBQTRCUEMsRUFBQUEsS0E1Qk8sbUJBNEJDLENBRVAsQ0E5Qk07QUFnQ1BDLEVBQUFBLE1BaENPLGtCQWdDQUMsRUFoQ0EsRUFnQ0k7QUFDVDtBQUNBLFNBQUtkLEdBQUwsQ0FBU2UsQ0FBVCxJQUFjRCxFQUFFLEdBQUcsS0FBS0gsS0FBeEI7QUFDQSxTQUFLVCxHQUFMLENBQVNhLENBQVQsSUFBY0QsRUFBRSxHQUFHLEtBQUtILEtBQXhCLENBSFMsQ0FLVDs7QUFDQSxRQUFJLEtBQUtYLEdBQUwsQ0FBU2UsQ0FBVCxJQUFjLEtBQUtOLFFBQXZCLEVBQ0UsS0FBS1QsR0FBTCxDQUFTZSxDQUFULEdBQWEsS0FBS2IsR0FBTCxDQUFTYSxDQUFULEdBQWEsS0FBS2YsR0FBTCxDQUFTVSxNQUFuQyxDQURGLEtBRUssSUFBSSxLQUFLUixHQUFMLENBQVNhLENBQVQsSUFBYyxLQUFLTixRQUF2QixFQUNILEtBQUtQLEdBQUwsQ0FBU2EsQ0FBVCxHQUFhLEtBQUtmLEdBQUwsQ0FBU2UsQ0FBVCxHQUFhLEtBQUtmLEdBQUwsQ0FBU1UsTUFBbkM7QUFFSDtBQTNDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgYmcxOiBjYy5Ob2RlLFxuICAgIGJnMjogY2MuTm9kZSxcbiAgfSxcblxuICBzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gIH0sXG5cbiAgc2V0RGlzYWJsZWQoKSB7XG4gICAgLy8g5YGc5q2iIHVwZGF0ZSDpgYvooYxcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAvLyDlgZzmraLmiYDmnInooYzngrpcbiAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgLy8g5Yid5aeL5YyW6IOM5pmv6YeN572u55qE6Ke455m85bqn5qiZXG4gICAgdGhpcy50cmlnZ2VyWSA9IC10aGlzLmJnMS5oZWlnaHQ7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zcGVlZCA9IDEwMDtcbiAgfSxcblxuICBzdGFydCgpIHtcblxuICB9LFxuXG4gIHVwZGF0ZShkdCkge1xuICAgIC8vIOiDjOaZr+enu+WKqFxuICAgIHRoaXMuYmcxLnkgLT0gZHQgKiB0aGlzLnNwZWVkO1xuICAgIHRoaXMuYmcyLnkgLT0gZHQgKiB0aGlzLnNwZWVkO1xuXG4gICAgLy8g6YeN572uXG4gICAgaWYgKHRoaXMuYmcxLnkgPD0gdGhpcy50cmlnZ2VyWSlcbiAgICAgIHRoaXMuYmcxLnkgPSB0aGlzLmJnMi55ICsgdGhpcy5iZzEuaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMuYmcyLnkgPD0gdGhpcy50cmlnZ2VyWSlcbiAgICAgIHRoaXMuYmcyLnkgPSB0aGlzLmJnMS55ICsgdGhpcy5iZzEuaGVpZ2h0O1xuXG4gIH0sXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/intro.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '561a64wySdGq64V0ju3ZvtG', 'intro');
// scripts/intro.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    background: cc.Node,
    clip: {
      "default": null,
      type: cc.AudioClip
    }
  },
  startGame: function startGame() {
    cc.director.loadScene("game");
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.clipId = cc.audioEngine.play(this.clip, true, 0.5);
  },
  start: function start() {
    this.background.getComponent('background').setEnabled();
  },
  onDestroy: function onDestroy() {
    cc.audioEngine.stop(this.clipId);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2ludHJvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja2dyb3VuZCIsIk5vZGUiLCJjbGlwIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInN0YXJ0R2FtZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwib25Mb2FkIiwiY2xpcElkIiwiYXVkaW9FbmdpbmUiLCJwbGF5Iiwic3RhcnQiLCJnZXRDb21wb25lbnQiLCJzZXRFbmFibGVkIiwib25EZXN0cm95Iiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxJQURMO0FBRVZDLElBQUFBLElBQUksRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0FBRkw7QUFGSSxHQUhMO0FBV1BDLEVBQUFBLFNBWE8sdUJBV0s7QUFDVlQsSUFBQUEsRUFBRSxDQUFDVSxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDRCxHQWJNO0FBZVA7QUFFQUMsRUFBQUEsTUFqQk8sb0JBaUJFO0FBQ1AsU0FBS0MsTUFBTCxHQUFjYixFQUFFLENBQUNjLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLVCxJQUF6QixFQUErQixJQUEvQixFQUFxQyxHQUFyQyxDQUFkO0FBQ0QsR0FuQk07QUFxQlBVLEVBQUFBLEtBckJPLG1CQXFCQztBQUNOLFNBQUtaLFVBQUwsQ0FBZ0JhLFlBQWhCLENBQTZCLFlBQTdCLEVBQTJDQyxVQUEzQztBQUNELEdBdkJNO0FBeUJQQyxFQUFBQSxTQXpCTyx1QkF5Qks7QUFDVm5CLElBQUFBLEVBQUUsQ0FBQ2MsV0FBSCxDQUFlTSxJQUFmLENBQW9CLEtBQUtQLE1BQXpCO0FBQ0Q7QUEzQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUsXG4gICAgY2xpcDoge1xuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgIH1cbiAgfSxcblxuICBzdGFydEdhbWUoKSB7XG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5jbGlwSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuY2xpcCwgdHJ1ZSwgMC41KTtcbiAgfSxcblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmJhY2tncm91bmQuZ2V0Q29tcG9uZW50KCdiYWNrZ3JvdW5kJykuc2V0RW5hYmxlZCgpO1xuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuY2xpcElkKTtcbiAgfVxufSk7Il19
//------QC-SOURCE-SPLIT------
