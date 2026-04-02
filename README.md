# EV Charging Station Finder & Slot Booking App

[![Expo](https://img.shields.io/badge/Expo-4630EB?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-000000?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCB91?style=for-the-badge&logo=firebase&logoColor=000)](https://firebase.google.com/)

## 🚀 Project Overview

**EV Charging Station Finder & Slot Booking App** is a full-stack React Native mobile application built with Expo that helps electric vehicle (EV) users discover nearby charging stations, view availability, book slots, get directions, and complete payments seamlessly. 

This production-ready app features **user authentication**, **real-time location tracking**, **interactive maps**, **slot booking system**, and **secure payments** (Stripe + UPI), making it ideal for EV infrastructure companies or charging networks.

### 🎯 Key Features
- **🔍 Nearby Station Discovery**: Real-time search for EV charging stations using Google Places Autocomplete and Expo Location
- **🗺️ Interactive Maps**: Powered by `react-native-maps` with directions overlay (`react-native-maps-directions`)
- **👤 Secure Authentication**: Clerk integration with OAuth (Google/Email), token management, and protected routes
- **📅 Slot Booking**: Date/time picker for booking charging slots with real-time availability
- **💳 Secure Payments**: Stripe integration + UPI payments via `react-native-upi-payment`
- **📱 Responsive Navigation**: React Navigation with bottom tabs & stack navigators
- **📍 Geolocation**: Automatic user location detection with permission handling
- **✨ UI/UX**: Custom fonts (Outfit), gradients, Paper Design System, splash screens
- **🔄 Offline Support**: AsyncStorage & SecureStore for user data persistence
- **📊 Analytics Ready**: Firebase integration for backend services

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Expo SDK 52, React Native 0.76.9, React 18.3.1, TypeScript 5.7 |
| **State/Auth** | Clerk Expo (^2.8.5), React Context (UserLocationContext), AsyncStorage |
| **Navigation** | React Navigation 7 (Bottom Tabs, Stack) |
| **Maps/Location** | expo-location 18.0.10, react-native-maps 1.18.0, react-native-maps-directions 1.9.0, Google Places Autocomplete |
| **UI/Components** | react-native-paper 5.13.1, expo-linear-gradient, react-native-modal-datetime-picker, react-native-picker-select |
| **Payments** | @stripe/stripe-react-native 0.38.6, react-native-upi-payment 1.0.5 |
| **Backend** | Firebase 11.4.0, Axios 1.8.2 |
| **Utilities** | expo-font, expo-splash-screen, expo-status-bar, expo-linking, UUID, Moment.js |
| **Build/Dev** | EAS Build, Metro, Babel |

## 📱 Screenshots

<!-- Add screenshots here - replace with actual images from assets/ or build -->
<p align="start">
  <img src="https://ik.imagekit.io/vikash06/Screenshot_2026-04-02-11-32-00-16_99c04817c0de5652397fc8b56c3b3817.jpg?updatedAt=1775109817141" width="200"/>
  <img src="https://ik.imagekit.io/vikash06/Screenshot_2026-04-02-11-32-11-44_99c04817c0de5652397fc8b56c3b3817.jpg?updatedAt=1775109817633" width="200"/>
  <img src="https://ik.imagekit.io/vikash06/Screenshot_2026-04-02-11-32-22-14_99c04817c0de5652397fc8b56c3b3817.jpg?updatedAt=1775109817641" width="200"/>
  <img src="https://ik.imagekit.io/vikash06/Screenshot_2026-04-02-11-32-28-00_99c04817c0de5652397fc8b56c3b3817.jpg?updatedAt=1775109817616" width="200"/>
</p>

## 🏗️ Project Structure

```
Ev-Charging-Station-Finder-App/
├── App/
│   ├── Context/          # React Contexts (UserLocationContext)
│   └── Screen/
│       └── LoginScreen/  # Auth screens & Navigations
│           └── Navigations/
│               └── TabNavigation
├── components/           # Reusable UI: SignInWithOAuth.tsx
├── assets/               # Images, fonts (Outfit), icons, splash
├── package.json          # Dependencies & scripts
├── app.json              # Expo config (permissions, icons)
├── App.js                # Entry point with auth, location, navigation
└── ...
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Expo CLI: `npm install -g @expo/cli`
- Android Studio/Xcode for emulators
- Clerk Publishable Key (in App.js)
- Stripe/Firestore config (env vars recommended)

### Installation
```bash
cd Ev-Charging-Station-Finder-App
npm install  # or yarn install
npx expo install --fix  # Fix Expo peer deps
```

### Run the App
```bash
# iOS Simulator
npx expo start --ios

# Android Emulator
npx expo start --android

# Web
npx expo start --web

# Development Build (EAS)
eas build --platform all
```

**Press `a` (Android), `i` (iOS), `w` (Web) in Expo DevTools.**

### Location Permissions
App requests `ACCESS_FINE_LOCATION` & `ACCESS_COARSE_LOCATION` on startup.

## 🔐 Environment Setup

1. **Clerk**: Update `publishableKey` in `App.js` with your Clerk key
2. **Firebase**: Configure in a `.env` file:
   ```
   FIREBASE_API_KEY=your_key
   ```
3. **Stripe**: Add publishable key in payment screens
4. **Google Maps**: Add API key for Places/Maps (Android/iOS config)

## 📄 Android Permissions (app.json)
```json
\"permissions\": [
  \"android.permission.ACCESS_COARSE_LOCATION\",
  \"android.permission.ACCESS_FINE_LOCATION\"
]
```

## 🤝 Contributing

1. Fork the repo
2. Create feature branch: `feat/your-feature`
3. Install deps: `npm install`
4. Commit changes: `git commit -m 'feat: add feature'`
5. Push & PR to `main`

## 📄 License
This project is open-source under MIT License - feel free to use in portfolios/interviews!

## 👨‍💻 Author
**Vikash** - Full-Stack React Native Developer  
[LinkedIn](https://www.linkedin.com/in/vikash-mishra1206) | [Portfolio](https://vikash-mishra.vercel.app)

---

⭐ **Star this repo if it impresses you!** ⭐

