const express = require('express')
const router = express.Router()

const StudentController = require('../controllers/studentController')
router.use(express.urlencoded({ extended : false }))

router.get('/' , (req,res) => {
    // res.render('home.ejs')
    StudentController.getHome(req,res)

})

router.post('/student/create' , (req,res) =>{
    StudentController.createStudent(req,res)
})


router.get('/students/list' , (req,res) =>{
    StudentController.getStudents(req,res)
})

module.exports = router