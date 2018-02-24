reward = 0.01;

for (days = 1; days <= 30; ++days ) {
    newBalance = reward * 2;
    reward = newBalance;
    console.log("Your total is " + reward + ".");
} 