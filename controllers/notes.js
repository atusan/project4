const Note = require('../models/note');


module.exports = {
    create,
    index
}


// async function create(req,res){
//     console.log(req.body, req.user, "<req.user is being assinged in the config/auth middleware");
    
//     req.body.user = req.user_id
//     const note = await Note.create(req.body)
//     res.status(201).json(note);
// }
async function create(req, res){
    console.log('create in controller firing')
    // confirm we access to our multipart/formdata request
    console.log(req.body, req.file, req.user, "<req.user is being assinged in the config/auth middleware");

    try {
        const note = await Note.create({
            title: req.body.title, 
            location: req.body.location, 
            description: req.body.description, 
            date: req.body.date, 
            user: req.user
        })
            
        const populatedPost = await note.populate('user').execPopulate();
        console.log(populatedPost, 'this is populatedPost in creae')
        res.status(201).json({post: populatedPost})
    } catch(err){
        console.log(err)
        res.json({data: err})
    }
 }

async function index(req, res){
    try {
        const notes = await Note.find({}).populate('user').exec()
        console.log(notes ,'this is notes in index function')
        res.status(200).json({notes})
    } catch(err){
        res.json(err)
    }
}


