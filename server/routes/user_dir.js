var express = require('express');
var router = express.Router();
var mongoose =  require('mongoose');


//get all users details

router.get('/users',function(req,res,next){
    db.users.find(function(err,items){
        if(err){
            return next(err);
        }
        res.json(users);
    });
});

//get single item

router.get('/user/:id',function(req,res,next){
    db.users.findOne({_id: mongojs.ObjectId(req.params.id) }, function(err, user){
        if(err){
            return next(err);
        }
        res.json(user);
    });
});


//save or add user

router.post('/user',function(req,res,next){
    var item = req.body;
    if(!user.name || !user.email){
        res.status(400);
        res.json({
            "error": "Invalid Input"
        });
    }
    else{
        db.users.save(user, function(err,item){
            if(err){
                return next(err);
            }
            res.json(item);
        });
    }
});

//delete user

router.delete('/user/:id',function(req,res,next){
    db.items.remove({_id: mongojs.ObjectId(req.params.id)}, function(err,user){
        if(err){
            return next(err);
        }
        res.json(user);
    });
});


//update user

router.put('/user/:id', function(req,res,next){
    var user = req.body;
    var updatedUser = {};

    //data validation
    if(user.name){
        updatedUser.name = user.user_name;
    }
    if(user.email){
        updatedUser.name = user.email;
    }
    if(user.address){
        updatedUser.name = user.address;
    }
    if(user.contact){
        updatedUser.name = user.contact;
    }

    //update the data into database

    if(!updatedUser){
        res.status(400);
        res.json({
            "error":"Invalid User Data"
        });
    }
    else{
        db.users.update({_id: mongojs.ObjectId(req.params.id)},updatedUser,{}, function(err, user){
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }
});

module.exports = router;









