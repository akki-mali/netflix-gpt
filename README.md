# Netflix GPT

.Create your project using vite
.Configue Tailwind css 
.Routing of app
.Login with Sign in / Sign Up component created
.Header Component
.Validation done for email & password
.useRef Hook
.install firebase

## Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Firebase configuration in `.env`:
   - Get your Firebase config from [Firebase Console](https://console.firebase.google.com/)
   - Replace the placeholder values in `.env` with your actual Firebase project details

3. Enable Authentication in Firebase Console:
   - Go to Authentication → Sign-in method
   - Enable "Email/Password" provider


# Features

* Login/ Signup
- login/Signup Form
- after logged in redirect to Browse page
* Browse(after authentication)
- Header
- Main Movie
    - Title n Description
    - Trailer in Background
- Movie Suggestions
- Movie list
* Netflix-GPT