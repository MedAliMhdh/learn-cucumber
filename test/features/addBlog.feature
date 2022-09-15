Feature: Add blog

    As a use I should be able to add a blog when i fill all required fields

    Scenario: As a user I can create a blog
        Given I am on the "create" page
        And I enter "New blog" as "title"
        And I enter "A snippet" as "snippet"
        And I enter "Blog body" as "body"
        When I click "submit" button
        Then I should be on the "blogs" page and the blog to have "New blog" title