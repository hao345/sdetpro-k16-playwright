const readline = require('readline-sync')

//Data
const account1 = {
    name: 'Hao',
    accountNumber: '123456789',
    routingNumber: '123',
    balance: 20000
};

const account2 = JSON.parse(JSON.stringify(account1));
account2.name = 'Haoo';
account2.accountNumber = '987654321';

const accounts = [account1, account2]

//Program Interface
bankApp();

//Main Apps
function bankApp() {
    let isInteracting = true;
    while (isInteracting) {
        printTheMenu();
        const userInput = getUserOption();

        switch (userInput) {
            case 1:
                const foundAccount = findAccount();
                if (foundAccount.accountNumber) {
                    const { name, balance } = foundAccount;
                    console.log(`Account Name: ${name}, balance is ${balance}`)
                } else {
                    console.log('Account not found')
                }
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                console.log('Wrong option');
        }
    }
    console.log('See u next time')
}

//Support functions
function printTheMenu() {
    console.log(
        `
        === Banking Application ===
        1. Find an account
        2. Update balance
        0. Exit program
        `
    )
}

function getUserOption() {
    return Number(readline.question('Select option: '));
}

function findAccount() {
    let foundAccount = {};
    const inputAccountNumber = readline.question('Enter account number: ');
    for (const account of accounts) {
        if (account.accountNumber === inputAccountNumber) {
            foundAccount = account;
            break;
        }
    }
    return foundAccount;
}

function updateBalance() {
    const MAX_ALLOWED_ATTEMPT = 3;
    let attemp = 0;
    do {
        const foundAccount = findAccount();
        isNotFound = foundAccount.accountNumber === undefined;
        if (isNotFound) {
            console.log(`Attempt time: ${attemp + 1}`)
            attemp++;
        } else {
            //Logic update balance and exit the function
            const { balance } = foundAccount;
            console.log(`Your balance is: ${balance}`);
            const expectedWithdrawMoney = Number(readline.question('Please input withdraw amount: '));
            if (expectedWithdrawMoney > balance) {
                console.log('Insufficient balance')
            } else {
                console.log('Success')
                foundAccount.balance = balance - expectedWithdrawMoney;
                attemp = MAX_ALLOWED_ATTEMPT;
            }
        }
    } while (attemp < MAX_ALLOWED_ATTEMPT)
}