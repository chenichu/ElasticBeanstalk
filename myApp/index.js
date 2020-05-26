const express = require('express');
const app = express();
var fs = require('fs');
const uploadsDir = '/local/uploads';

//get the router
const userRouter =require('./routes/user.route');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static('public')); // Not used

//testing file placement using fs appendFile on efs mount /local/uploads dir
app.get('/testPlacingFile', function(req,res){
    fs.appendFile(uploadsDir+'/mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      }); 
    return res.send("Test file created in "+uploadsDir);
})

//testing file retrieval using fs readFile on efs mount /local/uploads dir
app.get('/testFileRetrieval',function(req,res){
    fs.readFile(uploadsDir+'/mynewfile1.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
})

app.get('/', function(req,res) {
    return res.send("hello from my app express server!")
})
//if end point is /users/, use the router.
app.use('/users', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    debug('Server is up and running on port ', port);
})