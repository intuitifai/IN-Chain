class TransactionPool {
    constructor() {
        this.transactions = [];
    }

    updateOrAddTransactions(transaction) {
        let transactionWithID = this.transactions.find( t => t.id === transaction.id);

        if (transactionWithID) {
            this.transactions[this.transactions.indexOf(transactionWithID)] = transaction;
        } else {
            this.transactions.push(transaction);
        }
    }

    existingTransaction(address) {
        return this.transactions.find(t => t.input.address === address)
    }
}

module.exports = TransactionPool;