cc.Class({
  extends: cc.Component,

  reset() {
    this.node.getChildByName('ScrollView').getComponent(cc.ScrollView).scrollToTop(0);
    this.node.active = false;
  }
});