const express=require("express");
const router =express.Router();
const path=require("path");
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","Pages","home.html"))
});

router.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","Pages","contactus.html"))
});

router.get("/services",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","Pages","services.html"))
});
module.exports=router;