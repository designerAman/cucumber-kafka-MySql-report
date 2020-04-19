const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const fetch = require('node-fetch');

const hitApiForCheServer = (url) => {
	return fetch(url)
		.then(res => res.json())
		.then(data => {
			return data.message
		});
}

const hitApiForAddUser = (url, data) => {
	return fetch(url, data)
		.then(res => res.json())
		.then(data => {
			if(data.error)
				return data.error;
			else
				return JSON.stringify(data.data);
		});
}

const hitApiForGetUser = (url) => {
	return fetch(url)
			.then(res => res.json())
			.then(data => {
				if(data.error) {
					return data.error;
				} else {
					return 200;
				}
			})
}

const hitApiForDeleteUser = (url, data) => {
	return fetch(url, data)
			.then(res => res.json())
			.then(data => {
				if(data.error) {
					return data.error;
				} else {
					return 200;
				}
			})
}

const hitApiForUpdateUser = (url, data) => {
	return fetch(url, data)
			.then(res => res.json())
			.then(data => {
				if(data.error) {
					return data.error;
				} else {
					return data.message;
				}
			})
}

// start of common given for all feature file
Given('I have api for test {string}', function (url) {                                                                                                                      
     console.log(`I have api for test :- ${url}`);                                                                                                     
});
// end of common given for all feature file


// start of when for serverTest feature file
When('send get request to {string} for serverTesting', {timeout : 2*5000}, async function (url) {                                                                                                                        
	this. resultMesssagge = await hitApiForCheServer(url);
});
// end of when for serverTest feature file


// start of when for addUser, updateUser feature file
When('I fill the name {string}', function (name) {                                                                                                                            
    this.name = name;
});
// start of when for addUser, updateUser feature file


// start of when for addUser feature file
When('I fill the username {string}', function (username) {                                                                                                                        
    this.username = username;                                                                                                                                                             
});

When('I fill the email {string}', function (email) {                                                                                                                           
    this.email = email;                                                                                                                                                             
});

When('I fill the password {string}', function (password) {                                                                                                                        
    this.password = password;                                                                                                                                                             
});

When('send post request to {string} for addUser', {timeout : 2 * 10000}, async function (url) {
	const data = {
		method : 'post',
		headers : {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json'
		},
		body : JSON.stringify({
			name : this.name,
			username : this.username,
			email : this.email,
			password : this.password
		})
	}
	this.resultMessage = await hitApiForAddUser(url, data);
});
// end of when for addUser feature file


// start of when for getUser feature file
When('send get request to {string} for getUser', {timeout : 2*10000}, async function (url) {                                                                                                                        
	this.resultMessage = await hitApiForGetUser(url);
});
// end of when for getUser feature file


// start of when for deleteUser feature file
When('send delete request to {string} for deleteUser', {timeout : 2*10000}, async function (url) {
	const data = {
		method : 'delete'
	}
	this.resultMessage = await hitApiForDeleteUser(url, data);
});
// end of when for deleteUser feature file

// start of when for updateUser feature file
When('send put request to {string} for updateUser', {timeout : 2*10000}, async function (url) {
	const data = {
		method : 'put',
		headers: {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json'
		},
		body: JSON.stringify({
			name: this.name
		})
	}
	this.resultMessage = await hitApiForUpdateUser(url, data);
});
// end of when for updateUser feature file


// start of Then for serverTest feature file
Then('Get a message {string}', function (actualMessage) {                                                                                                                             
    assert.equal(this.resultMesssagge, actualMessage);                                                                                                                                                             
});
// end of Then for serverTest feature file


// start of common Then for all feature file
Then('I want an error message : {string}', function (actualMessage) {
	assert.equal(this.resultMessage, actualMessage);                                                                                                                                                          
});
// end of common Then for all feature file


// start of Then for addUser feature file
Then('I want data : {string}', function (actualMessage) { 
	assert.equal(this.resultMessage, actualMessage);                                                                                                                                                          
});
// end of Then for addUser feature file


// start of Then for getUser feature file
Then('I want a status code : {int}', function (statusCode) { 
	assert.equal(this.resultMessage, statusCode);                                                                                                                                                          
});

Then('I get result : {string}', function (statusCode) { 
	assert.equal(this.resultMessage, statusCode);                                                                                                                                                          
});
// end of Then for getUser feature file
