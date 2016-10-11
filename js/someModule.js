var someModule = {
  messageOk: 'It works!',
  messageFail: '...but it doesn\'t',
  someMethod: function () {
    if (this.messageOk) {
      return this.messageOk;
    }
    else {
      return false;
    }
  },
  anotherMethod: function () {
    return this.messageFail;
  }
};

module.exports = someModule;
