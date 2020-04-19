Feature: Check whether number is even or odd

	Scenario Outline: number divisible by 2 is even
		Given number is <number>
		When Is check for number id even or odd
		Then I got the answer that number is "<answer>"

	Examples:
		| number | answer |
		|   1    |  odd   |
		|   2    |  even  |
		|   3    |  odd   |
		|   4    |  even  |
		|   5    |  odd   |
		|   6    |  even  |
		|   7    |  odd   |
		|   8    |  even  |
		|   9    |  odd   |
		|   10   |  even  |
		|   11   |  odd   |
		|   12   |  even  |
		|   13   |  odd   |
		|   14   |  even  |
		|   15   |  odd   |
		|   16   |  even  |