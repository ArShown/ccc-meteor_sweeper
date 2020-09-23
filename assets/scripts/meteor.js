cc.Class({
  extends: cc.Component,
  // LIFE-CYCLE CALLBACKS:

  getShipMeta(type, direction) {
    switch (type) {
      case 'A':
        {
          return {
            w: 100,
            h: 100,
            minRow: 0,
            minCol: 0,
            maxRow: 8,
            maxCol: 8,
            body: (row, col) => [
              [row, col],
              [row + 1, col],
              [row, col + 1],
              [row + 1, col + 1],
            ]
          }
        }
      case 'B':
        {
          switch (direction) {
            case 'U':
            case 'D':
              return {
                w: 150,
                h: 100,
                minRow: 0,
                minCol: 0,
                maxRow: 8,
                maxCol: 7,
                body: (row, col) => [
                  [row, col],
                  [row + 1, col],
                  [row, col + 1],
                  [row + 1, col + 1],
                  [row, col + 2],
                  [row + 1, col + 2],
                ]
              }
            case 'L':
            case 'R':
              return {
                w: 100,
                h: 150,
                minRow: 0,
                minCol: 0,
                maxRow: 7,
                maxCol: 8,
                body: (row, col) => [
                  [row, col],
                  [row + 1, col],
                  [row + 2, col],
                  [row, col + 1],
                  [row + 1, col + 1],
                  [row + 2, col + 1],
                ]
              }
          }
        }
      case 'C':
        {
          return {
            w: 100,
            h: 100,
            minRow: 0,
            minCol: 0,
            maxRow: 8,
            maxCol: 8,
            body: (row, col) => [
              [row, col],
              [row + 1, col],
              [row, col + 1],
              [row + 1, col + 1],
            ]
          }
        }
      case 'D':
        {
          return {
            w: 50,
            h: 50,
            minRow: 0,
            minCol: 0,
            maxRow: 9,
            maxCol: 9,
            body: (row, col) => [
              [row, col]
            ]
          }
        }
      case 'E':
        {
          return {
            w: 50,
            h: 50,
            minRow: 0,
            minCol: 0,
            maxRow: 9,
            maxCol: 9,
            body: (row, col) => [
              [row, col]
            ]
          }
        }
    }
  },

  getDirection() {
    return ['U', 'D', 'L', 'R'][parseInt(Math.random() * 4)];
  },

  getLocation() {
    let {
      minRow,
      minCol,
      maxRow,
      maxCol,
      body
    } = this.getShipMeta(this.type, this.direction);
    let randomRow = parseInt(Math.random() * (maxRow - minRow + 1)) + minRow;
    let randomCol = parseInt(Math.random() * (maxCol - minCol + 1)) + minCol;

    this.origin = {
      row: randomRow,
      col: randomCol
    };
    this.location = body(randomRow, randomCol);
  },

  setPosition(x, y) {
    this.node.x = x;
    this.node.y = y;
  },

  spawnMeteor(type) {
    this.type = type;
    this.direction = this.getDirection();
    let {
      w,
      h
    } = this.getShipMeta(this.type, this.direction);
    this.node.width = w;
    this.node.height = h;

    cc.loader.loadRes("images/Meteor_" + type + "/" + type + "_" + this.direction, cc.SpriteFrame, (err, spriteFrame) => {
      let sprite = this.node.getComponent(cc.Sprite);
      sprite.sizeMode = 0;
      sprite.spriteFrame = spriteFrame;
    });
  },

  setShootDown() {
    this.isShootDown = true;
    this.node.color = new cc.Color(255, 0, 0);
  },

  onLoad() {
    this.node.opacity = 200;
    this.node.active = false;
    this.isShootDown = false;
  },

  start() {

  },

  // update (dt) {},
});