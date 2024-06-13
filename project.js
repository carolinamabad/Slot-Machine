// 1. Deposit money
const prompt = require("promt-sync")();

// Define slot machine proportions/quantities
const ROWS = 25;
const COLS = 5;

const SYMBOLS_COUNT = {
    A: 3,
    B: 3,
    C: 3,
    D: 3,
    E: 3,
    F: 2,
    G: 2,
    H: 2,
    I: 2,
    J: 2,
}

const SYMBOL_VALUES = {
    A: 25,
    B: 12,
    C: 5,
    D: 10,
    E: 3,
    F: 2,
    G: 6,
    H: 10,
    I: 12,
    J: 15,
}

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter your deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

// 2. Determine number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-25): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 25) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberOfLines;
        }
    }
};

// 3. Collect bet amount
const getBet = (balance, lines) => {
    while (true) {
        const lines = prompt("Enter your bet per line: ");
        const numberBet  = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        } else {
            return numberBet;
        }
    }
};

// 4. Spin slot machine
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (Leti = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    const reels = [[], [], []];
    for (Leti = 0; i < COLS; i++){
        const reelSymbols = [...symbols];
        for(Letj = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
                const selectedSymbol = reelSymbols[randomIndex];
                reels[i].push(selectedSymbol);
                reelsSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};
const reels = spin();

// 5. Check for winner/loser



// 6. Give winning/take bets



// 7. play again/end game



Letbalance = deposit();
const numberOfLines = deposit();
const bet = getBet(balance, NumberOfLines);