const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date(),
  });
  
});

// Delete Post
async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://antonia:antonia123@cluster0-jjv44.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
  );

  return client.db().collection('post');
}

module.exports = router;
