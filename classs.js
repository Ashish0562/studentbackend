const mongoose=require('mongoose');
const schema=mongoose.Schema;

const classSchema=new schema({
  Student:Array,
  studentcount:String,
  classid: Number
})



const classmodel=mongoose.model('classs',classSchema);


module.exports=classmodel;
