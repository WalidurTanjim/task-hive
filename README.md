# PlanFusion Frontend

PlanFusion Frontend is the client-side application for the TaskMate task management system. It provides a seamless and interactive user experience for task management with real-time updates, drag-and-drop functionality, and an intuitive UI.

## 🚀 Tech Stack

- **Framework:** React 19 + Vite
- **State Management:** React Query (@tanstack/react-query)
- **Drag & Drop:** @hello-pangea/dnd
- **UI Components:** Tailwind CSS, DaisyUI, Lucide React Icons
- **Form Handling:** React Hook Form
- **Routing:** React Router DOM
- **Notifications & Alerts:** SweetAlert2
- **Authentication:** Firebase
- **Data Fetching:** Axios
- **Storage:** LocalForage

---

## ✨ Features

- 🔐 **User Authentication** (Sign In, Sign Out) using Firebase.
- 📌 **Task Management** (Add, Edit, Delete, Drag & Drop between columns).
- 📊 **Real-time Updates** powered by WebSockets.
- 🎨 **Dark & Light Mode Support**.
- ⚡ **Optimized Performance** using React Query caching.
- 🛠 **Offline Support** using LocalForage.
- 🏆 **Responsive & Mobile Friendly UI**.

---

## 🛠️ Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **[Node.js](https://nodejs.org/en/) (v14+)**
- **[Vite](https://vitejs.dev/)**
- **[Firebase Account](https://firebase.google.com/)**

### Clone the repository
```bash
$ git clone https://github.com/shaikatahmed78/taskmate-frontend.git
$ cd taskmate-frontend
```

### Install dependencies
```bash
$ npm install
```

### Configure Firebase
Create a `.env` file in the root directory and add your Firebase credentials:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Start the Development Server
```bash
$ npm run dev
```

This will run the project at `http://localhost:5173/`.

---

## 🔗 API Endpoints
TaskMate frontend interacts with the TaskMate backend using the following endpoints:

| Method | Endpoint           | Description                  |
|--------|-------------------|------------------------------|
| `POST` | `/jwt`            | Generate JWT token          |
| `POST` | `/records`        | Create a new task           |
| `GET`  | `/records/:email` | Fetch user tasks            |
| `PATCH`| `/records/:id`    | Update a task               |
| `DELETE`| `/records/:id`   | Delete a task               |

---

## ⚡ Optimizations & Best Practices

- **Code Splitting** using dynamic imports.
- **React Query for API caching** to reduce network requests.
- **Lazy Loading Images** for better performance.
- **Error Handling** with `try-catch` and toast notifications.
- **Reusable Components** to keep the code DRY.

---

## 🛑 Common Issues & Troubleshooting

### 1️⃣ Firebase Authentication Errors
- Ensure your Firebase API keys are correct.
- Check if Firebase Authentication is enabled for Email/Password.

### 2️⃣ CORS Issues
- Make sure the backend CORS settings allow requests from `http://localhost:5173`.

### 3️⃣ Deployment Issues
- Ensure all `.env` variables are correctly set up in production.

---

## 🛠 Deployment Guide

### **Deploy to Vercel** (Recommended)
```bash
$ npm run build
$ vercel deploy
```

### **Deploy to Netlify**
```bash
$ npm run build
$ netlify deploy
```

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a **Pull Request**.

---

## 📞 Support
For any issues, contact me at [shaikatahmed78@gmail.com](mailto:shaikatahmed78@gmail.com).

---

Thank you for using **PlanFusion**! 🎉

