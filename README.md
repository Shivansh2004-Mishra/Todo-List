# Todo List Application

A modern, full-stack Todo List web application built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**.  
Easily manage your daily tasks with priority levels, edit and delete features, and a clean, responsive UI.

## 🚀 Live Demo

[View the deployed app on Render](https://todo-list-8bf1.onrender.com)

---

## ✨ Features

- **Add Tasks:** Quickly add new tasks with a title and priority (High, Medium, Low).
- **Edit Tasks:** Update task details and priorities with a user-friendly interface.
- **Delete Tasks:** Remove tasks you no longer need.
- **Filter Tasks:** View tasks by priority using the filter feature.
- **Responsive Design:** Works beautifully on desktop and mobile devices.
- **Visual Priority:** Tasks are color-coded by priority for easy scanning.
- **Alerts:** Get instant feedback for actions like add, update, delete, or empty input.

---

## 🛠️ Technology Stack

- **Frontend:** EJS (Embedded JavaScript Templates), HTML, CSS (custom + Font Awesome)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (cloud-hosted)
- **Other:** method-override, dotenv

---

## 📂 Project Structure

```
Assignment-8/
│
├── models/
│   └── Task.js
├── public/
│   └── CSS/
│       └── list.css
├── routes/
│   └── todoRoutes.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── edit.ejs
│   └── filter.ejs
├── .env
├── index.js
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Shivansh2004-Mishra/todo-list-app.git
    cd todo-list-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add:
    ```
    PORT=3000
    MONGODB_URI=your_mongodb_atlas_connection_string
    ```

4. **Run the application:**
    ```bash
    npm start
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📸 Screenshots

![Todo List Screenshot](https://user-images.githubusercontent.com/Shivansh2004-Mishra/todo-list-screenshot.png)

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Font Awesome](https://fontawesome.com/)
- [Render](https://render.com/)
