var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/static')); 
app.engine('html', require('ejs').renderFile);
app.get('/tableView', function(req, res) {
    res.render("../static/view/tableView.html");
});
app.listen(3000);