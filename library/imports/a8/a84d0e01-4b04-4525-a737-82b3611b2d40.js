"use strict";
cc._RF.push(module, 'a84d04BSwRFJac3grNhGy1A', 'cover');
// scripts/dialog/cover.js

"use strict";

cc.Class({
  "extends": cc.Component,
  stopBubbling: function stopBubbling(e) {
    e.stopPropagation();
    return false;
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.MOUSE_MOVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_START, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.stopBubbling, this);
  },
  onDestroy: function onDestroy() {
    this.node.off(cc.Node.EventType.MOUSE_MOVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.MOUSE_DOWN, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_START, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.stopBubbling, this);
  }
});

cc._RF.pop();