# Woolworths Online Shopping Automation Testing with Playwright

This project provides an automated testing suite for the Woolworths online shopping platform, utilizing Playwright. It covers functionalities such as user registration, login, profile updates, item searches, shopping list management, and trolley operations.

## Project Structure

```bash
playwright
├── playwright-report               # Playwright-generated test execution reports
│   ├── data                        # Contains test execution data, including videos
│   └── index.html                  # HTML report summarizing test results
├── playwright.config.js            # Configuration for Playwright tests
├── test-results                    # Test results and recordings directory
│   └── auth.setup.js-do-login-setup
│       └── video.webm              # Example video recording of a test
├── tests                           # Test cases categorized by feature
│   ├── Recipes                     # Tests for personal recipes functionality
│   ├── Specials                    # Tests for special pricing features
│   ├── auth.setup.js               # Authentication setup logic
│   ├── common                      # Common utilities or classes used across tests
│   ├── globalSetup.js              # Global setup configuration for tests
│   ├── login                       # Login-related tests
│   ├── preferences                 # Tests for user preferences
│   ├── profile                     # Profile update-related tests
│   ├── registration                # Registration-related tests
│   ├── search                      # Tests for searching functionality
│   ├── shoppingList                # Tests for managing shopping lists
│   └── trolley                     # Tests for trolley management
└── tests-examples                  # Example test cases for demonstration

## Test Coverage

### Recipes
- **Location**: `tests/Recipes`
- **Description**: Covers tests related to the personal recipes functionality, ensuring users can create, update, and manage their personal recipes.

### Specials
- **Location**: `tests/Specials`
- **Description**: Focuses on testing special pricing features, verifying correct application of discounts and special member prices.

### Authentication Setup
- **Location**: `tests/auth.setup.js`
- **Description**: Handles authentication setup logic for tests, including login and session management, to ensure tests run in an authenticated state when required.

### Common Utilities
- **Location**: `tests/common`
- **Description**: Contains common utilities and classes, such as the `loginClass.js`, which are used across multiple test cases to avoid redundancy and streamline test logic.

### Global Setup
- **Location**: `tests/globalSetup.js`
- **Description**: Manages the global setup configuration required before running the tests, including actions like logging in or setting up test environments.

### Login
- **Location**: `tests/login`
- **Description**: Covers tests related to login functionality, verifying both valid and invalid login scenarios.

### Preferences
- **Location**: `tests/preferences`
- **Description**: Includes tests for managing user preferences such as communication settings and online shopping preferences.

### Profile
- **Location**: `tests/profile`
- **Description**: Contains tests that ensure users can update their profile information, such as email, password, and mobile number.

### Registration
- **Location**: `tests/registration`
- **Description**: Tests related to user registration, including validation for both valid and invalid registration scenarios.

### Search
- **Location**: `tests/search`
- **Description**: Covers search functionality, ensuring users can search for items using the search bar and that results are accurately returned.

### Shopping List
- **Location**: `tests/shoppingList`
- **Description**: Focuses on managing the shopping list, allowing users to save, update, and retrieve items from their shopping lists.

### Trolley Management
- **Location**: `tests/trolley`
- **Description**: Tests related to managing the shopping trolley, including adding and removing items, and ensuring the correct functionality of trolley operations.
