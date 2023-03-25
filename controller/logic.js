const { Operator } = require('./operator');
const axios = require('axios');
const { information } = require('../models/model');
class Logic {

    signInLogic = (signIn, res) => {
        new Operator().signInOperator(signIn, res);
    }
    // sendMassageLogic ส่งข้อมูลไปให้ sendMassageOperator
    sendMassageLogic = (chat, res) => {
        new Operator().sendMassageOperator(chat, res);
    }
}

module.exports = {
    Logic
}