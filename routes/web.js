module.exports = function(app) {
  // marketing frontend
  app.get('/', function (req, res) {
    res.sendfile('public/index.html');
  });

  // develop and manage ripples frontend
  app.get('/admin', function (req, res) {
    res.sendfile('public/admin.html');
  });
};