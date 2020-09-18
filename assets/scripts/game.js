cc.Class({
  extends: cc.Component,

  properties: {
    board: cc.Node
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {},

  start() {
    this.board.getComponent('board').startHandler();
  },

  // update (dt) {},
});