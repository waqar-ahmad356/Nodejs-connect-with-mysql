const mysql=require('mysql');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mydb'
});
con.connect((err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log('connected');
    }
});
con.query('select * from user',(err,result)=>{
    console.log('result',result);

})