cc.Class({
  extends: cc.Component,

  properties: {
    board: cc.Node,
    background: cc.Node
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    // this.background.getComponent('background').setEnabled();
  },

  start() {
    this.board.getComponent('board').startHandler();
  },

  startClick() {
    // this.background.getComponent('background').setDisabled();
  },

  // update (dt) {},
});