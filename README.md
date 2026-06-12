# 🎾 Rybakina Career Tracker

## Overview

Rybakina Career Tracker is a full-stack web application developed for tracking the professional tennis career of **Elena Rybakina**. The application allows users to browse match results, statistics, rankings, and career highlights, while administrators can manage match information through a protected administration panel.

The project is built using:

* **Frontend:** React + Vite + Bootstrap
* **Backend:** Node.js + Express
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Token)

---

## Features

### Guest Users

* View Elena Rybakina's career information
* Browse matches and tournaments
* View match details
* Read news and ranking information
* View statistics and charts

### Registered Users

* Create an account
* Log in and log out
* Access personalized features

### Administrators

* Add new matches
* Edit existing matches
* Delete matches
* Manage match information

---

## Technologies Used

### Frontend

* React
* React Router DOM
* Axios
* Bootstrap 5
* Chart.js
* React ChartJS 2
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* CORS

### Documentation

* Swagger UI
* Swagger JSDoc

---

## Project Structure

```text
Proektna_Zadaca-main
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── server.js
└── package.json
```

---

## Database Collections

### Users

Stores registered users and administrators.

Fields:

* firstName
* lastName
* email
* username
* password
* role

### Matches

Stores match information.

Fields:

* tournament
* opponent
* year
* round
* score
* result
* notes

### Tournaments

Stores tournament information.

Fields:

* name
* category
* location

### Comments

Stores user comments.

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd Proektna_Zadaca-main
```

### Backend

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm start
```

---

### Frontend

Navigate to the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Run the React application:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## API Endpoints

### Authentication

```http
POST /auth/register
POST /auth/login
```

### Matches

```http
GET    /matches
GET    /matches/:id
POST   /matches
PUT    /matches/:id
DELETE /matches/:id
```

### Tournaments

```http
GET /tournaments
```

### Comments

```http
GET /comments
POST /comments
```

---

## Screens

* Home
* Matches
* Match Details
* Statistics
* News
* Login
* Register
* Add Match
* Edit Match
* Delete Match

---

## Future Improvements

* Live WTA API integration
* Player rankings API
* Advanced filtering and search
* User comments system
* Favorite matches functionality
* Responsive mobile improvements

---

## Author

**Eva Ristevska**

Faculty Project – Web Programming

University "St. Kliment Ohridski" – Bitola
