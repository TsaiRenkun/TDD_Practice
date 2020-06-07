const { assert } = require("chai");

// Describe is too help developers to understand what this test is for

describe('What the test is suppose to check for', () => {

  //What the test is suppose to do!

  it('deletes the selected options', () => {

    // These actions mimic the user using the website
    browser.url('/');
    browser.setValue('#name', name);
    browser.selectByVisibleText('#select-pickUp', time)
    browser.click('#submit-order');
    browser.click('#clear-order');
    browser.url('/');


    // This is to look at the results and compare it the value.
    // if all the fields are the same the test will Pass
    assert.equal(browser.getText('#deliver-to'), '');
    assert.equal(browser.getText('#cake-type'), '');
    assert.equal(browser.getText('#fillings'), '');
    assert.equal(browser.getText('#size'), '');
    assert.equal(browser.getText('#pickUp'), '');
    
  });
});