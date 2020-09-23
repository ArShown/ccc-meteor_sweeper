cc.Class({
  extends: cc.Component,

  properties: {
    background: cc.Node
  },

  startGame() {
    cc.director.loadScene("game");
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {

  },

  start() {
    console.log('onStart');
    this.background.getComponent('background').setEnabled();
  },

  onDestroy() {
    console.log('onDestroy');
  }
});