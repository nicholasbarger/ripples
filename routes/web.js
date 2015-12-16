module.exports = function(app) {
  // marketing frontend
  app.get('/', function (req, res) {
    res.sendfile('public/marketing/index.html');
  });

  // develop and manage ripples frontend
  app.get('/app', function (req, res) {
    res.sendfile('public/app/layout/index.html');
  });
};