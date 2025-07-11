const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use body-parser to parse URL-encoded bodies (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for posts
// In a real application, this would be replaced with a database
let posts = [];
let postIdCounter = 0; // Simple counter for unique IDs

// Helper function to generate a unique ID
function generateUniqueId() {
    return ++postIdCounter;
}

// Home Route - Displays all posts
app.get('/', (req, res) => {
    res.render('home', { posts: posts });
});

// Compose Route - Displays the form to create a new post
app.get('/compose', (req, res) => {
    res.render('compose');
});

// Compose Route - Handles the submission of a new post
app.post('/compose', (req, res) => {
    const post = {
        id: generateUniqueId(),
        title: req.body.postTitle,
        content: req.body.postContent
    };
    posts.push(post);
    res.redirect('/');
});

// Post Route - Displays a single post
app.get('/posts/:id', (req, res) => {
    const requestedPostId = parseInt(req.params.id);
    const post = posts.find(p => p.id === requestedPostId);

    if (post) {
        res.render('post', { post: post });
    } else {
        res.status(404).send('Post not found');
    }
});

// Edit Route - Displays the form to edit an existing post
app.get('/edit/:id', (req, res) => {
    const requestedPostId = parseInt(req.params.id);
    const post = posts.find(p => p.id === requestedPostId);

    if (post) {
        res.render('edit', { post: post });
    } else {
        res.status(404).send('Post not found');
    }
});

// Edit Route - Handles the submission of an edited post
app.post('/edit/:id', (req, res) => {
    const requestedPostId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === requestedPostId);

    if (postIndex !== -1) {
        posts[postIndex].title = req.body.postTitle;
        posts[postIndex].content = req.body.postContent;
        res.redirect(`/posts/${requestedPostId}`);
    } else {
        res.status(404).send('Post not found');
    }
});

// Delete Route - Handles the deletion of a post
app.post('/delete/:id', (req, res) => {
    const requestedPostId = parseInt(req.params.id);
    posts = posts.filter(p => p.id !== requestedPostId);
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});