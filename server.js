const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const session = require('express-session');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true in production with HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Middleware to make session available to all views
app.use((req, res, next) => {
  res.locals.isAdmin = req.session && req.session.isAdmin;
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shieldhub')
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Create uploads directory if it doesn't exist


// Import Routes
const articleRoutes = require('./routes/articles');
const apiRoutes = require('./routes/api');
const adminRoutes = require('./routes/admin');

// Use Routes
app.use('/articles', articleRoutes);
app.use('/api', apiRoutes);
app.use('/admin', adminRoutes);

// Home Route - Load daily content from database (automatically changes on each refresh)
// Home Route - Load Cyber Hero Resource from database

app.get('/', async (req, res) => {
  try {
    const Resource = require('./models/Resource');
    let resource = await Resource.findOne();

    // Provide default if not found
    if (!resource) {
      resource = {
        title: 'Become a Cyber Hero',
        url: 'https://www.cisa.gov/cyber-essentials',
        description: 'Essential guide for everyone to stay safe online.\nHelpful for Both tech and non-tech'
      };
    }

    // Render page
    res.render('index', {
      title: 'ShieldHub - Home',
      resource: resource
    });
  } catch (error) {
    console.error('Error loading home page:', error);
    res.render('index', {
      title: 'ShieldHub - Home',
      resource: {
        title: 'Become a Cyber Hero',
        url: 'https://www.cisa.gov/cyber-essentials',
        description: 'Essential guide for everyone to stay safe online.\nHelpful for Both tech and non-tech'
      }
    });
  }
});

// Phishing Detection Route
app.get('/phishing-detective', (req, res) => {
  res.render('phishing-detective', { title: 'Phishing Detective' });
});

// Vulnerability Scanner Route
app.get('/vulnerability-scanner', (req, res) => {
  res.render('vulnerability-scanner', { title: 'Vulnerability Scanner' });
});

// Password Strength Route
app.get('/password-strength', (req, res) => {
  res.render('password-strength', { title: 'Password Strength Checker' });
});

// Cybercrime Articles Route
app.get('/cybersecurity-article', async (req, res) => {
  try {
    const Article = require('./models/Article');
    const articles = await Article.find().sort({ createdAt: -1 });
    res.render('cybersecurity-article', {
      title: 'Cybersecurity Articles',
      articles: articles
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.render('cybersecurity-article', {
      title: 'Cybersecurity Articles',
      articles: []
    });
  }
});

// About Route
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});


// Steganography Tool Route
app.get('/steganography', (req, res) => {
  res.render('steganography', {
    title: 'Steganography Tool',
    isAdmin: req.session.isAdmin || false
  });
});

// Search Route
app.get('/search', async (req, res) => {
  const query = req.query.q || '';

  const Article = require('./models/Article');

  let results = [];
  let searchType = '';

  if (query.toLowerCase().includes('phishing')) {
    searchType = 'phishing-detective';
  } else if (query.toLowerCase().includes('vulnerability')) {
    searchType = 'vulnerability-scanner';
  } else if (query.toLowerCase().includes('password')) {
    searchType = 'password-strength';
  } else if (query.toLowerCase().includes('steganography') || query.toLowerCase().includes('hide') || query.toLowerCase().includes('secret')) {
    searchType = 'steganography';
  } else if (query.toLowerCase().includes('cyber') || query.toLowerCase().includes('article')) {
    try {
      results = await Article.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } }
        ]
      }).sort({ createdAt: -1 });
      searchType = 'cybersecurity-article';
    } catch (error) {
      console.error('Search error:', error);
    }
  }


  res.render('search-results', {
    title: 'Search Results',
    query: query,
    results: results,
    searchType: searchType
  });
});

// API endpoint to get quiz questions
app.get('/api/quiz', async (req, res) => {
  try {
    const Quiz = require('./models/Quiz');
    const questions = await Quiz.find().select('question options correctAnswer');

    // Transform data for frontend
    const formattedQuestions = questions.map(q => ({
      question: q.question,
      options: q.options,
      correct: q.correctAnswer
    }));

    res.json(formattedQuestions);
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    res.status(500).json({ error: 'Error fetching questions' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

