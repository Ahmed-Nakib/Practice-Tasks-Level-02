# 📘 TypeScript + Node.js Setup Guide

এই গাইডটি follow করলে তুমি সহজেই TypeScript দিয়ে Node.js project setup করতে পারবে 🚀

---

## 🛠️ Requirements

* Node.js installed
* npm / yarn

চেক করতে:

```bash
node -v
npm -v
```

---

## 🚀 Project Setup

### 1️⃣ Initialize Project

```bash
npm init -y
```

---

### 2️⃣ Install TypeScript

```bash
npm install typescript --save-dev
```

(optional global)

```bash
npm install -g typescript
```

---

### 3️⃣ Create tsconfig.json

```bash
tsc --init
```

---

### 4️⃣ Folder Structure Setup

```bash
project/
│── src/
│   └── index.ts
│── dist/
│── node_modules/
│── .gitignore
│── package.json
│── tsconfig.json
```

---

### 5️⃣ Basic tsconfig (important অংশ)

```json
{
  "rootDir": "./src",
  "outDir": "./dist",
  "module": "commonjs",
  "target": "es6",
  "strict": true
}
```

---

### 6️⃣ Compile TypeScript → JavaScript

```bash
tsc
```

Watch mode (auto compile):

```bash
tsc -w
```

---

### 7️⃣ Run Project

```bash
node dist/index.js
```

---

## ⚡ Development Setup (Best Practice)

### Install nodemon

```bash
npm install nodemon --save-dev
```

### Install concurrently

```bash
npm install concurrently --save-dev
```

---

### package.json scripts

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
}
```

---

### Run Development Mode

```bash
npm run dev
```

---

## 🔥 Optional (Run TS Directly)

```bash
npm install ts-node --save-dev
```

Run:

```bash
npx ts-node src/index.ts
```

---

# 🧹 Git Fix (node_modules remove + ignore)

## ❌ Problem

node_modules Git-এ push হয়ে গেছে

---

## ✅ Solution

### 1️⃣ .gitignore তৈরি/এডিট করো

```bash
node_modules/
dist/
.env
```

---

### 2️⃣ Git থেকে remove করো (local থাকবে)

```bash
git rm -r --cached node_modules
```

---

### 3️⃣ Commit করো

```bash
git commit -m "remove node_modules from git"
```

---

### 4️⃣ Push করো

```bash
git push
```

---

## 🎯 Result

* node_modules আর Git-এ যাবে না ✅
* Project clean থাকবে ✅

---

## 💡 Extra Tips

* কখনো node_modules push করো না
* .env file গোপন রাখো
* dist folder ignore করা ভালো

---

এই README future-এ quick reference হিসেবে ব্যবহার করার জন্য বানানো হয়েছে 😎
