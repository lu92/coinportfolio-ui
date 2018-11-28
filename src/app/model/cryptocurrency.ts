export class Cryptocurrency {
  readonly name: string;
  readonly tokens: number;
  readonly currentPrice: number;
  readonly balance: number;
  readonly investment: number;
  readonly profit: number;
  readonly profitPercentage: number;


  constructor(name: string, tokens: number, currentPrice: number, balance: number, investment: number, profit: number,
              profitPercentage: number) {
    this.name = name;
    this.tokens = tokens;
    this.currentPrice = currentPrice;
    this.balance = balance;
    this.investment = investment;
    this.profit = profit;
    this.profitPercentage = profitPercentage;
  }
}
