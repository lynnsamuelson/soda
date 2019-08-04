const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


router.get('/money',function(req,res){
    res.sendFile(path.join(__dirname+'/money.js'));
    //__dirname : It will resolve to your project folder.
  });

  router.get('/vue',function(req,res){
    res.sendFile(path.join(__dirname+'/node_modules/vue/dist/vue.js'));
    //__dirname : It will resolve to your project folder.
  });

  router.get('/moneyStyle',function(req,res){
    res.sendFile(path.join(__dirname+'/money.css'));
    //__dirname : It will resolve to your project folder.
  });

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');