
# 💸 Fintech API: Financial Literacy & Fraud Awareness

The **Fintech API** powers a mobile-first, multilingual application designed to educate users, promote financial literacy, and raise fraud awareness. It offers secure authentication, gamified learning, personalized AI guidance, and real-time financial tools—all backed by a scalable Node.js backend.

---

## ✨ Features

- 🔐 **Secure Authentication** – JWT-based user registration, login, and logout
- 👤 **User Management** – Profile retrieval and settings update
- 📚 **Learning Modules** – Educational content with progress tracking
- 🎮 **Gamification** – Quizzes, scoring, and daily streaks
- 🤖 **AI Integration** – Personalized financial tips (placeholder endpoint)
- 🧮 **Financial Calculators** – FD and SIP return estimators
- 📈 **Investment Explorer** – Discover and learn about schemes
- 🕵️ **Fraud Simulation** – Interactive scenarios with awareness scoring
- 🏦 **Bank Notices** – Real-time press releases and updates

---

## 🧰 Technology Stack

| Layer         | Technology            |
|---------------|-----------------------|
| Backend       | Node.js + Express.js  |
| Database      | MongoDB + Mongoose    |
| Auth & Security | JWT, bcryptjs, helmet, cors |
| Validation    | express-validator     |

---

## ⚙️ Getting Started

### 📦 Prerequisites

- Node.js (LTS version recommended)
- MongoDB (local or cloud instance)

### 🛠 Installation

```bash
git clone <your-repo-url>
cd fintech-api
npm install
```

### 🔐 Environment Setup

Create a `.env` file in the root directory:

```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/fintechdb
JWT_SECRET=your_super_secret_key_here
```

> Replace `your_super_secret_key_here` with a strong, random string.

### 🚀 Run the Server

```bash
npm run dev   # Development mode with nodemon
npm start     # Production mode
```

---

## 🗺️ API Endpoints

### 🔑 Authentication

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | `/api/register`      | Create a new user            |
| POST   | `/api/login`         | Authenticate and receive JWT |
| POST   | `/api/logout`        | Log out the current user     |

### 👤 User & Settings

| Method | Endpoint                  | Description                        |
|--------|---------------------------|------------------------------------|
| GET    | `/api/user/profile`       | Get user profile                   |
| PUT    | `/api/user/settings`      | Update language and notifications  |

### 📘 Learning Modules

| Method | Endpoint                                         | Description                         |
|--------|--------------------------------------------------|-------------------------------------|
| GET    | `/api/learning/modules`                          | List all modules                    |
| GET    | `/api/learning/modules/:moduleId/lessons`        | Lessons in a module                 |
| GET    | `/api/learning/lessons/:lessonId`                | Get a single lesson                 |
| POST   | `/api/learning/lessons/:lessonId/track`          | Track lesson progress               |

### 🎮 Gamification

| Method | Endpoint                                                   | Description              |
|--------|------------------------------------------------------------|--------------------------|
| GET    | `/api/gamification/lessons/:lessonId/quiz`                 | Get quiz for a lesson    |
| POST   | `/api/gamification/lessons/:lessonId/quiz/submit`          | Submit quiz answers      |
| GET    | `/api/gamification/streak`                                 | Get daily streak count   |

### 🤖 AI & Calculators

| Method | Endpoint                        | Description                        |
|--------|----------------------------------|------------------------------------|
| POST   | `/api/ai/financial-tips`        | Get personalized financial tips    |
| POST   | `/api/calculators/fd`           | Calculate FD maturity amount       |
| POST   | `/api/calculators/sip`          | Calculate SIP estimated returns    |

### 💼 Investments & Fraud

| Method | Endpoint                                      | Description                        |
|--------|-----------------------------------------------|------------------------------------|
| GET    | `/api/investments`                            | List all investment schemes        |
| GET    | `/api/investments/:id`                        | Get scheme details                 |
| GET    | `/api/fraud/scenarios/:id`                    | Get fraud scenario                 |
| POST   | `/api/fraud/scenarios/:id/submit`             | Submit decision for scenario       |
| GET    | `/api/fraud/score`                            | Get fraud awareness score          |

### 🏦 Bank Notices

| Method | Endpoint                                      | Description                        |
|--------|-----------------------------------------------|------------------------------------|
| GET    | `/api/notices/press-releases`                | List all press releases            |
| GET    | `/api/notices/press-releases/:id`            | Get specific press release         |

---

## 🤝 Contribution

We welcome contributions to improve financial literacy and fraud protection!

- 🛠 Open a pull request
- 🐞 Report bugs or suggest features
- 💬 Contact the maintainer for collaboration

---

## 💡 Future Enhancements

- 🌍 Localization for regional languages
- 📊 Admin dashboard for analytics
- 🔔 Push notifications for fraud alerts
- 🧩 Plugin support for third-party financial tools

---

## 📄 License

This project is licensed under the MIT License.

---

