const {Schema , model } = require('mongoose');
const moment = require('moment')

// reaction schema
const reactionSchema = require('./Reaction')

// thought schema
const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
       },
       createdAt:{
        type: Date,
        default: Date.now,
        get:createdAtValue => moment(createdAtValue).format("MMM DD, YYYY [at] hh:mm a"),

       },
       username:{
        type: String,
        required: true,
       },
       reactions: [reactionSchema],
    },
    {
        toJSON:{
            getters: true,
        },
        id: false,
    }

)

thoughtSchema.virtual("reactionCount")
.get(function(){
    return this.reactions.length;
})

// creating user model using UserSchema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;