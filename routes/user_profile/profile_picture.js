let db = require('../../lib/database.js');

exports.profilePicture = function (req, res) {
    if (!req.headers.authorization) {
        return res.status(401).json({
            status: 401,
            message: 'No token supplied'
        });
        res.end();
    }
    let facebookAccessToken = req.headers.authorization.split(' ')[1];
    db.saveProfilePicture(facebookAccessToken).then(function (response) {
        return res.status(200).json({
            status: 200,
            message: response
        });
    }).catch(function (error) {
        return res.status(401).json({
            status: 401,
            message: error
        });
    });
};