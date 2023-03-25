const connection = require('../database/connector');
const { information } = require('../models/model');
class Operator {

    signInOperator = (signIn, res) => {
        let sql = `INSERT INTO UserChatCsIfElse
        (
            name ,
            timestamp
        )
        VALUES
        (
            ?, CURRENT_TIMESTAMP()
        )`
        connection.query(
            sql, [
            signIn.name,
        ],
            
            function (err) {
                if (err) {
                    console.log(err)
                } else {
                    let sql = `select name from UserChatCsIfElse
                        where name = ?`
                    connection.query(
                        sql,[
                            signIn.name
                        ],   
                        function (err, data) {
                            if (data != signIn.name) {
                                return res.render('../views/ChatCSIfElse.ejs',{response:{data , welcome:'Welcome again' , to:'Anything else today?”'}});
                            }
                            else {
                                console.log("Sign IN SUCCESS");
                                return res.render('../views/ChatCSIfElse.ejs',{response:{data , welcome:'Welcome again' , to:'Anything else today?”'}});
                            }
                        }
                    )
                }
            }
        )
        
    }

    sendMassageOperator = (chat, res )=> {
        let sql = `INSERT INTO ChatCsIfElse
        (
            history_User : '',
            history_Ai : '',
            timestamp_user :'',
            timestamp_ai : '',
        )
        VALUES
        (
            ?, ?, CURRENT_TIMESTAMP()
        )`
        connection.query(
            sql, [
            chat.history_User,
            chat.history_Ai,
            chat.timestamp_user,
            chat.timestamp_ai,
        ],
        function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                return res.render('../views/ChatCSIfElse.ejs',{response:{data }});
            }
        }
    )
    }


}
module.exports = {
    Operator
}