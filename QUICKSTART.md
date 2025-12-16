# Quick Start Guide

## Prerequisites

1. **Node.js** (v14 or higher)
2. **MongoDB** installed and running on localhost:27017

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Default connection: `mongodb://localhost:27017`

3. **Start the Server**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to: `http://localhost:3000`

## Features Overview

### 1. Phishing Detective
- URL: `/phishing-detective`
- Analyze emails and URLs for phishing attempts
- Provides risk score and detected patterns

### 2. Vulnerability Scanner
- URL: `/vulnerability-scanner`
- Scan websites for security vulnerabilities
- Checks for HTTPS, sensitive endpoints, etc.

### 3. Password Strength Checker
- URL: `/password-strength`
- Check password strength
- Get recommendations for improvement

### 4. Cybersecurity Articles
- URL: `/cybersecurity-article`
- View all articles
- Create new articles with image upload
- Like and comment on articles
- Click "Visit Website" to redirect to article URL

## Creating an Article

1. Go to `/cybersecurity-article`
2. Click "Create New Article"
3. Fill in:
   - Title (required)
   - Description (required)
   - Website URL (required)
   - Image (optional, max 5MB)
4. Click "Create Article"

## Search Functionality

Use the navbar search to find:
- "phishing detection" → Phishing Detective
- "vulnerability scanner" → Vulnerability Scanner
- "password strength checker" → Password Strength Checker
- "cyber crime article" → Cybersecurity Articles

## Database

- Database Name: `shieldhub`
- Collection: `articles`
- All data stored locally in MongoDB

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running: `mongodb://localhost:27017`
- Check if MongoDB service is started

### Port Already in Use
- Change PORT in server.js or use environment variable
- Default port: 3000

### Image Upload Issues
- Check `public/uploads/` directory exists
- Ensure file size is under 5MB
- Supported formats: JPG, PNG, GIF, WEBP


