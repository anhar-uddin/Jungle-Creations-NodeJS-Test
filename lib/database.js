const request = require('request');
var _ = require('lodash');

var db;

exports.setMongoDatabase = function (mongoDb) {
    db = mongoDb;
}

exports.saveUsername = function (accessToken) {
    return new Promise(function (resolve, reject) {
        request("https://graph.facebook.com/v2.11/me?fields=name&access_token=" + accessToken, {
            json: true
        }, (apiReqErr, apiReqRes, apiReqBody) => {
            if (apiReqErr) {
                console.log("error");
                reject("Error");
            } else if (_.has(apiReqBody, 'error')) {
                reject(apiReqBody.error.message)
            } else {
                saveToCollection('facebook_usernames', apiReqBody).then(function (response) {
                    resolve("Record added to database")
                }).catch(function (error) {
                    reject(error)
                });
            }
        });
    });
}

exports.saveProfilePicture = function (accessToken) {
    return new Promise(function (resolve, reject) {
        request("https://graph.facebook.com/v2.11/me?fields=picture&access_token=" + accessToken, {
            json: true
        }, (apiReqErr, apiReqRes, apiReqBody) => {
            if (apiReqErr) {
                console.log("error");
                reject("Error");
            } else if (_.has(apiReqBody, 'error')) {
                reject(apiReqBody.error.message)
            } else {
                saveToCollection('facebook_profile_pictures', apiReqBody).then(function (response) {
                    resolve("Record added to database")
                }).catch(function (error) {
                    reject(error)
                });
            }
        });
    });
}

function saveToCollection(collectionName, data) {
    return new Promise(function (resolve, reject) {
        db.collection(collectionName).save(data, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve("Record added to database")
            }
        });
    });
}