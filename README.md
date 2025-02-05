# Poptime - Orchid Client Side

![PopTime Banner](https://i.ibb.co.com/4nZPxBsX/pt1.png)

Poptime is a user-friendly **Movie Portal** designed to simplify the process of exploring movies, viewing details, adding new movies, and managing user favorites. The project provides a dynamic UI, authentication features, and seamless CRUD operations.

## 🔗 Live Website
[Visit Poptime](https://orchid-client.web.app/) 

## 🚀 Features
- 🔍 **Browse Movies**: View a list of movies with details such as genre, duration, release year, and rating.
- 🎬 **Movie Details**: Click on any movie to see its full details.
- ➕ **Add Movie**: Authenticated users can add new movies (Private Route).
- ❤️ **Favorite Movies**: Save movies to a personalized favorite list.
- 🔐 **Authentication**: Firebase authentication (Google Login, Email & Password Login, Registration).
- 🛠 **CRUD Operations**: Users can add, delete, and manage movies.
- 🌐 **Responsive Design**: Optimized for desktop, tablet, and mobile.
- 🎭 **Dark/Light Mode**: Toggle between themes.

## 🏗️ Tech Stack
- **Frontend:** React, React Router, Tailwind CSS, Daisy UI
- **State Management:** Context API
- **Authentication:** Firebase Authentication
- **Icons & Animations:** React Icons, Animate.css
- **Backend:** *(Server-side repo required)*

## 🔑 Environment Variables
To run this project locally, create a `.env.local` file in the root directory and add the following:
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

## ⚡ Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/Orchid-client-side.git
cd Orchid-client-side
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
The app will be running at **http://localhost:5173/**.

## 📂 Project Structure
```
Orchid-client-side/
│── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Pages (Home, Login, Register, etc.)
│   ├── hooks/          # Custom hooks
│   ├── context/        # Context API setup
│   ├── assets/         # Images and static files
│   ├── firebase/       # Firebase config
│   ├── App.jsx         # Main component
│   ├── main.jsx        # Entry point
│── public/             # Static files
│── .env.local          # Environment variables
│── package.json        # Dependencies and scripts
│── README.md           # Project documentation
```

## 🎯 Deployment
Poptime can be deployed on **Netlify, Firebase Hosting, or Vercel**.
To deploy with Netlify:
```sh
netlify deploy --prod
```
Or with Firebase Hosting:
```sh
firebase deploy
```

## 🔥 Challenges & Future Enhancements
- [ ] **Movie Update Feature**: Allow users to edit movie details.
- [ ] **Search Functionality**: Implement search based on movie titles.
- [ ] **Pagination**: Add pagination to optimize performance.
- [ ] **Animations**: Improve UI interactions with framer-motion.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
📧 Need help? Contact **[mahin1575@gmail.com](mailto:mahin1575@gmail.com)** or create an issue on GitHub.

Happy Coding! 🎉
