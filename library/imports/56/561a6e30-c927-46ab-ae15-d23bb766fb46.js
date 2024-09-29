"use strict";
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