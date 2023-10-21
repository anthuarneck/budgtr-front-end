# Budgtr

Welcome to **Budgtr**, an application that allows you to log, manage, and visualize your financial transactions.


## Getting Started
Upon landing on the home page, you're warmly welcomed. You can then explore the app further by selecting either **Transactions** or **New Entry** from the navigation bar.

## Navigating to Transactions
- Click on **Transactions** in the navbar.
- This brings you to the **Index Page** where:
  - **Tracker Component** displays your bank balance:
    - **Red**: Below $0.
    - **Yellow**: $0 - $100.
    - **Green**: Above $100.
  - The progress bar represents your bank total, with 100% being $100.
  - All transactions are listed, showcasing:
    - **ID**
    - **Item Name**
    - **Amount**
    - A **Folder Emoji**: Clicking this takes you to a detailed view of the respective transaction.

## Viewing Transaction Details
On the **Show Page**, you can:
- See comprehensive transaction details.
- Navigate back to the Index Page via the **Back** button.
- Modify transaction details with the **Edit** button.
- Remove a transaction permanently with the **Delete** button. Post deletion, you return to the Index Page.

## Editing a Transaction
- From the **Show Page** of a transaction, click **Edit**.
- On the **Edit Page**, amend the transaction's details as needed.
- Submit the edited form to update the transaction, then get redirected back to its **Show Page**.

## Adding a New Transaction
- Select **New Entry** from the navbar.
- On the **New** page, fill out the form:
  - **ID** (Mandatory)
  - **Item Name** (Mandatory)
  - **Amount** (Mandatory)
  - **Date** (Optional)
  - **From** (Optional)
  - **Category** (Optional)
- Post submission, you're taken to the **Show Page** of the newly created transaction.

---

## Stretch Goals
This app implements faker.js in the backend in order to create the first 5 transactions automatically. All info on the first 5 transactions are completely randomized.

This app implements React Bootstrap and uses ProgressBar component which is added to Tracker component on Index page.

## Links

Front-end URL: https://budgtr-demo.netlify.app/
Back-end URL: https://budgtr-zbyb.onrender.com/
Back-end GitHub repository: https://github.com/anthuarneck/budgtr-back-end