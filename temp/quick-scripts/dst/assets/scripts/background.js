
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/background.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '515f5VvvkdENIUqN0Twk+37', 'background');
// scripts/background.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bg1: cc.Node,
    bg2: cc.Node
  },
  setEnabled: function setEnabled() {
    this.enabled = true;
  },
  setDisabled: function setDisabled() {
    // 停止 update 運行
    this.enabled = false; // 停止所有行為

    this.node.stopAllActions();
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 初始化背景重置的觸發座標
    this.triggerY = -this.bg1.height;
    this.enabled = false;
    this.speed = 100;
  },
  start: function start() {},
  update: function update(dt) {
    // 背景移动
    this.bg1.y -= dt * this.speed;
    this.bg2.y -= dt * this.speed; // 重置

    if (this.bg1.y <= this.triggerY) this.bg1.y = this.bg2.y + this.bg1.height;else if (this.bg2.y <= this.triggerY) this.bg2.y = this.bg1.y + this.bg1.height;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhY2tncm91bmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZzEiLCJOb2RlIiwiYmcyIiwic2V0RW5hYmxlZCIsImVuYWJsZWQiLCJzZXREaXNhYmxlZCIsIm5vZGUiLCJzdG9wQWxsQWN0aW9ucyIsIm9uTG9hZCIsInRyaWdnZXJZIiwiaGVpZ2h0Iiwic3BlZWQiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLEdBQUcsRUFBRUosRUFBRSxDQUFDSyxJQURFO0FBRVZDLElBQUFBLEdBQUcsRUFBRU4sRUFBRSxDQUFDSztBQUZFLEdBSEw7QUFRUEUsRUFBQUEsVUFSTyx3QkFRTTtBQUNYLFNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0QsR0FWTTtBQVlQQyxFQUFBQSxXQVpPLHlCQVlPO0FBQ1o7QUFDQSxTQUFLRCxPQUFMLEdBQWUsS0FBZixDQUZZLENBR1o7O0FBQ0EsU0FBS0UsSUFBTCxDQUFVQyxjQUFWO0FBQ0QsR0FqQk07QUFtQlA7QUFFQUMsRUFBQUEsTUFyQk8sb0JBcUJFO0FBQ1A7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLENBQUMsS0FBS1QsR0FBTCxDQUFTVSxNQUExQjtBQUNBLFNBQUtOLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS08sS0FBTCxHQUFhLEdBQWI7QUFDRCxHQTFCTTtBQTRCUEMsRUFBQUEsS0E1Qk8sbUJBNEJDLENBRVAsQ0E5Qk07QUFnQ1BDLEVBQUFBLE1BaENPLGtCQWdDQUMsRUFoQ0EsRUFnQ0k7QUFDVDtBQUNBLFNBQUtkLEdBQUwsQ0FBU2UsQ0FBVCxJQUFjRCxFQUFFLEdBQUcsS0FBS0gsS0FBeEI7QUFDQSxTQUFLVCxHQUFMLENBQVNhLENBQVQsSUFBY0QsRUFBRSxHQUFHLEtBQUtILEtBQXhCLENBSFMsQ0FLVDs7QUFDQSxRQUFJLEtBQUtYLEdBQUwsQ0FBU2UsQ0FBVCxJQUFjLEtBQUtOLFFBQXZCLEVBQ0UsS0FBS1QsR0FBTCxDQUFTZSxDQUFULEdBQWEsS0FBS2IsR0FBTCxDQUFTYSxDQUFULEdBQWEsS0FBS2YsR0FBTCxDQUFTVSxNQUFuQyxDQURGLEtBRUssSUFBSSxLQUFLUixHQUFMLENBQVNhLENBQVQsSUFBYyxLQUFLTixRQUF2QixFQUNILEtBQUtQLEdBQUwsQ0FBU2EsQ0FBVCxHQUFhLEtBQUtmLEdBQUwsQ0FBU2UsQ0FBVCxHQUFhLEtBQUtmLEdBQUwsQ0FBU1UsTUFBbkM7QUFFSDtBQTNDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgYmcxOiBjYy5Ob2RlLFxuICAgIGJnMjogY2MuTm9kZSxcbiAgfSxcblxuICBzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gIH0sXG5cbiAgc2V0RGlzYWJsZWQoKSB7XG4gICAgLy8g5YGc5q2iIHVwZGF0ZSDpgYvooYxcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAvLyDlgZzmraLmiYDmnInooYzngrpcbiAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgLy8g5Yid5aeL5YyW6IOM5pmv6YeN572u55qE6Ke455m85bqn5qiZXG4gICAgdGhpcy50cmlnZ2VyWSA9IC10aGlzLmJnMS5oZWlnaHQ7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zcGVlZCA9IDEwMDtcbiAgfSxcblxuICBzdGFydCgpIHtcblxuICB9LFxuXG4gIHVwZGF0ZShkdCkge1xuICAgIC8vIOiDjOaZr+enu+WKqFxuICAgIHRoaXMuYmcxLnkgLT0gZHQgKiB0aGlzLnNwZWVkO1xuICAgIHRoaXMuYmcyLnkgLT0gZHQgKiB0aGlzLnNwZWVkO1xuXG4gICAgLy8g6YeN572uXG4gICAgaWYgKHRoaXMuYmcxLnkgPD0gdGhpcy50cmlnZ2VyWSlcbiAgICAgIHRoaXMuYmcxLnkgPSB0aGlzLmJnMi55ICsgdGhpcy5iZzEuaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMuYmcyLnkgPD0gdGhpcy50cmlnZ2VyWSlcbiAgICAgIHRoaXMuYmcyLnkgPSB0aGlzLmJnMS55ICsgdGhpcy5iZzEuaGVpZ2h0O1xuXG4gIH0sXG59KTsiXX0=