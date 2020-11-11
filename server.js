const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Add Routes
app.use(express.static(__dirname + '/public'));
app.use('/', require('./controllers/burgers_controller'));

// Set up handlebars view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Connect to the database and start express server
connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    }
});