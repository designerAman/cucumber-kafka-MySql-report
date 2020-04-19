const { Given, Then, When } = require("cucumber");
const assert = require("assert");

const isFriday = (day) => {
	console.log(111111111111, day);
	if(day == 'sunday')
		return 'yes';
	else 
		return 'no';
}

Given("today is {string}", function (givenDay) {
	this.today = givenDay;
});

When("I ask whether it is sunday yet", function () {
	this.actualAnswer = isFriday(this.today);
});

Then("I should be told {string}", function (string) {
	assert.equal(this.actualAnswer, string);
});
