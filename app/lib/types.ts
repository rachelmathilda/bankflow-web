export type Account = {
  accountId: string;
  email: string;
  balance: number;
  status: string;
};

export type Transaction = {
  transactionId: string;
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  status: string;
};

export type Loan = {
  loanId: string;
  customerId: string;
  principalAmount: number;
  status: string;
};