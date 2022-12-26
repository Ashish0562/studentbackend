const express=require('express');
const routes=express.Router;
const classmodel=require('./classs');
const studentmodel = require('./student');


let id=1;
routes.post('/v1/myClass',(req,res)=>{
    try {
        const newclass= classmodel.create(req.body);
        _id:id++
        res.status(201).json({
            status:success,
            data: newclass
        })
    } catch (error) {
        res.status(400).json({
            status:failed,
            message:error
        })
    }
    
})

routes.post('/v1/myClass/:myClassId/students',(req,res)=>{
    try {
        const newstudent= studentmodel.create(req.body);
        res.status(201).json({
            status:success,
            data: newstudent
        })
    } catch (error) {
        res.status(400).json({
            status:failed,
            message:error
        })
    }
    
})

routes.get('v1/myClass',(req,res)=>{
    try {
        const allclass= classmodel.find();
        res.status(200).json({
            status:success,
            data: allclass
        })
    } catch (error) {
        res.status(400).json({
            status:failed,
            message:error
        })
    }
    
})
routes.get('v1/myClass/:myClassId',(req,res)=>{
    try {
        const specificclass= classmodel.findone({id:req.param.id});
        res.status(200).json({
            status:success,
            data: specificclass
        })
    } catch (error) {
        res.status(404).json({
            status:failed,
            error: "There is no class at that id"
        })
    }
    
})

routes.get('v1/myClass/:myClassId/students',(req,res)=>{
    try {
        const classstudent= studentmodel.find();
        res.status(200).json({
            status:success,
            data: classstudent
        })
    } catch (error) {
        res.status(404).json({
            status:failed,
            error: "There are no students at this class"
        })
    }
    

})

routes.get('v1/myClass/:myClassId/students/:studentId',(req,res)=>{
    try {
        const classstudent= studentmodel.findOne({id:req.param.id});
        res.status(200).json({
            status:success,
            data: classstudent
        })
    } catch (error) {
        res.status(404).json({
            status:failed,
            error: "There is no student of that id"
        })
    }
    

})

routes.put('/v1/myClass/:myClassId/students/:studentId',(req,res)=>{
    try {
        const studentupdate= studentmodel.updateOne({id:req.param.id},req.body);
        res.status(204).json({
            status:success,
        })
    } catch (error) {
        res.status(404).json({
            status:failed,
            error: "There is no student of that id"
        })
    }
    

})

routes.delete('/v1/myClass/:myClassId',(req,res)=>{
    try {
        const classbyid= classmodel.deleteOne({id:req.param.id});
        res.status(204).json({
            status:success,
        })
    } catch (error) {

        res.status(404).json({
            status:failed,
            error: "There is no task at that id"
        })
    }
    

})

routes.delete('/v1/myClass/:myClassId/students/:studentId',(req,res)=>{
    try {
        const studentbyid= studentmodel.delete({id:req.param.id});

        res.status(204).json({
            status:success,
        })

    } catch (error) {

        res.status(404).json({
            status:failed,
            error: "There is no task at that id"
        })

    }
    
})

module.exports=routes;