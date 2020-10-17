const orm = require('../config/orm');

const burger = {
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

    updateOne: function (burger_id, callback) {
        orm.updateOne(burger_id, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;