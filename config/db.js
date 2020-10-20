const moongose= require('mongoose');
require('dotenv').config({path: '.env'});

const connectDB=async ()=>{
    try {
        await moongose.connect(process.env.DB_MONGO,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        });
        console.log('DB Connect')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDB;
