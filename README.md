# EPAMfinalTest

This project aims to demonstrate the implementation of automated tests for the Spotify login functionality using WebdriverIO and Mocha. The tests cover scenarios such as login with empty credentials, login with incorrect credentials, and successful login with correct credentials.

# TASK
For this task, use the WebDriver IO, Mocha ("describe it" format), Page Object Model. Launch the Spotify Url "https://open.spotify.com/" and the use case to automate would be Login functionality.

UC -1 - Test Login form with empty credentials: 1.Type any credentials 2. Clear the inputs. 3. Check the error messages: 3.1 Please enter your Spotify username or email address. 3.2 Please enter your password.

UC-2 - Test Login form with incorrect credentials:

Type any incorrect credentials and click LOG IN button. X.
Check the error message: 2.1 Incorrect username or password.

UC -3 - Test Login form with correct credentials:

Type correct credentials and click LOG IN button.
Check that Name is correct.

Provide parallel execution, add logging for tests, and use tagging to parametrize tests suite run. Make sure that all tasks supported by this 3 conditions: 1. UC - 1; 2. UC - 2; 3. UC -3.


## Project Structure

The project structure is organized into two main files:

1. **LoginPage.js**: Defines the Page Object Model (POM) for the Spotify login page, including element locators and login methods.

2. **loginSpotify.spec.js**: Contains the Mocha test scripts for different login scenarios, utilizing the LoginPage POM.


## Installation
To run the application locally, follow these steps:

Clone the repository: git clone https://github.com/lherrer5/EPAMfinalTest
Install the dependencies: npm install
Please use Node version 18.14.1 and wdio verion 8.20.3
To run the tests use the **npm run wdio** command

## Contact
If you have any questions or suggestions, feel free to contact me at lina_h64@hotmail.com.

