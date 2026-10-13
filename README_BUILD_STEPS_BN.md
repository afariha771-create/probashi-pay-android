# Probashi Pay APK build workflow (বাংলা নির্দেশনা)

এই প্যাকেজে APK build workflow আলাদা ফাইল হিসেবে আছে। এটি নিজে APK নয়।

## Android ফোনে GitHub-এ workflow যোগ করার নিয়ম
1. GitHub-এ আপনার `probashi-pay-android` repository খুলুন।
2. `Add file` → `Create new file` চাপুন।
3. Filename ঘরে ঠিক এই পথটি লিখুন: `.github/workflows/android-apk.yml`
4. এই ZIP-এর `android-apk.yml` ফাইল খুলে সম্পূর্ণ লেখা কপি করে GitHub-এর editor-এ পেস্ট করুন।
5. `Commit changes` চাপুন।
6. Repository-তে `package.json`, `capacitor.config.json` এবং `www` ফোল্ডার থাকতে হবে। `www`-এর ভিতরে `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `sw.js` থাকতে হবে।
7. `Actions` ট্যাব → `Build Probashi Pay APK` → `Run workflow` চাপুন।
8. বিল্ড সফল হলে run-টি খুলে `probashi-pay-debug-apk` নামে Artifact ডাউনলোড করুন।

যদি `www/index.html` না পাওয়া যায়, তাহলে `www` ফোল্ডারটি ও তার ভেতরের ফাইলগুলো সঠিকভাবে আপলোড করুন। এই ডেমো অ্যাপ বাস্তব টাকা স্থানান্তরের জন্য প্রস্তুত নয়।
