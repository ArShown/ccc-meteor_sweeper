cc.Class({
  extends: cc.Component,

  properties: {
    content: cc.Label
  },

  resolve() {
    this.resolveCallback();
  },

  reject() {
    this.node.destroy();
    this.rejectCallback();
  },

  setContent(str) {
    this.content.getComponent(cc.Label).string = str;
  },

  setCallback(resolve = () => false, reject = () => false) {
    this.resolveCallback = resolve;
    this.rejectCallback = reject;
  },

  onLoad() {
    this.resolveCallback = () => false;
    this.rejectCallback = () => false;
  }
});