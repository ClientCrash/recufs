const glob = require('glob');
function recursiveOperation(selector,action){
    ret = [];
glob(selector,null,function(er,files){
    if(er!=undefined){
        ret[0]=er;
    }
    for(file in files){
        ret.push(action(files));
    }
})
}
module.exports = recursiveOperation;