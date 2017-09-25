
///////// exercise 2 /////////
/*var sum =0;
for(var i=2;i<process.argv.length;i++){
    sum = sum + Number(process.argv[i]);
}

console.log(sum);
*/

//////////////////////////////////////

//////// exercise 3 ///////////
/*
var fs = require('fs')
var buff=(fs.readFileSync('RedmineSchedule.txt')).toString()
var delimiter = buff.split("\n")
var count =0;
for(var i=0;i<delimiter.length;i++){
    //ar read = buff.split("\n")
    count ++;
}

console.log(""+count);

//console.log(buff)
*/
///// excercise 3 another way ////////
/*
var fs = require('fs')
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)
*/

///// exercise 4 ///////
//first take a look about the callbacks in node.js//

// here is an example about how to do a calllback and read a number
//from a textfile stored at 'number.txt'
/*
var fs = require('fs') // require is a special function provided by node
var myNumber = undefined // we don't know what the number is yet since it is stored in a file

function addOne() {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
  })
}

addOne()

console.log(myNumber) // logs out undefined -- this line gets run before readFile is done
*/

// my answer to the excercise 4 //
/*
var fs = require('fs')
var lines = undefined

function read(){
    fs.readFile('RedmineSchedule.txt','utf8',function callback(err, data){
        if(err){
            console.log(err)
        }else{
            lines = data.split('\n').length - 1
            console.log(lines);
        }
        
    })
}

read()
*/
/*
// exercise 5 //
var fs = require('fs')
var path = require('path')
var dir = process.argv[2].toString()

function readDir(){
fs.readdir(dir,function callback(err,data){
    if(err){
        return console.log(err)
    }else{
        for(var i=0;i<data.length;i++){
            var filteredFile = path.extname(data[i])
            if(filteredFile === ".md"){
                console.log(data[i])
            }
        }
    }
})
}

readDir();
*/

/*
// exercise 6 //
var mymodule = require('./filtered_files_module.js')

var dir = process.argv[2].toString() // this direction has given by node test
                                    // and it contains the path of the files with .md
var ext = process.argv[3].toString() // this direction has given by node test
                                    // and it contains: md


// call the file module: "filtered_files_module.js"
mymodule(dir,ext,function (err,data){
    if(err){
        return console.error('There was an error: ',err)
    }

    data.forEach(function (file){
        console.log(file)
    })
})
///////////////////////

 */

 // exercise 7 //
 /*
var http = require('http')

var url= process.argv[2].toString()
http.get(url,function(response){
    response.setEncoding("utf8")
    response.on("data",function (data){
        console.log(data)
    })
})
*/
///////////

//excercise 8//
/*
var http = require('http')
var bl = require('bl')

var url= process.argv[2].toString()
//console.log(url)
http.get(url,function(response){
    //response.setEncoding("utf8")
    response.pipe(bl(function(err,data){
        if(err){
          return console.error("There was an error: "+err) 
        }else{
            console.log(data.length)
            console.log(data.toString())
        }
        
    }))
      
})
*/
// the solution already work//
/*
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults(){
    for(var i =0; i < 3; i++){
        console.log(results[i])
    }
}

function httpGet (index){
    http.get(process.argv[2 + index],function (response) {
        response.pipe(bl(function (err,data) {
            if (err) {
                return console.error(err)
            }

            results[index] = data.toString()
            count++

            if(count === 3) {
                printResults()
            }
        }))
    })
}

for(var i = 0; i < 3; i ++){
    httpGet(i)
}
*/
// my solution:
/*
var http = require('http')
var bl = require('bl')
var urls = process.argv[2].toString()

for(var i =2;i<5;i++){
    urls = process.argv[i].toString()
    http.get(urls,function(response){
        response.pipe(bl(function(err,data){
            if(err){
                return console.error("There was an error: "+err)
            }else{
                console.log(data.toString())
            }
        }))
        
    })

}
*/
/*
    var url2 = process.argv[3].toString()

    http.get(url2,function(response){
        response.pipe(bl(function(err,data){
            if(err){
                return console.error("There was an error: "+err)
            }else{
                console.log(data.toString())
            }
        }))
        
    })
    */

/*
var net =  require('net')
function zeroFill (i){
    return (i < 10 ? '0' : '') + i
}
    
function now() {
    var d = new Date()
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes()) 
}   

var server = net.createServer(function (socket){
    socket.end(now() + '\n')
})
server.listen(Number(process.argv[2]))

*/
/*
//exercise 11 //
var http = require('http')
var fs = require('fs')
var location = process.argv[3].toString()
var server = http.createServer(function (req, res) {
    var readStream = fs.createReadStream(location);
    
      // This will wait until we know the readable stream is actually valid before piping
      readStream.on('open', function () {
        // This just pipes the read stream to the response object (which goes to the client)
        readStream.pipe(res);
      });
    
      // This catches any errors that happen while creating the readable stream (usually invalid names)
      readStream.on('error', function(err) {
        res.end(err);
      });
})
server.listen(Number(process.argv[2]))


//

*/
/*

// exercise 12 //
var map = require('through2-map'),
http = require('http'),
port = process.argv[2];


var upcase = function (chunk) {

return chunk.toString().toUpperCase();
};


var connect = function (req, res) {

if (req.method === 'POST') {
    return req.pipe(map(upcase)).pipe(res);
}
};

http.createServer(connect).listen(port);


*/



