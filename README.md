# recufs
## A package for performing recursive file system actions.


`const fileop = require('recufs')  `   
select by using * or **/*.js or whatever you want to search for.  
`function action(file){console.log(file)}` do whatever you want with the file in this function   
`const result = fileop("*.js",action)`  
the return of your function will be appended to the result array, for each file.  
