const mongoose=require('mongoose');
const schema=mongoose.Schema;

const studentSchema=new schema({
    name:String,
    studentid:Number
 }) 

 const studentmodel=mongoose.model('student',studentSchema);

 module.exports=studentmodel;