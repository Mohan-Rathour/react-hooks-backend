let express = require('express');
let app = express();
let port = process.env.PORT || 8080;
let routes = require('./routes/routes');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
routes(app);



app.listen(port, function(){
    console.log("Order Application is running on port :" + port);
})



