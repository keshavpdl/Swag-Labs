# Cypress Automation Assignment

This repository contains Cypress test automation for SwagLabs based on the provided assignment requirements.

## Prerequisites

1. Node.js (v16 or later)
2. Cypress (v12 or later)
3. `neat-csv `package for CSV data handling

Install dependencies using: `npm install`

## How to Run the Tests

### Run All Tests

```
npm run test:report
```

### Run Tests in the Cypress Test Runner

npx cypress open

## Reports

After test execution, HTML reports are generated. These can be found in the `<span>reports</span>` directory. To view the reports:

1. Run the tests.
2. Open the report file from the `<span>reports/merged-report.html</span>` directory in any browser.
