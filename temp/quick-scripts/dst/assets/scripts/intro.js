
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/intro.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '561a64wySdGq64V0ju3ZvtG', 'intro');
// scripts/intro.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    background: cc.Node,
    clip: {
      "default": null,
      type: cc.AudioClip
    }
  },
  startGame: function startGame() {
    cc.director.loadScene("game");
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.clipId = cc.audioEngine.play(this.clip, true, 0.5);
  },
  start: function start() {
    this.background.getComponent('background').setEnabled();
  },
  onDestroy: function onDestroy() {
    cc.audioEngine.stop(this.clipId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2ludHJvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja2dyb3VuZCIsIk5vZGUiLCJjbGlwIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInN0YXJ0R2FtZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwib25Mb2FkIiwiY2xpcElkIiwiYXVkaW9FbmdpbmUiLCJwbGF5Iiwic3RhcnQiLCJnZXRDb21wb25lbnQiLCJzZXRFbmFibGVkIiwib25EZXN0cm95Iiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxJQURMO0FBRVZDLElBQUFBLElBQUksRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0FBRkw7QUFGSSxHQUhMO0FBV1BDLEVBQUFBLFNBWE8sdUJBV0s7QUFDVlQsSUFBQUEsRUFBRSxDQUFDVSxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDRCxHQWJNO0FBZVA7QUFFQUMsRUFBQUEsTUFqQk8sb0JBaUJFO0FBQ1AsU0FBS0MsTUFBTCxHQUFjYixFQUFFLENBQUNjLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLVCxJQUF6QixFQUErQixJQUEvQixFQUFxQyxHQUFyQyxDQUFkO0FBQ0QsR0FuQk07QUFxQlBVLEVBQUFBLEtBckJPLG1CQXFCQztBQUNOLFNBQUtaLFVBQUwsQ0FBZ0JhLFlBQWhCLENBQTZCLFlBQTdCLEVBQTJDQyxVQUEzQztBQUNELEdBdkJNO0FBeUJQQyxFQUFBQSxTQXpCTyx1QkF5Qks7QUFDVm5CLElBQUFBLEVBQUUsQ0FBQ2MsV0FBSCxDQUFlTSxJQUFmLENBQW9CLEtBQUtQLE1BQXpCO0FBQ0Q7QUEzQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUsXG4gICAgY2xpcDoge1xuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgIH1cbiAgfSxcblxuICBzdGFydEdhbWUoKSB7XG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5jbGlwSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuY2xpcCwgdHJ1ZSwgMC41KTtcbiAgfSxcblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmJhY2tncm91bmQuZ2V0Q29tcG9uZW50KCdiYWNrZ3JvdW5kJykuc2V0RW5hYmxlZCgpO1xuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuY2xpcElkKTtcbiAgfVxufSk7Il19