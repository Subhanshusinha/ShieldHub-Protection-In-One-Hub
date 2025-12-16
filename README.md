# ShieldHub - Cybersecurity Platform

A comprehensive web application for cybersecurity tools, news, and resources built with Node.js, Express.js, MongoDB, and EJS.

## Features

1. **Phishing Detective** - Analyze suspicious emails and URLs to detect phishing attempts
2. **Vulnerability Scanner** - Scan websites for potential security vulnerabilities
3. **Password Strength Checker** - Check password strength and get security recommendations
4. **Cybersecurity Articles** - Create, view, and manage cybersecurity articles with images, likes, and comments

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (localhost)
- **View Engine**: EJS
- **File Upload**: Multer
- **Styling**: Custom CSS

## Installation

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running on localhost:27017

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
├── models/
│   └── Article.js          # MongoDB article model
├── routes/
│   ├── articles.js         # Article routes
│   └── api.js              # API endpoints
├── views/
│   ├── partials/
│   │   ├── header.ejs     # Header partial
│   │   └── footer.ejs      # Footer partial
│   ├── index.ejs           # Home page
│   ├── phishing-detective.ejs
│   ├── vulnerability-scanner.ejs
│   ├── password-strength.ejs
│   ├── cybersecurity-article.ejs
│   ├── article-detail.ejs
│   ├── article-form.ejs
│   ├── search-results.ejs
│   └── about.ejs
├── public/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── main.js         # Client-side JavaScript
│   └── uploads/             # Uploaded images
├── server.js                # Main server file
└── package.json
```

## API Endpoints

### Phishing Detection
- `POST /api/phishing/detect` - Analyze email/URL for phishing

### Vulnerability Scanner
- `POST /api/vulnerability/scan` - Scan URL for vulnerabilities

### Password Strength
- `POST /api/password/check` - Check password strength

### Articles
- `GET /articles` - Get all articles
- `GET /articles/new` - Create article form
- `POST /articles` - Create new article
- `GET /articles/:id` - Get article details
- `POST /api/articles/:id/like` - Like an article
- `POST /api/articles/:id/comment` - Add comment to article

## Search Functionality

The navbar search supports:
- "phishing detection" → Redirects to Phishing Detective
- "vulnerability scanner" → Redirects to Vulnerability Scanner
- "password strength checker" → Redirects to Password Strength Checker
- "cyber crime article" or "cybersecurity article" → Shows article search results

## Database

MongoDB database: `shieldhub`
Collections:
- `articles` - Stores article data with comments and likes

## Notes

- Images are stored in `public/uploads/` directory
- Maximum file size: 5MB
- Supported image formats: JPG, PNG, GIF, WEBP
- All data is stored in localhost MongoDB


