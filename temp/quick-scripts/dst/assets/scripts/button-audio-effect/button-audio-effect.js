
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/button-audio-effect/button-audio-effect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e696c1SA4VOE6ASgdl4pXxT', 'button-audio-effect');
// scripts/button-audio-effect/button-audio-effect.js

"use strict";

cc.Class({
  "extends": cc.Button,
  properties: {
    clip: {
      "default": null,
      type: cc.AudioClip
    }
  },
  _onTouchEnded: function _onTouchEnded(event) {
    if (!this.interactable || !this.enabledInHierarchy) return;

    if (this._pressed) {
      cc.audioEngine.play(this.clip, false, 1);
      cc.Component.EventHandler.emitEvents(this.clickEvents, event);
      this.node.emit('click', this);
    }

    this._pressed = false;

    this._updateState();

    event.stopPropagation();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2J1dHRvbi1hdWRpby1lZmZlY3QvYnV0dG9uLWF1ZGlvLWVmZmVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQnV0dG9uIiwicHJvcGVydGllcyIsImNsaXAiLCJ0eXBlIiwiQXVkaW9DbGlwIiwiX29uVG91Y2hFbmRlZCIsImV2ZW50IiwiaW50ZXJhY3RhYmxlIiwiZW5hYmxlZEluSGllcmFyY2h5IiwiX3ByZXNzZWQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJDb21wb25lbnQiLCJFdmVudEhhbmRsZXIiLCJlbWl0RXZlbnRzIiwiY2xpY2tFdmVudHMiLCJub2RlIiwiZW1pdCIsIl91cGRhdGVTdGF0ZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLE1BREw7QUFFUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLElBQUksRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkw7QUFESSxHQUZMO0FBU1BDLEVBQUFBLGFBVE8seUJBU09DLEtBVFAsRUFTYztBQUNuQixRQUFJLENBQUMsS0FBS0MsWUFBTixJQUFzQixDQUFDLEtBQUtDLGtCQUFoQyxFQUFvRDs7QUFFcEQsUUFBSSxLQUFLQyxRQUFULEVBQW1CO0FBQ2pCWCxNQUFBQSxFQUFFLENBQUNZLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLVCxJQUF6QixFQUErQixLQUEvQixFQUFzQyxDQUF0QztBQUNBSixNQUFBQSxFQUFFLENBQUNjLFNBQUgsQ0FBYUMsWUFBYixDQUEwQkMsVUFBMUIsQ0FBcUMsS0FBS0MsV0FBMUMsRUFBdURULEtBQXZEO0FBQ0EsV0FBS1UsSUFBTCxDQUFVQyxJQUFWLENBQWUsT0FBZixFQUF3QixJQUF4QjtBQUNEOztBQUNELFNBQUtSLFFBQUwsR0FBZ0IsS0FBaEI7O0FBQ0EsU0FBS1MsWUFBTDs7QUFDQVosSUFBQUEsS0FBSyxDQUFDYSxlQUFOO0FBQ0Q7QUFwQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5CdXR0b24sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBjbGlwOiB7XG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgfVxuICB9LFxuXG4gIF9vblRvdWNoRW5kZWQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaW50ZXJhY3RhYmxlIHx8ICF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuX3ByZXNzZWQpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5jbGlwLCBmYWxzZSwgMSk7XG4gICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5jbGlja0V2ZW50cywgZXZlbnQpO1xuICAgICAgdGhpcy5ub2RlLmVtaXQoJ2NsaWNrJywgdGhpcyk7XG4gICAgfVxuICAgIHRoaXMuX3ByZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbn0pOyJdfQ==