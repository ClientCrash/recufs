const glob = require("glob");
module.exports = function recursiveOperation(selector,action){
	const returnarray = [];
	glob(selector,null,function(er,files){
		if(er!=undefined){
			console.log(er);}
		for(let file in files){
			returnarray.push(action(files[file]));
		}
	});
};

