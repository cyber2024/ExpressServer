var path = process.cwd();
console.log(path);
var router = function(app){
  app.route('/')
    .get(function(req,res){
      res.sendFile(path + '/public/index.html');
    });
}

module.exports = router;
