const express = require('express');
const router = express.Router()
const { Endpoint } = require('../controller/endpoint.js');

//router ไปที่หน้า homepage หรือ หน้าแรก
router.get('/',(req, res) => {
    return res.render('../views/homepage.ejs');
})
//router ไปที่หน้า signIn page
router.get('/signInPage',(req, res) => {
    return res.render('../views/signIn.ejs');
})

//router รับ signIn page เพื่อ เข้าใช้
router.post('/signIn', new Endpoint().signInEnpoint);
 
//router ส่งข้อความ
router.post('/sendMassage', new Endpoint().sendMassageEnpoint);




module.exports = router;