// 27017 :: portno for mongodb
// mongob :: protocol
// tables :: collections :: models

const mongoose = require('mongoose')
const connect = async() => {
    try{
        let connection = await mongoose.connect(`mongodb://localhost:27017/noderd-18-april` , {useNewUrlParser:true,} )
        console.log('Db connected');
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connect
// {useNewUrlParser:true,}