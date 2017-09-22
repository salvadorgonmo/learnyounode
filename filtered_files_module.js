
// excercise 6///
//modulo//
var fs = require('fs')
var path = require('path')
//var dir = process.argv[2].toString()

//module to export since another file
module.exports=function (dirName,extension,callback){ // three arguments that has been passed by the program.js file
fs.readdir(dirName,function (err,data){
    if(err){
        return callback(err)
    }else{
        var result = []
        for(var i=0;i<data.length;i++){
            var filteredFile = path.extname(data[i])
            if(filteredFile === "."+extension){
                result.push(data[i])
            }
        }
       return callback(null,result)
    }
})
}

//readDir();


