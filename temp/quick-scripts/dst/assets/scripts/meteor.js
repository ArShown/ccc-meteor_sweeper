
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