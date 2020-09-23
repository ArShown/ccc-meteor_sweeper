cc.Class({
  extends: cc.Component,

  properties: {
    board: cc.Node,
    background: cc.Node
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {

  },

  start() {
    this.board.getComponent('board').startHandler();
  },

  // backToIntro() {
  //   cc.director.loadScene("intro");
  // },

  // update (dt) {},
});