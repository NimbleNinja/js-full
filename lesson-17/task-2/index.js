'use strict';

const callbackPrompt = {
  message: 'Write your phone number please:',

  showPrompt() {
    console.log(prompt(this.message));
  },

  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

export { callbackPrompt };
