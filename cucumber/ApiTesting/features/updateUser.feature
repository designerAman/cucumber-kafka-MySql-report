Feature: delete user testing Application

	Scenario: Check user enters their name or not
		Given I have api for test "http://localhost:3000/user/api/updateUser/18"
		When send put request to "http://localhost:3000/user/api/updateUser/18" for updateUser
		Then I want an error message : 'Please provide name for update'

	Scenario: Check user enters their username or not
		Given I have api for test "http://localhost:3000/user/api/updateUser/18"
		When I fill the name 'Aman Gupta'
		And send put request to "http://localhost:3000/user/api/updateUser/18" for updateUser
		Then I get result : 'User Updated successfully'
