const Student = require('../models/StudentModel')


const getHome = (req,res)=> {
    res.render('home.ejs')
}

const createStudent = async (req, res)=>{
    try {
        let student = new Student(req.body)
        await student.save()
        res.end('<h1> Data saved successfully ... </h1>')
    } catch (error) {
        console.log(error);
    }
}

const getStudents = async (req, res)=>{
    try {
        let students = await Student.find({})
        res.render('studentdetail' , {
            students : students
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getHome,
    createStudent,
    getStudents
}