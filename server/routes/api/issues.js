const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();
const mongodb = require('mongodb');
const clientPromise = MongoClient.connect(
    process.env.MONGODB_CONNECTION_STRING,
    { useUnifiedTopology: true },
);

//Get Posts
router.get('/', async (request, response) => {
    const issues = await loadIssuesCollection();
    response.send(await issues.find({}).toArray());
});


// Add Post
router.post('/', async (request, response) => {
    const posts = await loadIssuesCollection();
    const insertResult = await posts.insertOne({
        text: request.body.text,
        owner: request.body.user,
        name: request.body.name,
        createdAt: new Date(),
        description: request.body.description,
        status: request.body.status,
    });
    const post = insertResult.ops[0];
    response.status(201).json(post);
});

//Delete Post
router.delete('/:id', async (request, response) => {
    const posts = await loadIssuesCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(request.params.id)});
    response.status(200).send();
});

//Get One Issue
router.get('/:id', async (request, response) => {
    const issues = await loadIssuesCollection();
    var issueId = new mongodb.ObjectId(request.params.id);
    response.send(
        await issues.findOne({
            '_id': issueId
        })
    );
});

async function loadIssuesCollection() {
    const client = await clientPromise;
    return client.db('tracker')
        .collection('tickets');
}

module.exports = router;
