module.exports = function(app) {
    // marketing frontend
    app.get('/', function (req, res) {
        res.sendfile('public/index.html');
    });

    // develop and manage ripples frontend
    app.get('/develop', function (req, res) {
        res.sendfile('public/develop.html');
    });
};