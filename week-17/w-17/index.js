// // inde
// const { Client } = require('pg');
// const express= require('express');
// const app = express();
// app.use(express.json());



// // Create a new client instance
// const client = new Client({
//   user: 'admin',            // PostgreSQL username
//   host: 'localhost',        // Use 'host.docker.internal' if Postgres is in Docker (on Windows/Mac)
//   database: 'mydb',         // Your database name
//   password: 'admin123',     // Your PostgreSQL password
//   port: 5431,               // Default PostgreSQL port
// });

// // Connect to PostgreSQL
// client.connect()
//   .then(() => {
//     console.log('✅ Connected to PostgreSQL database!');

//     // Run a sample query
//     return client.query("UPDATE users SET username= 'username_er' WHERE id=1");
//   })
//   .then(res => {
//     console.log('📦 Data from users table:', res.rows);
//   })
//   .catch(err => {
//     console.error('❌ Connection or Query Error:', err.stack);
//   })

// app.post("/signup", async (req, res)=>{
//        const id= req.body.id;
//     const username= req.body.username;
   
//     const email = req.body.email;
//      const password= req.body.password;
 

  
//     // let  sqlQuery= "INSERT INTO users (username, email, password) VALUES"
//     // sqlQuery+=username;
//     // sqlQuery+=",";
//     // sqlQuery+=email;
//     // sqlQuery+=",";
//     // sqlQuery+=password;
//     // sqlQuery+=");";
//   const response= await client.query(`INSERT INTO users (username, email, password) VALUES (${username},${email},${password});`);
//     res.json({
//         message:"you have signed up"
//     })
//     const insertquery = await client.query(response);
// })
// app.listen(3000);

const { Client } = require('pg');

async function insertData(){
  const client= new Client({
    host:'localhost',
    port:5431,
    database:'mydb',
    user:'admin1',
    password:'admin123',
  });

  try{
    await client.connect();
    const insertQuery = "INSERT INTO users( id,username, email, password) VALUES('8',username2','user3@example.com', 'user_password');";
    const res= await  client.query(insertQuery);
    console.log('insertion success', res);

  }
  catch(err){
    console.log('Error during the  insertion', err);

  }
  finally{
    await client.end();

  }

}
insertData();
