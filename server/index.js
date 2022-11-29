const express = require('express'); // isto kao import u flutteru
const mongoose = require('mongoose');

const app = express(); 
app.use(express.json());
const authRouter = require('./routes/auth.js') // import iz routes
 // instalacija expressa
 const PORT = 3600; //adding port number 3000
const DB = "mongodb+srv://affan:affan12345@cluster0.5yffvww.mongodb.net/?retryWrites=true&w=majority"

//Client -> middleweare -> Server -> Client

app.use(authRouter); // middleware


//Connections
mongoose.connect(DB).then(() => {
    console.log("Connection succsessful")
}).catch((e) => {
    console.log(e)
}); //dodajemo then iz razloga sto je promis u pitanju

app.listen(PORT,"0.0.0.0",() => {
    console.log(`connected at ports ${PORT}`);
}) //localhost can run withouth host we are adding '0' so we can access from anywhere

// sa ovim dobijamo potvrdu da je auth router public odnosno da se moze korisitit i u drugim dijelovima app


