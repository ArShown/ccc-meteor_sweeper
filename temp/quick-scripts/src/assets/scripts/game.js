"use strict";
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