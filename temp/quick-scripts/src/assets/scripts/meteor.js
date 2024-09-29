"use strict";
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