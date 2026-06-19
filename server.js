const express=require('express');
const app=express();
const port=process.env.PORT || 6700;

// to tell app,where to find static files like html,css,js
app.use(express.static("frontend"));

app.listen(port,function(){
    console.log("Server is running on http://localhost:" + port);
});