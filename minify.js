const fs=require("fs");
const currentcodename="anne";
const path=__dirname+"/dist";
console.log("UTF-8 Minify\n\tCodename: " + currentcodename);
fs.readdir(path, function (err, files) {
	if(err){
		console.warn("ERROR IN DIRLIST");
	}
	files.forEach(function (file) {
        fs.readFile(path+"/"+file, {encoding: 'utf-8'}, function(err,data){
        	const towrire=data.split("\n").join("");
        	fs.writeFile(__dirname+"/bin/"+file,towrire,(errss)=>{
        		if(!errss){
        			console.log("Complete: "+file);
        		}else{
        			console.error("Error being write File: "+ file);
        		}
        	});
        });
    });
});
