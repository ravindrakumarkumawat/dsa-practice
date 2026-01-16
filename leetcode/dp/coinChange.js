/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const mem = new Array(amount + 1).fill(amount + 1);
    mem[0] = 0;

    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];

        for (let j = coin; j <= amount; j++) {
            const val = mem[j - coin] + 1;

            if (val < mem[j]) {
                mem[j] = val;
            }
        }
    }

    return mem[amount] > amount ? -1 : mem[amount];
};