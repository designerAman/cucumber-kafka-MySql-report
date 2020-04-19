const assert = require('assert');
const { Given, Then, When } = require('cucumber');

const checkEvenOrOdd = (testNumber) => {
	if(testNumber % 2 === 0)
		return 'even';
	else 
		return 'odd';
}

Given('number is {int}', (checkForNumber) => {
	this.givenNumber = checkForNumber;
});

When('Is check for number id even or odd', () => {
	this.getResult = checkEvenOrOdd(this.givenNumber);
});

Then('I got the answer that number is {string}', (result) => {
	assert.equal(this.getResult, result);
})