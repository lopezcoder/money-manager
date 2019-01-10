const Expense = require('../models/expense');

exports.createExpense = (props) => {
    console.log(props);
    const expense = new Expense(props);
    return expense.save()
        .then((expenseDoc) => expenseDoc)
        .catch((err) => err);
}

exports.getExpenseById = (id) => {
    return Expense.findById(id)
        .then((expenseDoc) => {
            if(!expenseDoc) {
                throw new Error('The expense was not found');
            }
            return expenseDoc;
            
        }).catch(err => err);
}

exports.getExpenses = () => {
    return Expense.find()
        .then((expenseDocs) => expenseDocs)
        .catch(err => err);
}

exports.deleteExpenseById = (id) => {
    return Expense.findByIdAndDelete(id).then((expense) => {
        if (!expense) {
            throw new Error('This expense does not exist');
        }
        return expense
    }).catch((err) => err);
}

exports.updateExpenseById = (id, props) => {
   return this.getExpenseById(id).then((expense) => {
        expense.expense_name = props.expense_name;
        expense.quantity = props.quantity;
        expense.expense_date = props.expense_date;
        expense.created_date = props.expense_date;
        expense.payment_type = props.payment_type;
        return expense.save().then((expenseDoc) => expenseDoc).catch((err) => err);
   }).catch((err) => err);
}