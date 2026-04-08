# Skill 11 – React API Integration

## API Dashboard Application

A news portal that fetches and displays user and product information dynamically using React with multiple data sources.

### Features
- **Part A** – Fetching from Local JSON (`public/users.json`) using `fetch()`
- **Part B** – Fetching from JSONPlaceholder API using `fetch()`
- **Part C** – Fetching from Fake Store API using `axios` with dropdown filter & refresh
- **Part D** – Dashboard navigation with React Router
- Loading & error state handling
- Dropdown filter for categories
- Refresh button to reload data

### Tech Stack
- React 18
- Vite
- Axios
- React Router DOM
- CSS3

### How to Run

```bash
npm install
npm run dev
```

### Project Structure

```
Skill11/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── vite.svg
│   └── users.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── components/
        ├── Dashboard.jsx
        ├── Dashboard.css
        ├── LocalUserList.jsx
        ├── LocalUserList.css
        ├── UserList.jsx
        ├── UserList.css
        ├── FakePostList.jsx
        └── FakePostList.css
```

### Course
FSAD (Full Stack Application Development) – Skill 11
