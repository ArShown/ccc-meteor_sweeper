
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ec1aGXiIxOzoV7X8U4a60y', 'rule');
// scripts/rule.js

"use strict";

cc.Class({
  "extends": cc.Component,
  reset: function reset() {
    this.node.getChildByName('ScrollView').getComponent(cc.ScrollView).scrollToTop(0);
    this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3J1bGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInJlc2V0Iiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiU2Nyb2xsVmlldyIsInNjcm9sbFRvVG9wIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxLQUhPLG1CQUdDO0FBQ04sU0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFlBQXpCLEVBQXVDQyxZQUF2QyxDQUFvRE4sRUFBRSxDQUFDTyxVQUF2RCxFQUFtRUMsV0FBbkUsQ0FBK0UsQ0FBL0U7QUFDQSxTQUFLSixJQUFMLENBQVVLLE1BQVYsR0FBbUIsS0FBbkI7QUFDRDtBQU5NLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU2Nyb2xsVmlldycpLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5zY3JvbGxUb1RvcCgwKTtcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn0pOyJdfQ==