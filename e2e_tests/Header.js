module.exports = {
  'Test for header appears on the screen': function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#root', 1000)
      .waitForElementVisible('header', 1000)
      .assert.containsText('header', '15 Minutes Video Competition')
      .end();
  }
};
