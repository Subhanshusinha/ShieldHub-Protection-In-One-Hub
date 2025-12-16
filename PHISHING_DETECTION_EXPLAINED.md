# How Phishing Detection Works - Examples

## Overview
The Phishing Detective analyzes emails and URLs to detect suspicious patterns commonly used in phishing attacks. It uses pattern matching and domain analysis to calculate a risk score.

## Detection Methods

### 1. **Suspicious URL Patterns**
Detects shortened URLs and suspicious link patterns:
- **Shortened URLs**: bit.ly, tinyurl.com, t.co, goo.gl, short.link
- **File Downloads**: .exe, .zip, .rar, .scr files

**Example:**
```
Input: "Click here: https://bit.ly/suspicious-link"
Risk Score: +20 points
Detected: Shortened URL detected
```

### 2. **Urgency Keywords**
Detects common phishing language that creates urgency:
- urgent, immediate, action required
- verify account, suspended, locked
- click here, verify now, update immediately

**Example:**
```
Input: "URGENT: Your account will be suspended. Click here immediately!"
Risk Score: +20 points
Detected: Urgency keywords detected
```

### 3. **Brand Impersonation**
Detects fake brand verification pages:
- paypal.verify, amazon.secure, microsoft.account
- google.verify, apple.account

**Example:**
```
Input: "https://paypal.verify-account.com/login"
Risk Score: +20 points
Detected: Brand impersonation pattern
```

### 4. **Suspicious Domain Analysis**
Checks for domain mismatches and IP addresses:
- PayPal domain mismatch (paypal in domain but not paypal.com)
- IP addresses instead of domain names

**Example:**
```
Input: "https://paypal-secure.com/login"
Risk Score: +30 points
Detected: Suspicious domain mismatch (PayPal)

Input: "http://192.168.1.100/login"
Risk Score: +25 points
Detected: IP address used instead of domain
```

### 5. **Scam Keywords**
Detects common scam language:
- free, prize, winner, congratulations

**Example:**
```
Input: "Congratulations! You won a free prize!"
Risk Score: +20 points
Detected: Scam keywords detected
```

## Risk Score Calculation

The system calculates a risk score (0-100) based on detected patterns:

- **0 points** = Safe ✅
- **1-39 points** = Low Risk ⚠️
- **40-69 points** = Medium Risk ⚠️⚠️
- **70-100 points** = High Risk 🚨

## Real-World Examples

### Example 1: High-Risk Phishing Email
```
Input:
"URGENT: Your PayPal account has been suspended. 
Click here immediately to verify: https://bit.ly/paypal-verify
Download this file to restore access: restore.exe"

Analysis:
- Urgency keywords: +20
- Shortened URL: +20
- Brand impersonation: +20
- Executable file: +20
Total Risk Score: 80 (HIGH RISK) 🚨
```

### Example 2: Medium-Risk Suspicious Link
```
Input:
"Your Amazon account needs verification. 
Visit: https://amazon-secure-account.com/verify"

Analysis:
- Brand impersonation: +20
- Suspicious domain: +30
Total Risk Score: 50 (MEDIUM RISK) ⚠️⚠️
```

### Example 3: Low-Risk Email
```
Input:
"Congratulations! You won a free gift. 
Click here to claim: https://example.com/gift"

Analysis:
- Scam keywords: +20
Total Risk Score: 20 (LOW RISK) ⚠️
```

### Example 4: Safe Email
```
Input:
"Thank you for your purchase. 
Your order details: https://legit-store.com/order/12345"

Analysis:
- No suspicious patterns detected
Total Risk Score: 0 (SAFE) ✅
```

### Example 5: IP Address Phishing
```
Input:
"Login to your account: http://192.168.1.50/login"

Analysis:
- IP address instead of domain: +25
Total Risk Score: 25 (LOW RISK) ⚠️
```

## How to Use

1. Go to `/phishing-detective` page
2. Paste the email text or URL you want to analyze
3. Click "Analyze"
4. Review the results:
   - Risk Score (0-100%)
   - Status (Safe/Low/Medium/High Risk)
   - Detected Patterns list

## Limitations

⚠️ **Note**: This is a basic detection system. Real phishing attacks can be more sophisticated. Always:
- Verify suspicious emails with the company directly
- Check the actual URL by hovering over links
- Never download files from unknown sources
- Use two-factor authentication when available

## Testing Examples

Try these examples in the Phishing Detective:

**High Risk:**
- `https://bit.ly/paypal-verify-urgent`
- `URGENT: Account suspended. Download restore.exe`
- `http://192.168.1.100/paypal-login`

**Medium Risk:**
- `Your Amazon account needs verification: amazon-secure.com`
- `Click here immediately: tinyurl.com/verify-now`

**Low Risk:**
- `Congratulations! You won a prize!`
- `Free gift waiting for you`

**Safe:**
- `https://www.paypal.com/login`
- `Visit our website: example.com`


