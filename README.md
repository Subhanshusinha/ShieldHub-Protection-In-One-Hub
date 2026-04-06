# 🛡️ ShieldHub - Ultimate Cybersecurity Protection Platform

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-v18.0%2B-green.svg)
![Express.js](https://img.shields.io/badge/Express.js-v4.18-lightgrey.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-v6.0-green.svg)

Click On Link - https://shieldhub.onrender.com/

<img width="1532" height="896" alt="Screenshot 2025-12-17 014438" src="https://github.com/user-attachments/assets/7c682d0c-c608-4d59-aecf-75f136220450" />

**ShieldHub** is a comprehensive, all-in-one cybersecurity platform designed to empower users with essential tools for digital protection. From detecting phishing attempts to scanning vulnerabilities and educating users through curated articles, ShieldHub is your central command for staying safe online.

## 🚀 Key Features

### 🔍 Security Tools
- **Phishing Detective**: Advanced analysis tool to detect suspicious emails and URLs.
- **Vulnerability Scanner**: Scan websites to identify potential security loopholes and risks.
- **Password Strength Checker**: Evaluate your password's resilience against brute-force attacks and get recommendations.
- **Steganography Tool**: Securely hide secret messages inside ordinary images and reveal them later.

### 📰 Knowledge Base
- **Cybersecurity Articles**: Browsable library of articles to stay updated on the latest threats and protection strategies.
- **Latest News Hub**: Real-time rotating news feed keeping you informed about the cyber world.
- **Interactive Community**: Like and comment on articles to engage with the security community.

### ⚙️ Admin Management
- **Dashboard**: Centralized admin panel to manage content.
- **News Manager**: Add, edit, and manage the "Latest News" ticker.
- **Article Management**: Create and publish in-depth cybersecurity articles.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Frontend**: EJS (Embedded JavaScript), CSS3 (Custom Premium Styling)
- **Authentication**: Custom session-based auth
- **File Handling**: Multer for image uploads

## 📦 Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   - Ensure MongoDB is running locally on port `27017`.
   - (Optional) Create a `.env` file for custom port or DB URI.

3. **Seed Initial Data** (Optional)
   ```bash
   npm run seed
   ```

4. **Start the Server**
   ```bash
   npm run dev
   ```

5. **Access the Application**
   - Open your browser and visit: `http://localhost:3000`

## 📂 Project Structure

```
shieldhub/
├── models/             # Database Schemas (Articles, News, etc.)
├── routes/             # API and Page Routes
│   ├── admin.js        # Admin Dashboard Routes
│   ├── articles.js     # Article Management
│   └── api.js          # Tool APIs (Phishing, Scan, etc.)
├── public/             # Static Assets (CSS, JS, Uploads)
├── views/              # EJS Templates
├── server.js           # Application Entry Point
└── package.json        # Project Manifest
```

## 🔌 API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/phishing/detect` | Analyze content for phishing indicators |
| `POST` | `/api/vulnerability/scan` | Scan a target URL for vulnerabilities |
| `POST` | `/api/password/check` | Rate password strength |
| `GET` | `/articles` | Retrieve all cybersecurity articles |

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📄 License

This project is licensed under the ISC License.
