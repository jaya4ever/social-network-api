const {Schema , model, Types} = require('mongoose');
const moment = require('moment')

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
            virtuals: true,
            getters: true,
        },
        id: false,
    }

)

// reaction Schema
const reactionSchema = new Schema (
    {
        reactionId:{
            type: Schema.Types.ObjectId,
            defalut: () => new Types.ObjectId(),
        },
        reactionBody:{
            type: String,
            required: true,
            maxlength: 280,
        },
        username:{
            type: String,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get:createdAtValue => moment(createdAtValue).format("MMM DD, YYYY [at] hh:mm a"),
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
)

// total count of friends
thoughtSchema.virtual;("reactionCount").get(function(){
    return this.reactions.length;
})

// creating user model using UserSchema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;