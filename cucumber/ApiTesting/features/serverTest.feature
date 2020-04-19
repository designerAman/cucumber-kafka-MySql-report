Feature: Server testing Application

	Scenario: to Check whether server is running or not
		Given I have api for test "http://localhost:3000/user/api"
		When send get request to "http://localhost:3000/user/api" for serverTesting
		Then Get a message "Welcome to the API with Node and MySql"