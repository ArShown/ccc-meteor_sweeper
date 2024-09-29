"use strict";
cc._RF.push(module, '01159Mg+XdCPKsCf+EJ/R6X', 'dialog');
// scripts/dialog/dialog.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Label
  },
  resolve: function resolve() {
    this.resolveCallback();
  },
  reject: function reject() {
    this.node.destroy();
    this.rejectCallback();
  },
  setContent: function setContent(str) {
    this.content.getComponent(cc.Label).string = str;
  },
  setCallback: function setCallback(resolve, reject) {
    if (resolve === void 0) {
      resolve = function resolve() {
        return false;
      };
    }

    if (reject === void 0) {
      reject = function reject() {
        return false;
      };
    }

    this.resolveCallback = resolve;
    this.rejectCallback = reject;
  },
  onLoad: function onLoad() {
    this.resolveCallback = function () {
      return false;
    };

    this.rejectCallback = function () {
      return false;
    };
  }
});

cc._RF.pop();