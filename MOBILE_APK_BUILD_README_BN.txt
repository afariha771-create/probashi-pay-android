PROBASHI PAY — শুধু Android ফোন দিয়ে APK build

এই ZIP-এ GitHub Actions workflow যোগ করা হয়েছে। GitHub-এর cloud runner APK তৈরি করবে; ফোনে Android Studio লাগবে না।

ধাপগুলো:
1) ZIP-টি Android ফোনে Extract করুন।
2) github.com-এ সাইন ইন করে New repository তৈরি করুন; নাম দিন probashi-pay-android। Public বা Private—যেকোনোটি চলবে।
3) Extract করা ফোল্ডারের সব ফাইল ও ফোল্ডার (বিশেষ করে .github/workflows/android-apk.yml সহ) রিপোজিটরিতে আপলোড করে main branch-এ commit করুন। .github ফোল্ডারটি যেন বাদ না পড়ে।
4) রিপোজিটরির Actions ট্যাবে যান। “Build Probashi Pay APK” workflow খুলুন। “Run workflow” থাকলে চাপুন; না থাকলে main-এ commit করার পর workflow স্বয়ংক্রিয়ভাবে শুরু হবে।
5) Build সফল হলে workflow run খুলে নিচে Artifacts অংশ থেকে probashi-pay-debug-apk ডাউনলোড করুন। এটি ZIP ফাইল; Extract করলে app-debug.apk পাবেন।
6) APK-তে চাপ দিয়ে Install করুন। Android চাইলে Settings থেকে ওই অ্যাপ/ব্রাউজারের “Install unknown apps” অনুমতি দিন। ইনস্টল শেষে চাইলে অনুমতি বন্ধ করুন।

গুরুত্বপূর্ণ:
- GitHub-এ পুরো প্রজেক্টের ফাইল আপলোড করতে হবে, শুধু ZIP-টি নয়। .github ফোল্ডারটি লুকানো থাকতে পারে।
- এটি পরীক্ষামূলক debug APK; Play Store release-এর signed APK নয়।
- এই অ্যাপ এখনো demo: আসল টাকা পাঠানো, নিরাপদ login, real-time exchange rate, server-based admin panel নেই। বাস্তব আর্থিক সেবার জন্য secure backend ও অনুমোদিত remittance/payment integration প্রয়োজন।
