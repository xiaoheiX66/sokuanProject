let express = require('express')
let { createProxyMiddleware } = require('http-proxy-middleware')
let app = express();

app.use(express.static('./'));


app.use(
    "/api"
    ,
    createProxyMiddleware({
    target:"https://www.vvic.com/",
    changeOrigin:true,
    pathRewrite:{
        "^/api":"/",
    },
}))

// app.all("*",function(req,res,next){
//     res.header("Access-Control-Allow-Origin","*");
//     next();
// });

 app.listen(8088, () => {
                console.log('8088 is listning....');
            })