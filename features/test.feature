Feature: Analyze returns and risk profile any ETF portfolio
    As a user of WealthAPI
    I should be able to analyze return potential and risk profile of an ETF portfolio
    In order to invest my money wisely

    Scenario: Portfolio Return Analysis
        Given I go to "https://www.wealthapi.org/"
        When I add a portfolio of ETFs with corresponding weights
        And I click the analyze button
        Then I should see yearly average portfolio return
        And I should see compounded portfolio return

    Scenario: Portfolio Risk-Reward Analysis
        Given I go to "https://www.wealthapi.org"
        When I add a portfolio of ETFs with corresponding weights
        And I clock the analyze button
        Then I should see volatility of the portfolio
        And I should see Sharpe ratio of the portfolio
        And I should see Treyvor ratio of the portfolio