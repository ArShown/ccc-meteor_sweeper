cc.Class({
  extends: cc.Component,

  stopBubbling(e) {
    e.stopPropagation();
    return false;
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on(cc.Node.EventType.MOUSE_MOVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_START, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.stopBubbling, this);
  },

  onDestroy() {
    this.node.off(cc.Node.EventType.MOUSE_MOVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.MOUSE_DOWN, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_START, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.stopBubbling, this);
  }
});