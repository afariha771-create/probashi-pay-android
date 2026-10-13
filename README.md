# Probashi Pay Android / Capacitor starter

This folder packages the existing Probashi Pay PWA into an Android project using Capacitor 8.
The generated Android native project is created locally by Capacitor; it is not prebuilt in this ZIP.

## Requirements
- Node.js 22 or newer (required by Capacitor 8)
- Android Studio (Capacitor 8 docs specify Android Studio 2025.2.1 or newer)
- Android SDK Platform API 24 or newer, installed from Android Studio > SDK Manager
- Internet access for first-time dependency downloads

## Windows setup
1. Extract this ZIP into a simple path, e.g. `C:\Projects\probashi-pay-android`.
2. Open that folder in Terminal / PowerShell.
3. Run:

   npm install
   npx cap add android
   npx cap sync android
   npx cap open android

4. Android Studio opens the `android` project. Wait for Gradle sync to finish.
5. For a debug APK, use Build > Build Bundle(s) / APK(s) > Build APK(s).
6. The APK is normally written to:
   `android\app\build\outputs\apk\debug\app-debug.apk`

## macOS / Linux
Run the same npm and Capacitor commands. For a terminal debug build:
- macOS/Linux: `cd android && ./gradlew assembleDebug`
- Windows: `cd android && gradlew.bat assembleDebug`

## Updating the web code later
After editing any files inside `www/`, run:
   npx cap sync android
Then rebuild in Android Studio.

## Release APK
In Android Studio choose Build > Generate Signed Bundle / APK > APK, create a new keystore, and securely store it and its passwords. Never share your keystore or passwords. For Google Play, consider an Android App Bundle (AAB) and follow Play Console's current requirements.

## Safety notes
- This is a UI prototype only. The login is simulated, admin access is not securely enforced, and localStorage data is stored only on the current device/app webview.
- It does not move money, maintain a real wallet, or connect to a remittance provider.
- Before production, add a secure backend, real authentication, server-enforced roles, audit logs, and an approved/licensed payment or remittance partner. Do not use demo data as real exchange rates or balances.
- Change `appId` in `capacitor.config.json` before release if you need a different unique package identifier.
