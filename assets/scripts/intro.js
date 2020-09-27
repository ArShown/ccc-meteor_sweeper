cc.Class({
  extends: cc.Component,

  properties: {
    background: cc.Node,
    clip: {
      default: null,
      type: cc.AudioClip
    }
  },

  startGame() {
    cc.director.loadScene("game");
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.clipId = cc.audioEngine.play(this.clip, true, 0.5);
  },

  start() {
    this.background.getComponent('background').setEnabled();
  },

  onDestroy() {
    cc.audioEngine.stop(this.clipId);
  }
});