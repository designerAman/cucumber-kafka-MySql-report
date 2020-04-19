# Feature: add user testing Application
	
# 	Scenario: Check user enters their name or not
# 		Given I have api for test "http://localhost:3000/user/api/addUser"
# 		When I fill the username 'aman@123'
# 		And I fill the email 'aman@gmail.com'
# 		And I fill the password '123456'
# 		And send post request to "http://localhost:3000/user/api/addUser" for addUser
# 		Then I want an error message : 'name field is required'

# 	Scenario: Check user enters their username or not
# 		Given I have api for test "http://localhost:3000/user/api/addUser"
# 		When I fill the name 'Aman Gupta'
# 		And I fill the email 'aman@gmail.com'
# 		And I fill the password '123456'
# 		And send post request to "http://localhost:3000/user/api/addUser" for addUser
# 		Then I want an error message : 'username field is required'

# 	Scenario: Check user enters their email or not
# 		Given I have api for test "http://localhost:3000/user/api/addUser"
# 		When I fill the username 'aman@123'
# 		And I fill the name 'Aman Gupta'
# 		And I fill the password '123456'
# 		And send post request to "http://localhost:3000/user/api/addUser" for addUser
# 		Then I want an error message : 'email field is required'

# 	Scenario: Check user enters their password or not
# 		Given I have api for test "http://localhost:3000/user/api/addUser"
# 		When I fill the username 'aman@123'
# 		And I fill the email 'aman@gmail.com'
# 		And I fill the name 'Aman Gupta'
# 		And send post request to "http://localhost:3000/user/api/addUser" for addUser
# 		Then I want an error message : 'password field is required'

# 	# Scenario: Check user enters their password or not
# 	# 	Given I have api for test "http://localhost:3000/user/api/addUser"
# 	# 	When I fill the name 'Aman Gupta'
# 	# 	And I fill the username 'aman@123'
# 	# 	And I fill the email 'aman@gmail.com'
# 	# 	And I fill the password '123456'
# 	# 	And send post request to "http://localhost:3000/user/api/addUser" for addUser
# 	# 	Then I want an error message : "Duplicate entry 'aman@123-aman@gmail.com' for key 'usertable.username'"

# 	# Scenario: Check user enters their password or not
# 	# 	Given I have api for test "http://localhost:3000/user/api/addUser"
# 	# 	When I fill the name 'Aman Gupta'
# 	# 	And I fill the username 'aman@1234'
# 	# 	And I fill the email 'aman1234@gmail.com'
# 	# 	And I fill the password '123456'
# 	# 	And send post request to "http://localhost:3000/user/api/addUser" for addUser
# 	# 	Then I want data : '{"name":"Aman Gupta","username":"aman@1234","email":"aman1234@gmail.com","password":"123456"}'