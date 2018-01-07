let profilePicture = require('./profile_picture.js');
let profileUsername = require('./profile_username.js');

exports.profilePicture = function (req, res) {
    return profilePicture.profilePicture(req, res);
};

exports.profileUsername = function (req, res) {
    return profileUsername.profileUsername(req, res);
};