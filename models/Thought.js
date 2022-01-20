const { Schema, model, Types } = ('mongoose');
const moment = require('moment');

// ReactionSchema
const ReactionSchema = new Schema({
    // set custom Id
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM Do, YYYY [at] hh:mm a')
    },
    toJson: {
        getters: true
    }
    }
);

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM Do, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    // use reaction schema to validate data
    reactions:  [ReactionSchema]
    },
    {
    toJson: {
        virtuals: true,
        getters: true
    },
    id: false
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;