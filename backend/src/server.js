const database = require('./db');
const app = require('./app');
app.listen(process.env.PORT,()=>{
    console.log('App is running in '+ process.env.PORT);
})