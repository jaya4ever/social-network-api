const { User, Thought} = require('../models');

module.exports = {
    getThought(req, res){
        Thought.find({}).then((thought) => res.json(thought))
        .catch((err)=> res.status(500).json(err));
    },
    // get single thought
     getSingleThought(req, res){
        Thought.findOne({_id: req.params.thoughtId})
        .select("-__v")
        .then((thought)=> 
        !thought
        ? res.status(404).json({message: "No thought find with this id"})
         : res.json(thought)
         )

         .catch((err)=> res.status(500).json(err));
    },
    // create a thought and push the created thought's _id to the associated user's thoughts array field
    createThought(req, res){
        Thought.create(req.body)
        .then(({ _id })=>{
            return User.findOneAndUpdate(
                { _id: req.body.userId},
                { $push: { thoughts: -id}},
                {new: true}
            );

        })
        .then((thought)=>
        !thought
        ? res.status(404).json({message:"No user find with this id"})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // update a thought
    updateThought(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $set: req.body},
            {runValidators: true, New: true}
        )
        .then((user) => 
        !user
        ? res.status(404).json({message: "No thought find with this id"})
        :res.json(user)
        )
        .catch((err)=> res.status(500).json(err));

    },

    // delete a thought
    deleteThought(req, res){
        Thought.findOneAndDelete({ _id: req.params.thoughtId})
        .then((thought)=>
        !thought
        ? res.status(404).json({message: "No thought find with this id"})
        : User.findOneAndUpdate(
            { thoughts: req.params.thoughtId},
            { $pull: { thoughts: req.params.thoughtId}},
            {new : true}
        )
        )
        .then((user)=>
        !user
        ? res.status(404).json({message: "Thought has been deleted but not any user found"})
        : res.json({message: "Thought successfully deleted"})
        )
        .catch((err) => res.status(500).json(err));
    },

    // creating reaction
    createReaction (req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        )

        .then((thought)=>
        !thought
        ? res.status(404).json({message:"No thought friend with id"})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // delete reaction 
    deleteReaction(req ,res){
        Thought.findOneAndUpdate(
            {
                _id: req.params.thoughtId
            },
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true}
        )
        .then((thought)=>
        !thought
        ? res.status(404).json({message:"No thought find with this id"})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },
};