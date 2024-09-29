
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/dialog/cover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a84d04BSwRFJac3grNhGy1A', 'cover');
// scripts/dialog/cover.js

"use strict";

cc.Class({
  "extends": cc.Component,
  stopBubbling: function stopBubbling(e) {
    e.stopPropagation();
    return false;
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.MOUSE_MOVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_START, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.stopBubbling, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.stopBubbling, this);
  },
  onDestroy: function onDestroy() {
    this.node.off(cc.Node.EventType.MOUSE_MOVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.MOUSE_DOWN, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_START, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.stopBubbling, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.stopBubbling, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RpYWxvZy9jb3Zlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic3RvcEJ1YmJsaW5nIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9NT1ZFIiwiTU9VU0VfTEVBVkUiLCJNT1VTRV9ET1dOIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfRU5EIiwib25EZXN0cm95Iiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxZQUhPLHdCQUdNQyxDQUhOLEVBR1M7QUFDZEEsSUFBQUEsQ0FBQyxDQUFDQyxlQUFGO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsR0FOTTtBQVFQO0FBRUFDLEVBQUFBLE1BVk8sb0JBVUU7QUFDUCxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTJDLEtBQUtSLFlBQWhELEVBQThELElBQTlEO0FBQ0EsU0FBS0ksSUFBTCxDQUFVQyxFQUFWLENBQWFSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCRSxXQUEvQixFQUE0QyxLQUFLVCxZQUFqRCxFQUErRCxJQUEvRDtBQUNBLFNBQUtJLElBQUwsQ0FBVUMsRUFBVixDQUFhUixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsVUFBL0IsRUFBMkMsS0FBS1YsWUFBaEQsRUFBOEQsSUFBOUQ7QUFDQSxTQUFLSSxJQUFMLENBQVVDLEVBQVYsQ0FBYVIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JJLFdBQS9CLEVBQTRDLEtBQUtYLFlBQWpELEVBQStELElBQS9EO0FBQ0EsU0FBS0ksSUFBTCxDQUFVQyxFQUFWLENBQWFSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCSyxVQUEvQixFQUEyQyxLQUFLWixZQUFoRCxFQUE4RCxJQUE5RDtBQUNBLFNBQUtJLElBQUwsQ0FBVUMsRUFBVixDQUFhUixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQk0sU0FBL0IsRUFBMEMsS0FBS2IsWUFBL0MsRUFBNkQsSUFBN0Q7QUFDRCxHQWpCTTtBQW1CUGMsRUFBQUEsU0FuQk8sdUJBbUJLO0FBQ1YsU0FBS1YsSUFBTCxDQUFVVyxHQUFWLENBQWNsQixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBaEMsRUFBNEMsS0FBS1IsWUFBakQsRUFBK0QsSUFBL0Q7QUFDQSxTQUFLSSxJQUFMLENBQVVXLEdBQVYsQ0FBY2xCLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCRSxXQUFoQyxFQUE2QyxLQUFLVCxZQUFsRCxFQUFnRSxJQUFoRTtBQUNBLFNBQUtJLElBQUwsQ0FBVVcsR0FBVixDQUFjbEIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JHLFVBQWhDLEVBQTRDLEtBQUtWLFlBQWpELEVBQStELElBQS9EO0FBQ0EsU0FBS0ksSUFBTCxDQUFVVyxHQUFWLENBQWNsQixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQkksV0FBaEMsRUFBNkMsS0FBS1gsWUFBbEQsRUFBZ0UsSUFBaEU7QUFDQSxTQUFLSSxJQUFMLENBQVVXLEdBQVYsQ0FBY2xCLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCSyxVQUFoQyxFQUE0QyxLQUFLWixZQUFqRCxFQUErRCxJQUEvRDtBQUNBLFNBQUtJLElBQUwsQ0FBVVcsR0FBVixDQUFjbEIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JNLFNBQWhDLEVBQTJDLEtBQUtiLFlBQWhELEVBQThELElBQTlEO0FBQ0Q7QUExQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgc3RvcEJ1YmJsaW5nKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX01PVkUsIHRoaXMuc3RvcEJ1YmJsaW5nLCB0aGlzKTtcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMuc3RvcEJ1YmJsaW5nLCB0aGlzKTtcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5zdG9wQnViYmxpbmcsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zdG9wQnViYmxpbmcsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnN0b3BCdWJibGluZywgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zdG9wQnViYmxpbmcsIHRoaXMpO1xuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX01PVkUsIHRoaXMuc3RvcEJ1YmJsaW5nLCB0aGlzKTtcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLnN0b3BCdWJibGluZywgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLnN0b3BCdWJibGluZywgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zdG9wQnViYmxpbmcsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5zdG9wQnViYmxpbmcsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnN0b3BCdWJibGluZywgdGhpcyk7XG4gIH1cbn0pOyJdfQ==