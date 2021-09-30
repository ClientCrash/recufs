const i = require("./index.js"); 
function testf(f){
    
	console.log(f);
	if(f=="README.md"){
		console.log("success");
	}else{
		throw "TEST FAILED!";
	}
}
i("*.md",testf);
