exports.config = {
    specs: ['../test/e2e/**/*.page.spec.js'],
    onPrepare: function() {
        browser.driver.get('http://localhost:3000');
        browser.driver.findElement(by.id('entrar')).click();
        browser.driver.findElement(by.id('login_field')).sendKeys('pantojatest');
        browser.driver.findElement(by.id('password')).sendKeys('pantoja123');
        browser.driver.findElement(by.name('commit')).click();
 //       browser.driver.findElement(by.name('authorize')).click();
    }
};
