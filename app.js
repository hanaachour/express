const express=require("express");
const app=express();
const path=require("path");
const shopRoutes=require("./routes/shop");
app.use((req,res,next)=>{
    const time=new Date();
    const day=time.getDay();
    const hour=time.getHours();
if (day>=0 && day<=5 && hour>=9 && hour<=17){
    next();
}
else{
    res.sendFile(path.join(__dirname,"./","Pages","closed.html"));
}
});
app.use(shopRoutes);
app.get("/Pages/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Pages/style.css"))
})


app.listen(3009,()=>{
    console.log("server running")
}); 