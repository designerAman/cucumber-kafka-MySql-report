# Feature: get user testing Application
	
# 	# Scenario: Check any user exists in the database or not
# 	# 	Given I have api for test "http://localhost:3000/user/api/getUser"
# 	# 	When send get request to "http://localhost:3000/user/api/getUser" for checking database is empty or not
# 	# 	Then I want an error message : 'no user exist in the database'

# 	Scenario: Check user able to get data or not
# 		Given I have api for test "http://localhost:3000/user/api/getUser"
# 		When send get request to "http://localhost:3000/user/api/getUser" for getUser
# 		Then I want a status code : 200

# 	Scenario Outline: Check user enters their username or not
# 		Given I have api for test "http://localhost:3000/user/api/getUser?id=<id>"
# 		When send get request to "http://localhost:3000/user/api/getUser?id=<id>" for getUser
# 		Then I get result : "<result>"


# 	Examples: 
# 		| id | result         	 |
# 		| 15 | 200	          	 |
# 		| 16 | no user for id 16 |
# 		| 17 | no user for id 17 |