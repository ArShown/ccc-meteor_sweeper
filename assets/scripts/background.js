cc.Class({
  extends: cc.Component,

  properties: {
    bg1: cc.Node,
    bg2: cc.Node,
  },

  setEnabled() {
    this.enabled = true;
  },

  setDisabled() {
    // 停止 update 運行
    this.enabled = false;
    // 停止所有行為
    this.node.stopAllActions();
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    // 初始化背景重置的觸發座標
    this.triggerY = -this.bg1.height;
    this.enabled = false;
    this.speed = 100;
  },

  start() {

  },

  update(dt) {
    // 背景移动
    this.bg1.y -= dt * this.speed;
    this.bg2.y -= dt * this.speed;

    // 重置
    if (this.bg1.y <= this.triggerY)
      this.bg1.y = this.bg2.y + this.bg1.height;
    else if (this.bg2.y <= this.triggerY)
      this.bg2.y = this.bg1.y + this.bg1.height;

  },
});