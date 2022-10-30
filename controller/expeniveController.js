
const Tracker=require('../models/tracker_logic');

exports.getUserDetails=async(req,res,next)=>{
    const trackerList=await Tracker.findAll();    
    res.status(201).json({allExpense: trackerList});
}

exports.postAddedDetails=async(req,res,next)=>{
    try{       
    const amount=req.body.amount;
    const description=req.body.description;
    const category=req.body.category;
    const data=await Tracker.create({amount:amount,category:category,description:description});
    res.status(201).json({newTrackerDetails:data});
    }catch(err){
        res.status(500).json({error:err});
    }
}

exports.deleteUser=async(req,res,next)=>{
    const proId=req.params.id;
    await Tracker.destroy({where:{id:proId}});
    res.sendStatus(200);
}

exports.editUser=async(req,res,next)=>{
    try{       
        const proId=req.params.id;
        console.log(proId)
       const editDetails= await Tracker.findAll({where: { id:proId}});       
        res.status(201).json({idDetails: editDetails}); 
        
    }catch(err){
        console.log(err);
    }    
}

exports.updateUser=async(req,res,next)=>{
    try{
        console.log('Upadting')
        const proId=req.params.id;
        const amount=req.body.amount;
        const description=req.body.description;
        const category=req.body.emacategoryil;
        await Tracker.update({amount:amount,category:category,description:description},{where:{id:proId}});
        res.status(201);
       
    }catch(err){
        res.status(500).json({error:err});
    }

}