# Habiba Ali Mostafa — Portfolio (React + .NET)

بورتفوليو كامل مبني بـ React (Frontend) و.NET 8 Web API (Backend لفورم التواصل).

## 📁 هيكل المشروع
```
habiba-portfolio/
├── client/   → React + Vite + TypeScript + Tailwind CSS
└── server/   → .NET 8 Web API (Contact Form)
```

---

## المتطلبات قبل البدء
1. **Node.js** (نسخة 18 أو أحدث) — نزليه من https://nodejs.org
2. **.NET 8 SDK** — نزليه من https://dotnet.microsoft.com/download/dotnet/8.0
3. **VS Code** — نزليه من https://code.visualstudio.com

تأكدي من التثبيت بفتح Terminal وكتابة:
```bash
node -v
dotnet --version
```

---

## الخطوة 1: تشغيل الـ Frontend (React)

افتحي Terminal جوه فولدر `client`:
```bash
cd client
npm install
npm run dev
```
الموقع هيفتح على: **http://localhost:5173**

في الخطوة دي هتشوفي البورتفوليو شغال بس فورم التواصل مش هيبعت إيميلات لحد ما تظبطي الـ Backend (الخطوة الجاية).

---

## الخطوة 2: تشغيل الـ Backend (.NET API)

في Terminal تاني، جوه فولدر `server/HabibaPortfolio.Api`:
```bash
cd server/HabibaPortfolio.Api
dotnet restore
dotnet run
```
الـ API هتشتغل على: **http://localhost:5080**

### إعداد إرسال الإيميلات (Gmail App Password)
عشان فورم التواصل يبعتلك فعليًا على `habibaali1620@gmail.com`:

1. افتحي https://myaccount.google.com/security
2. فعّلي **2-Step Verification** لو لسه مش مفعّلة
3. روحي على https://myaccount.google.com/apppasswords وأنشئي **App Password** جديد
4. افتحي ملف `server/HabibaPortfolio.Api/appsettings.json` وحطي:
   ```json
   "Smtp": {
     "Host": "smtp.gmail.com",
     "Port": "587",
     "Username": "habibaali1620@gmail.com",
     "Password": "الـ App Password اللي جبتيه",
     "ToEmail": "habibaali1620@gmail.com"
   }
   ```
5. شغلي `dotnet run` تاني

**ملحوظة أمان:** متعمليش commit للـ `appsettings.json` بعد ما تحطي فيه الباسورد لو هترفعي المشروع على GitHub — ضيفيه في `.gitignore` أو استخدمي `dotnet user-secrets` بدلها.

---

## الخطوة 3: تعديل بياناتك
كل بياناتك (الاسم، المشاريع، المهارات، الخبرات...) موجودة في ملف واحد بس عشان تقدري تعدلي بسهولة:
```
client/src/data.ts
```
غيري فيه أي وقت من غير ما تلمسي كود الكومبوننتس.

الصور (صورتك الشخصية + الشهادات) موجودة في:
```
client/src/assets/
```

---

## الخطوة 4: رفع المشروع (Deployment)
- **Frontend:** ارفعيه على [Vercel](https://vercel.com) أو [Netlify](https://netlify.com) — نفس الطريقة اللي رفعتي بيها Renturn بالظبط
- **Backend:** ارفعيه على [Railway](https://railway.app) أو [Azure App Service](https://azure.microsoft.com/products/app-service) — وبعد الرفع، غيري رابط الـ API في `client/vite.config.ts` (أو استخدمي environment variable)

---

## بناء نسخة الإنتاج (Production Build)
```bash
cd client
npm run build
```
هيطلعلك فولدر `dist` جاهز للرفع.
