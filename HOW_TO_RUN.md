# How to Run ShieldHub Website

## Prerequisites

1. **Node.js** - Make sure you have Node.js installed (v14 or higher)
2. **MongoDB** - MongoDB must be running on your computer

## Step-by-Step Instructions

### Step 1: Start MongoDB
Make sure MongoDB is running on your computer:
- **Windows**: Open MongoDB as a service or run `mongod` in a terminal
- MongoDB should be running on: `mongodb://localhost:27017`

### Step 2: Install Dependencies (Already Done!)
```bash
npm install
```

### Step 3: Start the Server
```bash
npm start
```

Or for development mode (auto-restart on changes):
```bash
npm run dev
```

### Step 4: Open in Browser
Once the server starts, you'll see:
```
Server is running on http://localhost:3000
MongoDB Connected Successfully
```

Open your browser and go to:
```
http://localhost:3000
```

## Troubleshooting

### If MongoDB is not running:
**Error**: `MongoDB Connection Error`

**Solution**: 
1. Start MongoDB service on Windows
2. Or install MongoDB and start it manually
3. Make sure it's running on port 27017

### If Port 3000 is already in use:
**Error**: `Port 3000 is already in use`

**Solution**: 
- Change the PORT in `server.js` (line 10) to another port like 3001
- Then access: `http://localhost:3001`

### To Stop the Server:
Press `Ctrl + C` in the terminal

## Quick Commands

```bash
# Install dependencies
npm install

# Start server
npm start

# Start in development mode (auto-restart)
npm run dev
```

## Website Features

Once running, you can access:
- **Home**: http://localhost:3000
- **Phishing Detective**: http://localhost:3000/phishing-detective
- **Vulnerability Scanner**: http://localhost:3000/vulnerability-scanner
- **Password Strength**: http://localhost:3000/password-strength
- **Cybersecurity Articles**: http://localhost:3000/cybersecurity-article


