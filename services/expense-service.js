const router = require('express').Router();
const _ = require('lodash');
const expenseController = require('../controllers/expense-controller');

router.post('/', (req, res) => {
    const props = _.pick(req.body, ['expense_name', 'quantity', 'expense_date', 'created_date', 'payment_type']);
    expenseController.createExpense(props).then((expenseD) => {
        res.send(expenseD);
    }).catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    expenseController.getExpenseById(id).then((expense) => {
        res.send(expense);
    }).catch(err => res.send(err));
});

router.get('/', (req, res) => {
    expenseController.getExpenses().then((expenses) => {
        res.send(expenses);
    }).catch((err) => res.send(err));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    expenseController.deleteExpenseById(id).then((expense) => {
        res.send(expense);
    }).catch((err) => res.send(err));
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const props = _.pick(req.body, ['expense_name', 'quantity', 'expense_date', 'created_date', 'payment_type']);
    expenseController.updateExpenseById(id, props).then((expense) => {
        res.send(expense);
    }).catch((err) => res.send(err));
});


module.exports = router;