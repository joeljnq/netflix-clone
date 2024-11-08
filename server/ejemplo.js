import connection from "./config/db.js";

connection.query('SELECT * FROM user', (err, results) => {
    if(err){
        console.log('Error fetching user: ', err);
        return;
    }
    console.log('Users: ', results);
})