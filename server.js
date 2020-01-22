const express = require("express")
const bookRoute = require("./app/book/route")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/books", bookRoute)




app.listen(3000, () => console.log("Server runing at port 3000"))