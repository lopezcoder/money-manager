const Income = require('../models/income');

exports.createIncome = (props) => {
    console.log(props);
    const income = new Income(props);
    return income.save()
        .then((incomeDoc) => incomeDoc)
        .catch((err) => err);
}

exports.getIncomeById = (id) => {
    return Income.findById(id)
        .then((incomeDoc) => {
            if(!incomeDoc) {
                throw new Error('The income was not found');
            }
            return incomeDoc;
            
        }).catch(err => err);
}

exports.getIncomes = () => {
    return Income.find()
        .then((incomeDocs) => incomeDocs)
        .catch(err => err);
}

exports.deleteIncomeById = (id) => {
    return Income.findByIdAndDelete(id).then((income) => {
        if (!income) {
            throw new Error('This income does not exist');
        }
        return income
    }).catch((err) => err);
}

exports.updateIncomeById = (id, props) => {
   return this.getincomeById(id).then((income) => {
        income.income_name = props.income_name;
        income.quantity = props.quantity;
        income.income_date = props.income_date;
        income.created_date = props.income_date;
        income.payment_type = props.payment_type;
        return income.save().then((incomeDoc) => incomeDoc).catch((err) => err);
   }).catch((err) => err);
}