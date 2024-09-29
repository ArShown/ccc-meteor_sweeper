
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJib2FyZCIsIk5vZGUiLCJib21iMSIsImJvbWIyIiwiYm9tYjMiLCJkaWFsb2dQcmVmYWIiLCJQcmVmYWIiLCJydWxlV2luZG93IiwiYmdDbGlwIiwidHlwZSIsIkF1ZGlvQ2xpcCIsImxvc2VDbGlwIiwid2luQ2xpcCIsInN3aXRjaEFjdGl2ZSIsImUiLCJudW1iZXIiLCJib21iQWN0aXZlIiwiYm9tYkNvdW50IiwicmVzb3VyY2VzIiwibG9hZCIsImVyciIsInByZWZhYiIsImJvbWJCb3giLCJmb3JFYWNoIiwiYm9tYiIsImlkeCIsImJvcmRlciIsImdldENoaWxkQnlOYW1lIiwic3RvcEFsbEFjdGlvbnMiLCJ0d2VlbiIsInRvIiwiYW5nbGUiLCJzdGFydCIsInJlbW92ZUFsbENoaWxkcmVuIiwiYWRkQ2hpbGQiLCJpbnN0YW50aWF0ZSIsImJnIiwiY3R4IiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJjbGVhciIsImZpbGxDb2xvciIsImNpcmNsZSIsImZpbGwiLCJjb250ZW50IiwiY29udGVudEltZyIsInNjYWxlIiwiY29sb3IiLCJDb2xvciIsImNvbnRlbnRDb3VudCIsIkxhYmVsIiwiZm9udFNpemUiLCJyZXBlYXRGb3JldmVyIiwibWludXNCb21iQ291bnQiLCJ1cGdyYWRlQm9tYkNvdW50IiwibmV4dElkeCIsImZpbmRJbmRleCIsIm4iLCJnYW1lT3ZlciIsImN1cnJlbnRDb3VudCIsInN0cmluZyIsInN0YXR1cyIsImdhbWVTdGF0dXMiLCJib2FyZFNjcmlwdCIsIm92ZXJIYW5kbGVyIiwiZGlhbG9nIiwibm9kZSIsImF1ZGlvRW5naW5lIiwicGxheSIsImRpYWxvZ1NjcmlwdCIsInNldENvbnRlbnQiLCJzZXRDYWxsYmFjayIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYmFja1RvSW50cm8iLCJyZXBsYXkiLCJydWxlRGlzcGxheSIsImFjdGl2ZSIsIkFuaW1hdGlvbiIsInJ1bGVIaWRkZW4iLCJvbkxvYWQiLCJjbGlwSWQiLCJzZXRHZXRBY3RpdmVCb21iSGFuZGxlciIsInNldEdhbWVTdGF0dXNIYW5kbGVyIiwiYmluZCIsInNldE1pbnVzQm9tYkNvdW50SGFuZGxlciIsInN0YXJ0SGFuZGxlciIsIm9uRGVzdHJveSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEQTtBQUVWQyxJQUFBQSxLQUFLLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGQTtBQUdWRSxJQUFBQSxLQUFLLEVBQUVQLEVBQUUsQ0FBQ0ssSUFIQTtBQUlWRyxJQUFBQSxLQUFLLEVBQUVSLEVBQUUsQ0FBQ0ssSUFKQTtBQUtWSSxJQUFBQSxZQUFZLEVBQUVULEVBQUUsQ0FBQ1UsTUFMUDtBQU1WQyxJQUFBQSxVQUFVLEVBQUVYLEVBQUUsQ0FBQ0ssSUFOTDtBQU9WTyxJQUFBQSxNQUFNLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5DLE1BQUFBLElBQUksRUFBRWIsRUFBRSxDQUFDYztBQUZILEtBUEU7QUFXVkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSRixNQUFBQSxJQUFJLEVBQUViLEVBQUUsQ0FBQ2M7QUFGRCxLQVhBO0FBZVZFLElBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFTLElBREY7QUFFUEgsTUFBQUEsSUFBSSxFQUFFYixFQUFFLENBQUNjO0FBRkY7QUFmQyxHQUhMO0FBd0JQRyxFQUFBQSxZQXhCTyx3QkF3Qk1DLENBeEJOLEVBd0JTQyxNQXhCVCxFQXdCaUI7QUFBQTs7QUFDdEJBLElBQUFBLE1BQU0sR0FBRyxDQUFDQSxNQUFWO0FBQ0EsUUFBSUEsTUFBTSxLQUFLLEtBQUtDLFVBQXBCLEVBQWdDO0FBRWhDLFFBQUksS0FBS0MsU0FBTCxDQUFlRixNQUFmLE1BQTJCLENBQS9CLEVBQWtDO0FBRWxDbkIsSUFBQUEsRUFBRSxDQUFDc0IsU0FBSCxDQUFhQyxJQUFiLENBQWtCLG9CQUFsQixFQUF3Q3ZCLEVBQUUsQ0FBQ1UsTUFBM0MsRUFBbUQsVUFBQ2MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2xFLE1BQUEsS0FBSSxDQUFDQyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDbEMsWUFBSUEsR0FBRyxLQUFLLENBQVIsSUFBYUEsR0FBRyxLQUFLVixNQUF6QixFQUFpQztBQUNqQyxZQUFJVyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csY0FBTCxDQUFvQiwyQkFBcEIsQ0FBYjtBQUNBOztBQUNBRCxRQUFBQSxNQUFNLENBQUNFLGNBQVA7QUFDQTs7QUFDQWhDLFFBQUFBLEVBQUUsQ0FBQ2lDLEtBQUgsQ0FBU0gsTUFBVCxFQUFpQkksRUFBakIsQ0FBb0IsQ0FBcEIsRUFBdUI7QUFBRUMsVUFBQUEsS0FBSyxFQUFFO0FBQVQsU0FBdkIsRUFBcUNDLEtBQXJDO0FBQ0FOLFFBQUFBLE1BQU0sQ0FBQ08saUJBQVA7QUFDQVAsUUFBQUEsTUFBTSxDQUFDUSxRQUFQLENBQWdCdEMsRUFBRSxDQUFDdUMsV0FBSCxDQUFlZCxNQUFmLENBQWhCO0FBRUEsWUFBSWUsRUFBRSxHQUFHWixJQUFJLENBQUNHLGNBQUwsQ0FBb0IsdUJBQXBCLENBQVQ7QUFDQSxZQUFJVSxHQUFHLEdBQUdELEVBQUUsQ0FBQ0UsWUFBSCxDQUFnQjFDLEVBQUUsQ0FBQzJDLFFBQW5CLENBQVY7QUFDQUYsUUFBQUEsR0FBRyxDQUFDRyxLQUFKO0FBQ0FILFFBQUFBLEdBQUcsQ0FBQ0ksU0FBSixHQUFnQixTQUFoQjtBQUNBSixRQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLEVBQWtCLEVBQWxCO0FBQ0FMLFFBQUFBLEdBQUcsQ0FBQ00sSUFBSjtBQUVBLFlBQUlDLE9BQU8sR0FBR3BCLElBQUksQ0FBQ0csY0FBTCxDQUFvQiw0QkFBcEIsQ0FBZDtBQUNBLFlBQUlrQixVQUFVLEdBQUdELE9BQU8sQ0FBQ2pCLGNBQVIsQ0FBdUIsVUFBdkIsQ0FBakI7QUFFQWtCLFFBQUFBLFVBQVUsQ0FBQ0MsS0FBWCxHQUFtQixHQUFuQjtBQUNBRCxRQUFBQSxVQUFVLENBQUNFLEtBQVgsR0FBbUIsSUFBSW5ELEVBQUUsQ0FBQ29ELEtBQVAsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLENBQW5CO0FBRUEsWUFBSUMsWUFBWSxHQUFHTCxPQUFPLENBQUNqQixjQUFSLENBQXVCLFlBQXZCLENBQW5CO0FBQ0FzQixRQUFBQSxZQUFZLENBQUNYLFlBQWIsQ0FBMEIxQyxFQUFFLENBQUNzRCxLQUE3QixFQUFvQ0MsUUFBcEMsR0FBK0MsRUFBL0M7QUFDQUYsUUFBQUEsWUFBWSxDQUFDRixLQUFiLEdBQXFCLElBQUluRCxFQUFFLENBQUNvRCxLQUFQLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixHQUF2QixDQUFyQjtBQUNELE9BMUJEO0FBMkJELEtBNUJEO0FBOEJBcEQsSUFBQUEsRUFBRSxDQUFDc0IsU0FBSCxDQUFhQyxJQUFiLENBQWtCLG9CQUFsQixFQUF3Q3ZCLEVBQUUsQ0FBQ1UsTUFBM0MsRUFBbUQsVUFBQ2MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2xFLE1BQUEsS0FBSSxDQUFDQyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDbEMsWUFBSUEsR0FBRyxLQUFLLENBQVIsSUFBYUEsR0FBRyxLQUFLVixNQUF6QixFQUFpQztBQUMvQixjQUFJVyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csY0FBTCxDQUFvQiwyQkFBcEIsQ0FBYjtBQUNBRCxVQUFBQSxNQUFNLENBQUNPLGlCQUFQO0FBQ0FQLFVBQUFBLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQnRDLEVBQUUsQ0FBQ3VDLFdBQUgsQ0FBZWQsTUFBZixDQUFoQixFQUgrQixDQUkvQjs7QUFDQXpCLFVBQUFBLEVBQUUsQ0FBQ2lDLEtBQUgsQ0FBU0gsTUFBVCxFQUNHMEIsYUFESCxDQUNpQnhELEVBQUUsQ0FBQ2lDLEtBQUgsR0FBV0MsRUFBWCxDQUFjLENBQWQsRUFBaUI7QUFBRUMsWUFBQUEsS0FBSyxFQUFFO0FBQVQsV0FBakIsQ0FEakIsRUFFR0MsS0FGSDtBQUlBLGNBQUlJLEVBQUUsR0FBR1osSUFBSSxDQUFDRyxjQUFMLENBQW9CLHVCQUFwQixDQUFUO0FBQ0EsY0FBSVUsR0FBRyxHQUFHRCxFQUFFLENBQUNFLFlBQUgsQ0FBZ0IxQyxFQUFFLENBQUMyQyxRQUFuQixDQUFWO0FBQ0FGLFVBQUFBLEdBQUcsQ0FBQ0csS0FBSjtBQUNBSCxVQUFBQSxHQUFHLENBQUNJLFNBQUosR0FBZ0IsU0FBaEI7QUFDQUosVUFBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsRUFBakI7QUFDQUwsVUFBQUEsR0FBRyxDQUFDTSxJQUFKO0FBRUEsY0FBSUMsT0FBTyxHQUFHcEIsSUFBSSxDQUFDRyxjQUFMLENBQW9CLDRCQUFwQixDQUFkO0FBQ0EsY0FBSWtCLFVBQVUsR0FBR0QsT0FBTyxDQUFDakIsY0FBUixDQUF1QixVQUF2QixDQUFqQjtBQUNBa0IsVUFBQUEsVUFBVSxDQUFDQyxLQUFYLEdBQW1CLENBQW5CO0FBQ0FELFVBQUFBLFVBQVUsQ0FBQ0UsS0FBWCxHQUFtQixJQUFJbkQsRUFBRSxDQUFDb0QsS0FBUCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0FBbkI7QUFDQSxjQUFJQyxZQUFZLEdBQUdMLE9BQU8sQ0FBQ2pCLGNBQVIsQ0FBdUIsWUFBdkIsQ0FBbkI7QUFDQXNCLFVBQUFBLFlBQVksQ0FBQ1gsWUFBYixDQUEwQjFDLEVBQUUsQ0FBQ3NELEtBQTdCLEVBQW9DQyxRQUFwQyxHQUErQyxFQUEvQztBQUNBRixVQUFBQSxZQUFZLENBQUNGLEtBQWIsR0FBcUIsSUFBSW5ELEVBQUUsQ0FBQ29ELEtBQVAsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLENBQXJCO0FBQ0Q7QUFDRixPQXpCRDtBQTBCRCxLQTNCRDtBQTZCQSxTQUFLaEMsVUFBTCxHQUFrQkQsTUFBbEI7QUFDRCxHQTFGTTtBQTRGUHNDLEVBQUFBLGNBNUZPLDRCQTRGVTtBQUNmLFNBQUtwQyxTQUFMLENBQWUsS0FBS0QsVUFBcEIsS0FBbUMsQ0FBbkM7QUFDQSxTQUFLc0MsZ0JBQUw7O0FBQ0EsUUFBSSxLQUFLckMsU0FBTCxDQUFlLEtBQUtELFVBQXBCLE1BQW9DLENBQXhDLEVBQTJDO0FBQ3pDLFVBQUl1QyxPQUFPLEdBQUcsS0FBS3RDLFNBQUwsQ0FBZXVDLFNBQWYsQ0FBeUIsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsR0FBRyxDQUFYO0FBQUEsT0FBekIsQ0FBZDtBQUNBLFVBQUlGLE9BQU8sSUFBSSxDQUFmLEVBQWtCLEtBQUsxQyxZQUFMLENBQWtCLElBQWxCLEVBQXdCMEMsT0FBeEIsRUFBbEIsS0FDSyxLQUFLRyxRQUFMLENBQWMsTUFBZDtBQUNOO0FBQ0YsR0FwR007QUFzR1BKLEVBQUFBLGdCQXRHTyw4QkFzR1k7QUFBQTs7QUFDakIsU0FBS2hDLE9BQUwsQ0FBYUMsT0FBYixDQUFxQixVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNsQyxVQUFJQSxHQUFHLEtBQUssQ0FBWixFQUFlO0FBQ2IsWUFBSWtDLFlBQVksR0FBRyxNQUFJLENBQUMxQyxTQUFMLENBQWVRLEdBQWYsQ0FBbkI7QUFDQSxZQUFJbUIsT0FBTyxHQUFHcEIsSUFBSSxDQUFDRyxjQUFMLENBQW9CLDRCQUFwQixDQUFkO0FBQ0EsWUFBSXNCLFlBQVksR0FBR0wsT0FBTyxDQUFDakIsY0FBUixDQUF1QixZQUF2QixDQUFuQjtBQUNBc0IsUUFBQUEsWUFBWSxDQUFDWCxZQUFiLENBQTBCMUMsRUFBRSxDQUFDc0QsS0FBN0IsRUFBb0NVLE1BQXBDLEdBQTZDLE9BQU9ELFlBQXBEO0FBQ0Q7QUFDRixLQVBEO0FBUUQsR0EvR007QUFpSFBELEVBQUFBLFFBakhPLG9CQWlIRUcsTUFqSEYsRUFpSFU7QUFDZixRQUFJLEtBQUtDLFVBQUwsS0FBb0IsU0FBeEIsRUFBbUMsT0FBTyxLQUFQO0FBRW5DLFNBQUtBLFVBQUwsR0FBa0JELE1BQWxCO0FBQ0EsU0FBS0UsV0FBTCxDQUFpQkMsV0FBakI7QUFFQSxRQUFJQyxNQUFNLEdBQUdyRSxFQUFFLENBQUN1QyxXQUFILENBQWUsS0FBSzlCLFlBQXBCLENBQWI7QUFDQSxTQUFLNkQsSUFBTCxDQUFVaEMsUUFBVixDQUFtQitCLE1BQW5CO0FBRUEsUUFBSUosTUFBTSxLQUFLLE1BQWYsRUFBdUJqRSxFQUFFLENBQUN1RSxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS3pELFFBQXpCLEVBQW1DLEtBQW5DLEVBQTBDLENBQTFDLEVBQXZCLEtBQ0tmLEVBQUUsQ0FBQ3VFLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLeEQsT0FBekIsRUFBa0MsS0FBbEMsRUFBeUMsQ0FBekM7QUFFTCxRQUFJeUQsWUFBWSxHQUFHSixNQUFNLENBQUMzQixZQUFQLENBQW9CLFFBQXBCLENBQW5CO0FBQ0ErQixJQUFBQSxZQUFZLENBQUNDLFVBQWIsQ0FBd0IsU0FBU1QsTUFBVCxHQUFrQixXQUExQztBQUNBUSxJQUFBQSxZQUFZLENBQUNFLFdBQWIsQ0FBeUI7QUFBQSxhQUFNM0UsRUFBRSxDQUFDNEUsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCLENBQU47QUFBQSxLQUF6QjtBQUNELEdBaElNO0FBa0lQQyxFQUFBQSxXQWxJTyx5QkFrSU87QUFDWixRQUFJVCxNQUFNLEdBQUdyRSxFQUFFLENBQUN1QyxXQUFILENBQWUsS0FBSzlCLFlBQXBCLENBQWI7QUFDQSxTQUFLNkQsSUFBTCxDQUFVaEMsUUFBVixDQUFtQitCLE1BQW5CO0FBQ0EsUUFBSUksWUFBWSxHQUFHSixNQUFNLENBQUMzQixZQUFQLENBQW9CLFFBQXBCLENBQW5CO0FBQ0ErQixJQUFBQSxZQUFZLENBQUNDLFVBQWIsQ0FBd0IsOEJBQXhCO0FBQ0FELElBQUFBLFlBQVksQ0FBQ0UsV0FBYixDQUF5QjtBQUFBLGFBQU0zRSxFQUFFLENBQUM0RSxRQUFILENBQVlDLFNBQVosQ0FBc0IsT0FBdEIsQ0FBTjtBQUFBLEtBQXpCO0FBQ0QsR0F4SU07QUEwSVBFLEVBQUFBLE1BMUlPLG9CQTBJRTtBQUNQLFFBQUlWLE1BQU0sR0FBR3JFLEVBQUUsQ0FBQ3VDLFdBQUgsQ0FBZSxLQUFLOUIsWUFBcEIsQ0FBYjtBQUNBLFNBQUs2RCxJQUFMLENBQVVoQyxRQUFWLENBQW1CK0IsTUFBbkI7QUFDQSxRQUFJSSxZQUFZLEdBQUdKLE1BQU0sQ0FBQzNCLFlBQVAsQ0FBb0IsUUFBcEIsQ0FBbkI7QUFDQStCLElBQUFBLFlBQVksQ0FBQ0MsVUFBYixDQUF3QixTQUF4QjtBQUNBRCxJQUFBQSxZQUFZLENBQUNFLFdBQWIsQ0FBeUI7QUFBQSxhQUFNM0UsRUFBRSxDQUFDNEUsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCLENBQU47QUFBQSxLQUF6QjtBQUNELEdBaEpNO0FBa0pQRyxFQUFBQSxXQWxKTyx5QkFrSk87QUFDWixTQUFLckUsVUFBTCxDQUFnQnNFLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0EsU0FBS3RFLFVBQUwsQ0FBZ0IrQixZQUFoQixDQUE2QjFDLEVBQUUsQ0FBQ2tGLFNBQWhDLEVBQTJDVixJQUEzQyxDQUFnRCxVQUFoRDtBQUNELEdBckpNO0FBdUpQVyxFQUFBQSxVQXZKTyx3QkF1Sk07QUFDWCxTQUFLeEUsVUFBTCxDQUFnQitCLFlBQWhCLENBQTZCMUMsRUFBRSxDQUFDa0YsU0FBaEMsRUFBMkNWLElBQTNDLENBQWdELFdBQWhEO0FBQ0QsR0F6Sk07QUEySlA7QUFFQVksRUFBQUEsTUE3Sk8sb0JBNkpFO0FBQ1AsU0FBS0MsTUFBTCxHQUFjckYsRUFBRSxDQUFDdUUsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUs1RCxNQUF6QixFQUFpQyxJQUFqQyxFQUF1QyxHQUF2QyxDQUFkO0FBQ0EsU0FBS1EsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtNLE9BQUwsR0FBZSxHQUFHLEtBQUtwQixLQUFSLEVBQWUsS0FBS0MsS0FBcEIsRUFBMkIsS0FBS0MsS0FBaEMsQ0FBZjtBQUNBLFNBQUthLFNBQUwsR0FBaUIsR0FBRyxFQUFILEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBakI7QUFDQSxTQUFLNkMsVUFBTCxHQUFrQixTQUFsQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBSy9ELEtBQUwsQ0FBV3NDLFlBQVgsQ0FBd0IsT0FBeEIsQ0FBbkI7QUFDQSxTQUFLZ0IsZ0JBQUw7QUFDRCxHQXJLTTtBQXVLUHRCLEVBQUFBLEtBdktPLG1CQXVLQztBQUFBOztBQUNOLFNBQUtuQixZQUFMLENBQWtCLElBQWxCLEVBQXdCLENBQXhCO0FBQ0EsU0FBS2tELFdBQUwsQ0FBaUJtQix1QkFBakIsQ0FBeUM7QUFBQSxhQUFNLE1BQUksQ0FBQ2xFLFVBQVg7QUFBQSxLQUF6QztBQUNBLFNBQUsrQyxXQUFMLENBQWlCb0Isb0JBQWpCLENBQXNDLEtBQUt6QixRQUFMLENBQWMwQixJQUFkLENBQW1CLElBQW5CLENBQXRDO0FBQ0EsU0FBS3JCLFdBQUwsQ0FBaUJzQix3QkFBakIsQ0FBMEMsS0FBS2hDLGNBQUwsQ0FBb0IrQixJQUFwQixDQUF5QixJQUF6QixDQUExQztBQUNBLFNBQUtyQixXQUFMLENBQWlCdUIsWUFBakI7QUFDRCxHQTdLTTtBQStLUEMsRUFBQUEsU0EvS08sdUJBK0tLO0FBQ1YzRixJQUFBQSxFQUFFLENBQUN1RSxXQUFILENBQWVxQixJQUFmLENBQW9CLEtBQUtQLE1BQXpCO0FBQ0QsR0FqTE0sQ0FrTFA7O0FBbExPLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICBib2FyZDogY2MuTm9kZSxcbiAgICBib21iMTogY2MuTm9kZSxcbiAgICBib21iMjogY2MuTm9kZSxcbiAgICBib21iMzogY2MuTm9kZSxcbiAgICBkaWFsb2dQcmVmYWI6IGNjLlByZWZhYixcbiAgICBydWxlV2luZG93OiBjYy5Ob2RlLFxuICAgIGJnQ2xpcDoge1xuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICB9LFxuICAgIGxvc2VDbGlwOiB7XG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgIH0sXG4gICAgd2luQ2xpcDoge1xuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICB9LFxuICB9LFxuXG4gIHN3aXRjaEFjdGl2ZShlLCBudW1iZXIpIHtcbiAgICBudW1iZXIgPSArbnVtYmVyXG4gICAgaWYgKG51bWJlciA9PT0gdGhpcy5ib21iQWN0aXZlKSByZXR1cm5cblxuICAgIGlmICh0aGlzLmJvbWJDb3VudFtudW1iZXJdID09PSAwKSByZXR1cm5cblxuICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL2JvbWJfbm9ybWFsXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICB0aGlzLmJvbWJCb3guZm9yRWFjaCgoYm9tYiwgaWR4KSA9PiB7XG4gICAgICAgIGlmIChpZHggPT09IDAgfHwgaWR4ID09PSBudW1iZXIpIHJldHVyblxuICAgICAgICBsZXQgYm9yZGVyID0gYm9tYi5nZXRDaGlsZEJ5TmFtZShcImJvdHRvbV9mbGV4X19pdGVtX19ib3JkZXJcIilcbiAgICAgICAgLyoqIOWBnOatouaJgOacieWLleS9nCAqL1xuICAgICAgICBib3JkZXIuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAvKiog5qCh5q2j6KeS5bqmICovXG4gICAgICAgIGNjLnR3ZWVuKGJvcmRlcikudG8oMCwgeyBhbmdsZTogMCB9KS5zdGFydCgpXG4gICAgICAgIGJvcmRlci5yZW1vdmVBbGxDaGlsZHJlbigpXG4gICAgICAgIGJvcmRlci5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZShwcmVmYWIpKVxuXG4gICAgICAgIGxldCBiZyA9IGJvbWIuZ2V0Q2hpbGRCeU5hbWUoXCJib3R0b21fZmxleF9faXRlbV9fYmdcIilcbiAgICAgICAgbGV0IGN0eCA9IGJnLmdldENvbXBvbmVudChjYy5HcmFwaGljcylcbiAgICAgICAgY3R4LmNsZWFyKClcbiAgICAgICAgY3R4LmZpbGxDb2xvciA9IFwiIzBCQTM5MFwiXG4gICAgICAgIGN0eC5jaXJjbGUoMCwgLTIsIDU1KVxuICAgICAgICBjdHguZmlsbCgpXG5cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBib21iLmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2ZsZXhfX2l0ZW1fX2NvbnRlbnRcIilcbiAgICAgICAgbGV0IGNvbnRlbnRJbWcgPSBjb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm9tYl9pbWdcIilcblxuICAgICAgICBjb250ZW50SW1nLnNjYWxlID0gMC44XG4gICAgICAgIGNvbnRlbnRJbWcuY29sb3IgPSBuZXcgY2MuQ29sb3IoMTM2LCAxMzYsIDEzNilcblxuICAgICAgICBsZXQgY29udGVudENvdW50ID0gY29udGVudC5nZXRDaGlsZEJ5TmFtZShcImJvbWJfY291bnRcIilcbiAgICAgICAgY29udGVudENvdW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSAxNlxuICAgICAgICBjb250ZW50Q291bnQuY29sb3IgPSBuZXcgY2MuQ29sb3IoMTM2LCAxMzYsIDEzNilcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL2JvbWJfYWN0aXZlXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICB0aGlzLmJvbWJCb3guZm9yRWFjaCgoYm9tYiwgaWR4KSA9PiB7XG4gICAgICAgIGlmIChpZHggIT09IDAgJiYgaWR4ID09PSBudW1iZXIpIHtcbiAgICAgICAgICBsZXQgYm9yZGVyID0gYm9tYi5nZXRDaGlsZEJ5TmFtZShcImJvdHRvbV9mbGV4X19pdGVtX19ib3JkZXJcIilcbiAgICAgICAgICBib3JkZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKVxuICAgICAgICAgIGJvcmRlci5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZShwcmVmYWIpKVxuICAgICAgICAgIC8vIGJvcmRlci5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5yb3RhdGVCeSg3LCAzNjApKSlcbiAgICAgICAgICBjYy50d2Vlbihib3JkZXIpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihjYy50d2VlbigpLnRvKDcsIHsgYW5nbGU6IDM2MCB9KSlcbiAgICAgICAgICAgIC5zdGFydCgpXG5cbiAgICAgICAgICBsZXQgYmcgPSBib21iLmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2ZsZXhfX2l0ZW1fX2JnXCIpXG4gICAgICAgICAgbGV0IGN0eCA9IGJnLmdldENvbXBvbmVudChjYy5HcmFwaGljcylcbiAgICAgICAgICBjdHguY2xlYXIoKVxuICAgICAgICAgIGN0eC5maWxsQ29sb3IgPSBcIiNBMkY3RUNcIlxuICAgICAgICAgIGN0eC5jaXJjbGUoMCwgMCwgNjUpXG4gICAgICAgICAgY3R4LmZpbGwoKVxuXG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBib21iLmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2ZsZXhfX2l0ZW1fX2NvbnRlbnRcIilcbiAgICAgICAgICBsZXQgY29udGVudEltZyA9IGNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJib21iX2ltZ1wiKVxuICAgICAgICAgIGNvbnRlbnRJbWcuc2NhbGUgPSAxXG4gICAgICAgICAgY29udGVudEltZy5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1KVxuICAgICAgICAgIGxldCBjb250ZW50Q291bnQgPSBjb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm9tYl9jb3VudFwiKVxuICAgICAgICAgIGNvbnRlbnRDb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gMjBcbiAgICAgICAgICBjb250ZW50Q291bnQuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5ib21iQWN0aXZlID0gbnVtYmVyXG4gIH0sXG5cbiAgbWludXNCb21iQ291bnQoKSB7XG4gICAgdGhpcy5ib21iQ291bnRbdGhpcy5ib21iQWN0aXZlXSAtPSAxXG4gICAgdGhpcy51cGdyYWRlQm9tYkNvdW50KClcbiAgICBpZiAodGhpcy5ib21iQ291bnRbdGhpcy5ib21iQWN0aXZlXSA9PT0gMCkge1xuICAgICAgbGV0IG5leHRJZHggPSB0aGlzLmJvbWJDb3VudC5maW5kSW5kZXgoKG4pID0+IG4gPiAwKVxuICAgICAgaWYgKG5leHRJZHggPj0gMCkgdGhpcy5zd2l0Y2hBY3RpdmUobnVsbCwgbmV4dElkeClcbiAgICAgIGVsc2UgdGhpcy5nYW1lT3ZlcihcImxvc2VcIilcbiAgICB9XG4gIH0sXG5cbiAgdXBncmFkZUJvbWJDb3VudCgpIHtcbiAgICB0aGlzLmJvbWJCb3guZm9yRWFjaCgoYm9tYiwgaWR4KSA9PiB7XG4gICAgICBpZiAoaWR4ICE9PSAwKSB7XG4gICAgICAgIGxldCBjdXJyZW50Q291bnQgPSB0aGlzLmJvbWJDb3VudFtpZHhdXG4gICAgICAgIGxldCBjb250ZW50ID0gYm9tYi5nZXRDaGlsZEJ5TmFtZShcImJvdHRvbV9mbGV4X19pdGVtX19jb250ZW50XCIpXG4gICAgICAgIGxldCBjb250ZW50Q291bnQgPSBjb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm9tYl9jb3VudFwiKVxuICAgICAgICBjb250ZW50Q291bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcInggXCIgKyBjdXJyZW50Q291bnRcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGdhbWVPdmVyKHN0YXR1cykge1xuICAgIGlmICh0aGlzLmdhbWVTdGF0dXMgIT09IFwicGxheWluZ1wiKSByZXR1cm4gZmFsc2VcblxuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IHN0YXR1c1xuICAgIHRoaXMuYm9hcmRTY3JpcHQub3ZlckhhbmRsZXIoKVxuXG4gICAgbGV0IGRpYWxvZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGlhbG9nUHJlZmFiKVxuICAgIHRoaXMubm9kZS5hZGRDaGlsZChkaWFsb2cpXG5cbiAgICBpZiAoc3RhdHVzID09PSBcImxvc2VcIikgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmxvc2VDbGlwLCBmYWxzZSwgMSlcbiAgICBlbHNlIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy53aW5DbGlwLCBmYWxzZSwgMSlcblxuICAgIGxldCBkaWFsb2dTY3JpcHQgPSBkaWFsb2cuZ2V0Q29tcG9uZW50KFwiZGlhbG9nXCIpXG4gICAgZGlhbG9nU2NyaXB0LnNldENvbnRlbnQoXCJ5b3UgXCIgKyBzdGF0dXMgKyBcIiEgcmVwbGF5P1wiKVxuICAgIGRpYWxvZ1NjcmlwdC5zZXRDYWxsYmFjaygoKSA9PiBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpKVxuICB9LFxuXG4gIGJhY2tUb0ludHJvKCkge1xuICAgIGxldCBkaWFsb2cgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpYWxvZ1ByZWZhYilcbiAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZGlhbG9nKVxuICAgIGxldCBkaWFsb2dTY3JpcHQgPSBkaWFsb2cuZ2V0Q29tcG9uZW50KFwiZGlhbG9nXCIpXG4gICAgZGlhbG9nU2NyaXB0LnNldENvbnRlbnQoXCJZb3UgcmVhbGx5IHdhbnQgdG8gZ28gYWhlYWQ/XCIpXG4gICAgZGlhbG9nU2NyaXB0LnNldENhbGxiYWNrKCgpID0+IGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImludHJvXCIpKVxuICB9LFxuXG4gIHJlcGxheSgpIHtcbiAgICBsZXQgZGlhbG9nID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWFsb2dQcmVmYWIpXG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKGRpYWxvZylcbiAgICBsZXQgZGlhbG9nU2NyaXB0ID0gZGlhbG9nLmdldENvbXBvbmVudChcImRpYWxvZ1wiKVxuICAgIGRpYWxvZ1NjcmlwdC5zZXRDb250ZW50KFwiUmVwbGF5P1wiKVxuICAgIGRpYWxvZ1NjcmlwdC5zZXRDYWxsYmFjaygoKSA9PiBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpKVxuICB9LFxuXG4gIHJ1bGVEaXNwbGF5KCkge1xuICAgIHRoaXMucnVsZVdpbmRvdy5hY3RpdmUgPSB0cnVlXG4gICAgdGhpcy5ydWxlV2luZG93LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzbGljZS1pblwiKVxuICB9LFxuXG4gIHJ1bGVIaWRkZW4oKSB7XG4gICAgdGhpcy5ydWxlV2luZG93LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzbGljZS1vdXRcIilcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5jbGlwSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmdDbGlwLCB0cnVlLCAwLjUpXG4gICAgdGhpcy5ib21iQWN0aXZlID0gMFxuICAgIHRoaXMuYm9tYkJveCA9IFssIHRoaXMuYm9tYjEsIHRoaXMuYm9tYjIsIHRoaXMuYm9tYjNdXG4gICAgdGhpcy5ib21iQ291bnQgPSBbLCAyNiwgMywgMV1cbiAgICB0aGlzLmdhbWVTdGF0dXMgPSBcInBsYXlpbmdcIlxuICAgIHRoaXMuYm9hcmRTY3JpcHQgPSB0aGlzLmJvYXJkLmdldENvbXBvbmVudChcImJvYXJkXCIpXG4gICAgdGhpcy51cGdyYWRlQm9tYkNvdW50KClcbiAgfSxcblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnN3aXRjaEFjdGl2ZShudWxsLCAxKVxuICAgIHRoaXMuYm9hcmRTY3JpcHQuc2V0R2V0QWN0aXZlQm9tYkhhbmRsZXIoKCkgPT4gdGhpcy5ib21iQWN0aXZlKVxuICAgIHRoaXMuYm9hcmRTY3JpcHQuc2V0R2FtZVN0YXR1c0hhbmRsZXIodGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpKVxuICAgIHRoaXMuYm9hcmRTY3JpcHQuc2V0TWludXNCb21iQ291bnRIYW5kbGVyKHRoaXMubWludXNCb21iQ291bnQuYmluZCh0aGlzKSlcbiAgICB0aGlzLmJvYXJkU2NyaXB0LnN0YXJ0SGFuZGxlcigpXG4gIH0sXG5cbiAgb25EZXN0cm95KCkge1xuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5jbGlwSWQpXG4gIH0sXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSlcbiJdfQ==