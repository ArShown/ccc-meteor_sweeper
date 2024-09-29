
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/dialog/dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RpYWxvZy9kaWFsb2cuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTGFiZWwiLCJyZXNvbHZlIiwicmVzb2x2ZUNhbGxiYWNrIiwicmVqZWN0Iiwibm9kZSIsImRlc3Ryb3kiLCJyZWplY3RDYWxsYmFjayIsInNldENvbnRlbnQiLCJzdHIiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJzZXRDYWxsYmFjayIsIm9uTG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSztBQURGLEdBSEw7QUFPUEMsRUFBQUEsT0FQTyxxQkFPRztBQUNSLFNBQUtDLGVBQUw7QUFDRCxHQVRNO0FBV1BDLEVBQUFBLE1BWE8sb0JBV0U7QUFDUCxTQUFLQyxJQUFMLENBQVVDLE9BQVY7QUFDQSxTQUFLQyxjQUFMO0FBQ0QsR0FkTTtBQWdCUEMsRUFBQUEsVUFoQk8sc0JBZ0JJQyxHQWhCSixFQWdCUztBQUNkLFNBQUtULE9BQUwsQ0FBYVUsWUFBYixDQUEwQmQsRUFBRSxDQUFDSyxLQUE3QixFQUFvQ1UsTUFBcEMsR0FBNkNGLEdBQTdDO0FBQ0QsR0FsQk07QUFvQlBHLEVBQUFBLFdBcEJPLHVCQW9CS1YsT0FwQkwsRUFvQjRCRSxNQXBCNUIsRUFvQmtEO0FBQUEsUUFBN0NGLE9BQTZDO0FBQTdDQSxNQUFBQSxPQUE2QyxHQUFuQztBQUFBLGVBQU0sS0FBTjtBQUFBLE9BQW1DO0FBQUE7O0FBQUEsUUFBdEJFLE1BQXNCO0FBQXRCQSxNQUFBQSxNQUFzQixHQUFiO0FBQUEsZUFBTSxLQUFOO0FBQUEsT0FBYTtBQUFBOztBQUN2RCxTQUFLRCxlQUFMLEdBQXVCRCxPQUF2QjtBQUNBLFNBQUtLLGNBQUwsR0FBc0JILE1BQXRCO0FBQ0QsR0F2Qk07QUF5QlBTLEVBQUFBLE1BekJPLG9CQXlCRTtBQUNQLFNBQUtWLGVBQUwsR0FBdUI7QUFBQSxhQUFNLEtBQU47QUFBQSxLQUF2Qjs7QUFDQSxTQUFLSSxjQUFMLEdBQXNCO0FBQUEsYUFBTSxLQUFOO0FBQUEsS0FBdEI7QUFDRDtBQTVCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgY29udGVudDogY2MuTGFiZWxcbiAgfSxcblxuICByZXNvbHZlKCkge1xuICAgIHRoaXMucmVzb2x2ZUNhbGxiYWNrKCk7XG4gIH0sXG5cbiAgcmVqZWN0KCkge1xuICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgdGhpcy5yZWplY3RDYWxsYmFjaygpO1xuICB9LFxuXG4gIHNldENvbnRlbnQoc3RyKSB7XG4gICAgdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RyO1xuICB9LFxuXG4gIHNldENhbGxiYWNrKHJlc29sdmUgPSAoKSA9PiBmYWxzZSwgcmVqZWN0ID0gKCkgPT4gZmFsc2UpIHtcbiAgICB0aGlzLnJlc29sdmVDYWxsYmFjayA9IHJlc29sdmU7XG4gICAgdGhpcy5yZWplY3RDYWxsYmFjayA9IHJlamVjdDtcbiAgfSxcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5yZXNvbHZlQ2FsbGJhY2sgPSAoKSA9PiBmYWxzZTtcbiAgICB0aGlzLnJlamVjdENhbGxiYWNrID0gKCkgPT4gZmFsc2U7XG4gIH1cbn0pOyJdfQ==