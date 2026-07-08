const Student = require('../Models/StudentModel');
const CreateStudent = async (req,res)=>{
    try {
        const {name,email,rollno}=req.body;
        const newStudent = await Student.create({name,email,rollno});
        res.status(201).json(newStudent);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal Server Error'})
    }
};
const GetAllStudent = async (req,res)=>{
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal Server Error'})
    }
};
const GetAllStudentById = async (req,res)=>{
    try {
        const student = await Student.findByPk(req.params.id);
        if(student){
            res.status(200).json(student);
        }
        else{
            res.status(404).json({message: 'Student not found'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
};
const UpdateStudent = async (req,res)=>{
    try {
        const student = await Student.findByPk(req.params.id);
        if(student){
            await student.update(req.body);
            res.status(200).json(student);
    }
    else{
        res.status(404).json({message: 'Student not found'})
    }
} catch (error) {
    res.status(500).json({message: error.message})
}

};