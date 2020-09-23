cc.Class({
  extends: cc.Component,

  properties: {
    board: cc.Node,
    bomb1: cc.Node,
    bomb2: cc.Node,
    bomb3: cc.Node,
  },

  switchActive(e, number) {
    number = +number;
    if (number === this.bombActive)
      return;

    cc.loader.loadRes("prefab/bomb_normal", cc.Prefab, (err, prefab) => {
      this.bombBox.forEach((bomb, idx) => {
        if (idx === 0 || idx === number)
          return;
        let border = bomb.getChildByName("bottom_flex__item__border");
        border.stopAllActions();
        border.runAction(cc.rotateTo(0, 0));
        border.removeAllChildren();
        border.addChild(cc.instantiate(prefab));

        let bg = bomb.getChildByName("bottom_flex__item__bg");
        let ctx = bg.getComponent(cc.Graphics);
        ctx.clear();
        ctx.fillColor = '#0BA390';
        ctx.circle(0, -2, 55);
        ctx.fill();

        let content = bomb.getChildByName("bottom_flex__item__content");
        let contentImg = content.getChildByName("bomb_img");

        contentImg.scale = 0.8;
        contentImg.color = new cc.Color(136, 136, 136);

        let contentCount = content.getChildByName("bomb_count");
        contentCount.getComponent(cc.Label).fontSize = 16;
        contentCount.color = new cc.Color(136, 136, 136);
      });
    });

    cc.loader.loadRes("prefab/bomb_active", cc.Prefab, (err, prefab) => {
      this.bombBox.forEach((bomb, idx) => {
        if (idx !== 0 && idx === number) {
          let border = bomb.getChildByName("bottom_flex__item__border");
          border.removeAllChildren();
          border.addChild(cc.instantiate(prefab));
          border.runAction(cc.repeatForever(cc.rotateBy(7, 360)));

          let bg = bomb.getChildByName("bottom_flex__item__bg");
          let ctx = bg.getComponent(cc.Graphics);
          ctx.clear();
          ctx.fillColor = '#A2F7EC';
          ctx.circle(0, 0, 65);
          ctx.fill();

          let content = bomb.getChildByName("bottom_flex__item__content");
          let contentImg = content.getChildByName("bomb_img");
          contentImg.scale = 1;
          contentImg.color = new cc.Color(255, 255, 255);
          let contentCount = content.getChildByName("bomb_count");
          contentCount.getComponent(cc.Label).fontSize = 20;
          contentCount.color = new cc.Color(255, 255, 255);
        }
      });
    });

    this.bombActive = number;
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.bombActive = 0;
    this.bombBox = [, this.bomb1, this.bomb2, this.bomb3];

    this.switchActive(null, 1);
  },

  start() {
    this.board.getComponent('board').startHandler();
  },

  backToIntro() {
    cc.director.loadScene("intro");
  },

  // update (dt) {},
});