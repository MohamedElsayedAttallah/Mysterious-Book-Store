# 🕯️ Mysterious Book Store Project 📚

A bookstore management project using **Node.js** and **PostgreSQL**.

---

## 🚀 How to Run Mysterious Book Store Project

After cloning the project, you need to install **PostgreSQL** and run **pgAdmin4**.

📺 Here is a clear YouTube tutorial on installing PostgreSQL and pgAdmin4:
[How to Install PostgreSQL and pgAdmin 4](https://www.youtube.com/watch?v=BLH3sHLq7pM)

---

## 🗂️ Database Setup

1️⃣ Open **pgAdmin4** and **create a new database** (you can name it `mysterious_bookstore`).

2️⃣ Inside this database, **create a table called `books`** using the following SQL:

```sql
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    genre VARCHAR(100),
    price NUMERIC(10, 2),
    published_date DATE
);
```

---

## 🛠️ Project Configuration

After creating the table, open your project in **VS Code** and locate the section where your database is configured. Edit it as follows:

```javascript
const db = new pg.Client({
    user: "postgres",          // Your PostgreSQL username
    host: "localhost",         // Database host
    database: "mysterious_bookstore", // ✅ Replace with your database name
    password: "your_password", // ✅ Replace with your database password
    port: 5432,                // Your PostgreSQL port (default is usually 5432)
});
```

---

## ⚙️ Installing Dependencies

Open your **terminal** and navigate to your project directory:

```bash
cd path/to/your/project
npm i
```

If you encounter issues, run:

```bash
npm audit fix
```

to automatically fix dependency vulnerabilities.

---

## 🖥️ Running the Server

### ✅ Install `nodemon` for development auto-restart:

**Option 1: Via VS Code Extensions**

1. Open **Extensions** (`Ctrl + Shift + X`).
2. Search for **Nodemon**.
3. Click **Install**.

**Option 2: Via terminal (recommended):**

```bash
npm install -g nodemon
```

---

### ✅ Start your server:

Run:

```bash
nodemon index.js
```

---

## 🌐 Accessing Your Project

Open your browser and go to:

```
http://localhost:3000
```

✅ You should now see your **Mysterious Book Store Project running locally**.

---

## 📝 Features

* Add, update, delete, and view books.
* PostgreSQL database management.
* Clean, educational structure for practicing Node.js with PostgreSQL.

---

## 🤝 Contributing

Pull requests are welcome. Feel free to fork and experiment with new features.

---

## 📜 License

This project is open source for educational use.

---

## 🎉 Enjoy your learning journey while building your Mysterious Book Store!
