const express=require("express");
var router=express.Router();
var pool=require('../pool.js');
//用户名查询
router.get('/checkUname',(req,res)=>{
    var uname=req.query.uname;
    if(!uname){
        res.send("用户名字不能为空");
        return;
    }
    var sql="select * from tldc_user where uname=?";
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("0");
        }else{
            res.send("1");
        }
    });
});

//联系方式查询
router.get('/checkPhone',(req,res)=>{
    var phone=req.query.phone;
    if(!phone){
        res.send("联系方式不能为空");
        return;
    }
    var sql="select * from tldc_user where phone=?";
    pool.query(sql,[phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("联系方式已存在");
        }else{
            res.send("联系方式可用");
        }
    });
});

router.post('/register',(req,res)=>{
    console.log(req.body);
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var phone=req.body.phone;
    var rname=req.body.rname;
    var idcard=req.body.idcard;
    if(!uname){
        res.send("用户的登陆名称不能为空");
        return;
    }
    if(!upwd){
        res.send("用户的密码不能为空");
        return;
    }
    if(!rname){
        res.send("用户的不能为空");
        return;
    }
    if(!idcard){
        res.send("用户的不能为空");
        return;
    }
    if(!phone){
        res.send("用户的电话不能为空");
        return;
    }
    var sql="insert into tldc_user (uname,upwd,phone,rname,idcard) value(?,?,?,?,?)";
    pool.query(sql,[uname,upwd,phone,rname,idcard],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send("<script>alert('注册成功！')</script>");
        }else{
            res.send("注册失败");
        }
    });
});
//用户登陆
router.post('/login',(req,res)=>{
    //获取用户名称
    var $uname=req.body.uname;
    if(!$uname){
        res.send({code:401,msg:"用户名不存在"});
        return;
    }
    //获取用户密码
    var $upwd=req.body.upwd;
    if(!$upwd){
        res.send({code:301,msg:"用户密码不存在"});
        return;
    }
    var sql="select * from tldc_user where uname=? and upwd=?"
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("登陆成功");
        }else{
            res.send("用户名或密码错误");
        }
    });
});
//导出
module.exports=router;