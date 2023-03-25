const { Logic } = require('./logic');
const models = require('../models/model.js');
class Endpoint {

    constructor() {
        this.signIn = models.signIn;
        this.chat = models.chat;
    }

    // รับค่า จากหน้า signun 
    signInEnpoint = (req, res) => {
        this.signIn.name = req.body.username
        console.log(this.signIn)
        new Logic().signInLogic(this.signIn, res);
    }
    // sendMassageEnpoint รับค่า message จากหน้าบ้านส่งไปให้ sendMassageLogic 
    sendMassageEnpoint = (req, res) => {
        this.chat.history_User = req.body.message
        new Logic().sendMassageLogic(this.chat, res);
    }

}
module.exports = {
    Endpoint
}