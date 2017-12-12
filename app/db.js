(function () {
    'use strict';
    let mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    module.exports.connect = () => {
        mongoose.connect("mongodb://george.antony:anthony192496@ds137256.mlab.com:37256/desarrollo-software", { useMongoClient: true });
        const connection = mongoose.connection;
        let connected = () => { console.log('mongoLab connection success'); };
        let disconnected = () => { console.log('mongoLab disconnect'); }
        let error = (err) => { console.log('Mongoose connection failed: detail\n', err); };
        let nodeProcessEnd = () => {
            mongoose.connection.close(() => {
                console.log('Mongoose default connection disconnected through app termination');
                process.exit(0);
            });
        }
        connection.on('connected', connected);
        connection.on('disconnected', disconnected);
        connection.on('error', error);
        process.on('SIGINT', nodeProcessEnd);
    }
})();
