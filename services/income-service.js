const router = require('express').Router();
const _ = require('lodash');
const incomeController = require('../controllers/income-controller');

router.post('/', (req, res) => {
    const props = _.pick(req.body, ['income_name', 'quantity', 'income_date', 'created_date', 'payment_type']);
    incomeController.createIncome(props).then((incomeDoc) => {
        res.send(incomeDoc);
    }).catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    incomeController.getIncomeById(id).then((income) => {
        res.send(income);
    }).catch(err => res.send(err));
});

router.get('/', (req, res) => {
    incomeController.getIncomes().then((incomes) => {
        res.send(incomes);
    }).catch((err) => res.send(err));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    incomeController.deleteIncomeById(id).then((income) => {
        res.send(income);
    }).catch((err) => res.send(err));
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const props = _.pick(req.body, ['income_name', 'quantity', 'income_date', 'created_date', 'payment_type']);
    incomeController.updateIncomeById(id, props).then((income) => {
        res.send(income);
    }).catch((err) => res.send(err));
});


module.exports = router;