'use strict';

let mongoose = require('mongoose'),
    User = mongoose.model('User');
let crypto = require('crypto'), hmac, signature;

exports.users = function(req, res) {
    User.find({}, function(err, user) {
        if (err) res.send(err);

        res.json(user);
    });
};

exports.getuser = function(req, res) {
    let userId = req.params.userId;
    User.findById(mongoose.Types.ObjectId(userId), function(err, userObj) {
        if (err) res.send(err);

        res.json(userObj);
    });
};

//Add new user
exports.add = function(req, res) {

    /** Encrypt Password */
    hmac = crypto.createHmac("sha1", 'auth secret');
    let encpassword = null;
    if(req.body.password){
        hmac.update(req.body.password);
        encpassword = hmac.digest("hex");
    }

    /** Create document to save to database */
    const document = {
        first_name:   req.body.first_name,
        last_name:    req.body.last_name,
        email:        req.body.email,
        password:    encpassword,
        phone:         req.body.phone,
        address:      req.body.address
    };

    /** Create new user */
    let new_user = new User(document);
    new_user.save(function(err, user) {
        if (err) res.send(err);

        res.json(user);
    });
};

exports.update = function(req, res) {
    let id = mongoose.Types.ObjectId(req.params.userId);

    /** Encrypt Password */
    hmac = crypto.createHmac("sha1", 'auth secret');
    let encpassword = null;
    if(req.body.password){
        hmac.update(req.body.password);
        encpassword = hmac.digest("hex");
    }

    /** Create document to save to database */
    const document = {
        first_name:  req.body.first_name,
        last_name:   req.body.last_name,
        email:       req.body.email,
        password:    encpassword,
        dob:         req.body.dob,
        gender:      req.body.gender
    };
console.log(document);
    /** Update user info */
    User.findByIdAndUpdate({_id: id}, document, {new: true}, function(err, user) {
        if (err)  res.send(err);

        res.json(user);
    });
};

exports.delete = function(req, res) {
    let id = req.params.userId;
    User.remove({
        _id:  mongoose.Types.ObjectId(id)
    }, function(err, user) {
        if (err)
            res.send(err);

        res.json({ message: 'User successfully deleted' });
    });
};
