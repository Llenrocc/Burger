// Requirements
var connection = require('./connection.js');

//Connect to DB
var orm = {
    selectAll: function (callback) {
        //mySQL Query
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    //add a burger
    insertOne: function (burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?',
            {
                burger_name: burger_name,
                devoured: false,
            }, function (err, result) {
                if (err) throw err;
                callback(result);
            });
    },
    //move a burger
    updateOne: function (burgerID, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }],
            function (err, result) {
                if (err) throw err;
                callback(result);
            });
    }
};

module.exports = orm;