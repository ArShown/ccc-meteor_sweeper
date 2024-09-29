"use strict";
cc._RF.push(module, '6ec1aGXiIxOzoV7X8U4a60y', 'rule');
// scripts/rule.js

"use strict";

cc.Class({
  "extends": cc.Component,
  reset: function reset() {
    this.node.getChildByName('ScrollView').getComponent(cc.ScrollView).scrollToTop(0);
    this.node.active = false;
  }
});

cc._RF.pop();