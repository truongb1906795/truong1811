// const { default: mongoose } = require("mongoose");
const app = require("./app");
const config = require("./app/config");

// mongoose.connect("mongodb+srv://BangTrinh:0052trinh@cluster0.axw16.mongodb.net/trinhb1906789?retryWrites=true&w=majority")
//     .then(() => {
//         console.log("Connected to the database!!");
//     })
//     .catch((error) => {
//         console.log(error);
//         process.exit();
//     });


const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is runging on port ${PORT}.`);
});