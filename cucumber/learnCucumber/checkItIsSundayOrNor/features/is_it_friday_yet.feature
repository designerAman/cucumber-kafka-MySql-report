Feature: Is it sunday yet?
	Everybody wants to know when it is Sunday

	Scenario Outline: Sunday is Sunday
		Given today is '<day>'
		When I ask whether it is sunday yet
		Then I should be told '<answer>'

	Examples: 
		| day       | answer |
		| sunday    | yes    |
		| monday    | no     |
		| tuesday   | no     |
		| wednesday | no     |
		| thursday  | no     |
		| friday    | no     |
		| saturday  | no     | 