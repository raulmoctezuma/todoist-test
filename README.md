# :bulb: todoist test suite
This repository includes test and configuration files in order to test **todoist** web application (frontend and API). In the next line, it will be described the process of installation and configuration.

## Project Structure 

```
pom
 ├── data                   # Contains test data that will be utilized by test scripts
 ├── pages                  # Contains the page objects classes that are required to interact with the todoist web page
 ├── tests                  # Contain files to test all cases defined on the Test Plan.
 ...
```
# :warning: Pre-requisites

## :pencil: Install all packages
Using this command, it will help you to install all the packages needed to run the project.
```
npm install
```

## :pencil: Create an environment file
It is necessary to create an environment file `.env` within root folder, because it will be helpful to login to the application with your own credentials during test running and avoid errors during performance.
The environment file has to contain the following variables and values according to your credentials:
```
BASE_URL=https://todoist.com/users/showlogin
STANDARD_USER=youremail@example.com
STANDARD_USER_PASSWORD=Your_Passw0rd
```

# :arrow_forward: Commands
The following commands will help your to run test cases depending on what you need to test:
```
    npm run test                    # Run all tests
    npm run test-headless           # Run all tests in headless mode
    npm run test-login-feature      # Run login tests with two browsers configured
    npm run test-tasks-feature      # Run task tests with two browsers configured
    npm run test-project-feature    # Run project tests with two browsers configured
    npm run test-smoke              # Run smoke tests with reporter configured
    npm run test-reporter           # Run all tests with reported configured
```
