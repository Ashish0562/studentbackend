const mongoose=require('mongoose');

mongoose.connect('')
.then(()=>{
    console.log('connect success');
    
})
.catch((e)=>{
    console.log(e);
})