cc.Class({
  extends: cc.Component,

  properties: {
    board: cc.Node,
    bomb1: cc.Node,
    bomb2: cc.Node,
    bomb3: cc.Node,
    dialogPrefab: cc.Prefab,
    bgClip: {
      default: null,
      type: cc.AudioClip
    },
    loseClip: {
      default: null,
      type: cc.AudioClip
    },
    winClip: {
      default: null,
      type: cc.AudioClip
    }
  },

  switchActive(e, number) {
    number = +number;
    if (number === this.bombActive)
      return;

    if (this.bombCount[number] === 0)
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

  minusBombCount() {
    this.bombCount[this.bombActive] -= 1;
    this.upgradeBombCount();
    if (this.bombCount[this.bombActive] === 0) {
      let nextIdx = this.bombCount.findIndex(n => n > 0);
      if (nextIdx >= 0)
        this.switchActive(null, nextIdx);
      else
        this.gameOver('lose');
    }
  },

  upgradeBombCount() {
    this.bombBox.forEach((bomb, idx) => {
      if (idx !== 0) {
        let currentCount = this.bombCount[idx];
        let content = bomb.getChildByName("bottom_flex__item__content");
        let contentCount = content.getChildByName("bomb_count");
        contentCount.getComponent(cc.Label).string = 'x ' + currentCount;
      }
    });
  },

  gameOver(status) {
    if (this.gameStatus !== 'playing')
      return false;

    this.gameStatus = status;
    this.boardScript.overHandler();

    let dialog = cc.instantiate(this.dialogPrefab);
    this.node.addChild(dialog);

    if (status === 'lose')
      cc.audioEngine.play(this.loseClip, false, 1);
    else
      cc.audioEngine.play(this.winClip, false, 1);

    let dialogScript = dialog.getComponent('dialog');
    dialogScript.setContent('you ' + status + '! replay?');
    dialogScript.setCallback(() => cc.director.loadScene("game"));
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.clipId = cc.audioEngine.play(this.bgClip, true, 0.5);
    this.bombActive = 0;
    this.bombBox = [, this.bomb1, this.bomb2, this.bomb3];
    this.bombCount = [, 26, 3, 1];
    this.gameStatus = 'playing';
    this.boardScript = this.board.getComponent('board');
    this.upgradeBombCount();
  },

  start() {
    this.switchActive(null, 1);
    this.boardScript.setGetActiveBombHandler(() => this.bombActive);
    this.boardScript.setGameStatusHandler(this.gameOver.bind(this));
    this.boardScript.setMinusBombCountHandler(this.minusBombCount.bind(this));
    this.boardScript.startHandler();
  },

  backToIntro() {
    let dialog = cc.instantiate(this.dialogPrefab);
    this.node.addChild(dialog);
    let dialogScript = dialog.getComponent('dialog');
    dialogScript.setContent('You really want to go ahead?');
    dialogScript.setCallback(() => cc.director.loadScene("intro"));
  },

  replay() {
    let dialog = cc.instantiate(this.dialogPrefab);
    this.node.addChild(dialog);
    let dialogScript = dialog.getComponent('dialog');
    dialogScript.setContent('Replay?');
    dialogScript.setCallback(() => cc.director.loadScene("game"));
  },

  onDestroy() {
    cc.audioEngine.stop(this.clipId);
  }
  // update (dt) {},
});