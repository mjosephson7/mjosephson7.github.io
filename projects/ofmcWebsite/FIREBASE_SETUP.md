# 🔥 Firebase Setup Instructions

Your website has been converted to use Firebase instead of a local server. This means it will work globally on any device without needing a server!

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Enter project name: `ofmc-website`
4. Disable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Firestore Database

1. In your Firebase project, click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for now)
4. Select a location (closest to your users)
5. Click "Done"

## Step 3: Get Firebase Configuration

1. Click the gear icon ⚙️ → "Project settings"
2. Scroll down to "Your apps"
3. Click "Web" icon `</>`
4. Enter app nickname: `OFMC Website`
5. Click "Register app"
6. Copy the `firebaseConfig` object

## Step 4: Update Your Configuration

1. Open `firebase-config.js` in your project
2. Replace the placeholder config with your actual config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-actual-app-id"
};
```

## Step 5: Set Firestore Security Rules (Optional but Recommended)

1. Go to "Firestore Database" → "Rules"
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to announcements and banner settings
    match /announcements/{document} {
      allow read: if true;
      allow write: if false; // Only allow writes from admin dashboard
    }
    
    match /settings/{document} {
      allow read: if true;
      allow write: if false; // Only allow writes from admin dashboard
    }
  }
}
```

## Step 6: Test Your Setup

1. Open `index.html` in a browser
2. Check browser console for any Firebase errors
3. Go to `admin-dashboard.html` and try:
   - Adding an announcement
   - Enabling/disabling the banner
4. Refresh `index.html` to see changes

## 🎉 Benefits of Firebase

✅ **Works everywhere** - No server needed  
✅ **Real-time updates** - Changes appear instantly  
✅ **Always online** - Google's infrastructure  
✅ **Free tier** - 1GB storage, 50K reads/day  
✅ **Secure** - Built-in authentication and rules  

## Troubleshooting

**Error: "firebase is not defined"**
- Make sure you're accessing the site via HTTP/HTTPS (not file://)
- Check that `firebase-config.js` is loading properly

**Error: "Permission denied"**
- Check your Firestore security rules
- Make sure you're using the correct project ID

**No data loading**
- Open browser developer tools → Console
- Check for any JavaScript errors
- Verify your Firebase config is correct

## Production Deployment

For production, consider:
1. Setting stricter Firestore security rules
2. Adding Firebase Authentication for admin access
3. Using Firebase Hosting to serve your website

Your website now works globally without any server setup! 🚀