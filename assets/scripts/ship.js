cc.Class({
  extends: cc.Component,

  // LIFE-CYCLE CALLBACKS:

  getShipMeta(type, direction) {
    let obj = {
      A: {
        down: {
          w: 50,
          h: 250,
          rect: [150, 0, 32, 156],
          minRow: 0,
          minCol: 0,
          maxRow: 5,
          maxCol: 9,
          body: (row, col) => new Array(5).fill(row).map((r, idx) => [r + idx, col])
        },
        left: {
          w: 250,
          h: 50,
          rect: [244, 368, 156, 32],
          minRow: 0,
          minCol: 0,
          maxRow: 9,
          maxCol: 5,
          body: (row, col) => new Array(5).fill(col).map((c, idx) => [row, c + idx])
        },
        up: {
          w: 50,
          h: 250,
          rect: [150, 244, 32, 156],
          minRow: 0,
          minCol: 0,
          maxRow: 5,
          maxCol: 9,
          body: (row, col) => new Array(5).fill(row).map((r, idx) => [r + idx, col])
        },
        right: {
          w: 250,
          h: 50,
          rect: [244, 0, 156, 32],
          minRow: 0,
          minCol: 0,
          maxRow: 9,
          maxCol: 5,
          body: (row, col) => new Array(5).fill(col).map((c, idx) => [row, c + idx])
        },
      },
      B: {
        down: {
          w: 50,
          h: 200,
          rect: [112, 0, 32, 125],
          minRow: 0,
          minCol: 0,
          maxRow: 6,
          maxCol: 9,
          body: (row, col) => new Array(4).fill(row).map((r, idx) => [r + idx, col])
        },
        left: {
          w: 200,
          h: 50,
          rect: [244, 330, 125, 32],
          minRow: 0,
          minCol: 0,
          maxRow: 9,
          maxCol: 6,
          body: (row, col) => new Array(4).fill(col).map((c, idx) => [row, c + idx])
        },
        up: {
          w: 50,
          h: 200,
          rect: [112, 275, 32, 125],
          minRow: 0,
          minCol: 0,
          maxRow: 6,
          maxCol: 9,
          body: (row, col) => new Array(4).fill(row).map((r, idx) => [r + idx, col])
        },
        right: {
          w: 200,
          h: 50,
          rect: [275, 38, 125, 32],
          minRow: 0,
          minCol: 0,
          maxRow: 9,
          maxCol: 6,
          body: (row, col) => new Array(4).fill(col).map((c, idx) => [row, c + idx])
        }
      },
      C: {
        down: {
          w: 50,
          h: 150,
          rect: [75, 0, 32, 94],
          minRow: 0,
          minCol: 0,
          maxRow: 7,
          maxCol: 9,
          body: (row, col) => new Array(3).fill(row).map((r, idx) => [r + idx, col])
        },
        left: {
          w: 150,
          h: 50,
          rect: [244, 293, 94, 32],
          minRow: 0,
          minCol: 0,
          maxRow: 9,
          maxCol: 7,
          body: (row, col) => new Array(3).fill(col).map((c, idx) => [row, c + idx])
        },
        up: {
          w: 50,
          h: 150,
          rect: [75, 306, 32, 94],
          minRow: 0,
          minCol: 0,
          maxRow: 7,
          maxCol: 9,
          body: (row, col) => new Array(3).fill(row).map((r, idx) => [r + idx, col])
        },
        right: {
          w: 150,
          h: 50,
          rect: [306, 75, 94, 32],
          minRow: 0,
          minCol: 0,
          maxRow: 9,
          maxCol: 7,
          body: (row, col) => new Array(3).fill(col).map((c, idx) => [row, c + idx])
        }
      },
      S: {
        down: {
          w: 50,
          h: 150,
          rect: [38, 0, 32, 94],
          minRow: 0,
          minCol: 0,
          maxRow: 7,
          maxCol: 9,
          body: (row, col) => new Array(3).fill(row).map((r, idx) => [r + idx, col])
        },
        left: {
          w: 150,
          h: 50,
          rect: [244, 256, 94, 32],
          minRow: 0,
          minCol: 0,
          maxRow: 9,
          maxCol: 7,
          body: (row, col) => new Array(3).fill(col).map((c, idx) => [row, c + idx])
        },
        up: {
          w: 50,
          h: 150,
          rect: [38, 306, 32, 94],
          minRow: 0,
          minCol: 0,
          maxRow: 7,
          maxCol: 9,
          body: (row, col) => new Array(3).fill(row).map((r, idx) => [r + idx, col])
        },
        right: {
          w: 150,
          h: 50,
          rect: [306, 112, 94, 32],
          minRow: 0,
          minCol: 0,
          maxRow: 9,
          maxCol: 7,
          body: (row, col) => new Array(3).fill(col).map((c, idx) => [row, c + idx])
        }
      },
      P: {
        down: {
          w: 50,
          h: 100,
          rect: [0, 0, 32, 63],
          minRow: 0,
          minCol: 0,
          maxRow: 8,
          maxCol: 9,
          body: (row, col) => new Array(2).fill(row).map((r, idx) => [r + idx, col])
        },
        left: {
          w: 100,
          h: 50,
          rect: [244, 218, 63, 32],
          minRow: 0,
          minCol: 0,
          maxRow: 9,
          maxCol: 8,
          body: (row, col) => new Array(2).fill(col).map((c, idx) => [row, c + idx])
        },
        up: {
          w: 50,
          h: 100,
          rect: [0, 337, 32, 63],
          minRow: 0,
          minCol: 0,
          maxRow: 8,
          maxCol: 9,
          body: (row, col) => new Array(2).fill(row).map((r, idx) => [r + idx, col])
        },
        right: {
          w: 100,
          h: 50,
          rect: [337, 150, 63, 32],
          minRow: 0,
          minCol: 0,
          maxRow: 9,
          maxCol: 8,
          body: (row, col) => new Array(2).fill(col).map((c, idx) => [row, c + idx])
        }
      }
    }

    return obj[type][direction];
  },

  getDirection() {
    return ['up', 'down', 'left', 'right'][parseInt(Math.random() * 4)];
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

  spawnShip(type) {
    this.direction = this.getDirection();
    this.type = type;

    let targetShip = this.getShipMeta(this.type, this.direction);
    this.node.width = targetShip.w;
    this.node.height = targetShip.h;

    /* 戰艦圖片 */
    let sprite = this.node.getComponent(cc.Sprite);
    sprite.sizeMode = 0;

    /* 複製圖片，避免修改到同一張 */
    let cloneFrame = sprite.spriteFrame.clone()
    cloneFrame.setRect(new cc.rect(...targetShip.rect));
    sprite.spriteFrame = cloneFrame;
  },

  setShootDown() {
    this.node.color = new cc.Color(255, 0, 0);
  },

  onLoad() {
    this.node.zIndex = 1;
    this.node.opacity = 200;
  },

  start() {

  },

  // update (dt) {},
});