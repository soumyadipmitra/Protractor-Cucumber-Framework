Feature: I am going to validate my website functionalities

   Demo feature file to see how Protractor works with Cucumber

   @calculatortesting
   Scenario Outline: Navigate to Super Calculator Site and perform calculations
      Given I will navigate to "SuperCalculator" site
      When I add two numbers "<firstNumber>" and "<secondNumber>"
      Then the output displayed should be "<result>"
      Examples:
         | firstNumber | secondNumber | result |
         | 3           | 5            | 9      |
         | 7           | 18           | 25     |

   # Scenario: I will navigate to Super Calculator Site
   # Given I will navigate to "SuperCalculator" site
   # When I add two numbers "7" and "18"
   # Then the output displayed should be "25"

   @angularjstesting
   Scenario Outline: I will navigate to AngularJS Site and search multiple texts
      Given I will navigate to "AngularJS" site
      When I clicked on header link
      And you will navigate to angular page
      Then you will enter "<searchText>" in search box
      Examples:
         | searchText |
         | angular    |
         | hello      |
