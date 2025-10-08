let balances: Record<string, bigint> = {};

export default {
  async deposit(principal: string, amount: bigint) {
    balances[principal] = (balances[principal] || 0n) + amount;
  },
  async getBalance(principal: string) {
    return balances[principal] || 0n;
  }
};
