"use strict";
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