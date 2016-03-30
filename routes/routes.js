var chgpass = require('config/chgpass');
var register = require('config/register');
var login = require('config/login');
var room = require('config/room');

module.exports = function(app) {


    app.get('/', function(req, res) {

        res.end("Node-Android-Project");
    });

    app.post('/login', function(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        var role = role;

        login.login(email, password, function(found) {
            console.log(found);
            res.json(found);
        });
    });

    app.post('/register', function(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        var username = req.body.username;
        var role = req.body.role;

        register.register(email, password, username, role, function(found) {
            console.log(found);
            res.json(found);
        });
    });

    app.post('/api/chgpass', function(req, res) {
        var id = req.body.id;
        var opass = req.body.oldpass;
        var npass = req.body.newpass;

        chgpass.cpass(id, opass, npass, function(found) {
            console.log(found);
            res.json(found);
        });
    });

    app.post('/api/resetpass', function(req, res) {

        var email = req.body.email;

        chgpass.respass_init(email, function(found) {
            console.log(found);
            res.json(found);
        });
    });

    app.post('/api/resetpass/chg', function(req, res) {
        var email = req.body.email;
        var code = req.body.code;
        var npass = req.body.newpass;

        chgpass.respass_chg(email, code, npass, function(found) {
            console.log(found);
            res.json(found);

        });
    });
    
    app.post('/api/createroom', function(req, res) {
        var username = req.body.username;
        var topic = req.body.topic;
        var rate = req.body.rate;

        room.create_room(username, topic, rate, function(found) {
            console.log(found);
            res.json(found);
        });
    });
    
    app.post('/api/deleteroom', function(req, res) {
        var username = req.body.username;

        room.delete_room(username, function(found) {
            console.log(found);
            res.json(found);
        });
    });
    
    app.post('/api/getroomlist', function(req, res) {
        var topic = req.body.topic;

        room.get_rooms_by_topic(topic, function(found) {
            console.log(found);
            res.json(found);
        });
    });
};

