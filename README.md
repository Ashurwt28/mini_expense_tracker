# Mini Expense Tracker

A simple expense tracker web app using React, Vite, Express, and SQLite. Users can add, view, edit, and delete expenses with category, date, amount, and note fields.

## Live Demo Links

https://mini-expense-tracker-frontend-qkusuxfye-ayush-rawat-s-projects.vercel.app/


> Once deployed, replace these placeholders with the actual hosted URLs.

## Environment

Create a `.env.local` file in `mini_expense_tracker/frontend` with:

```bash
VITE_API_BASE_URL=https://your-backend-url/api
```

## Tech Stack

- Frontend: React, Vite, React Hook Form, React Icons, Axios
- Backend: Node.js, Express, SQLite, sqlite3
- Styling: CSS
- Development tools: ESLint, Vite, Nodemon

## How to Run Locally

1. Clone the repository.
2. Navigate to the project folder:

```bash
cd mini_expense_tracker
```

3. Install all dependencies for both frontend and backend:

```bash
npm install
```

4. Start the backend server:

```bash
npm run dev:backend
```

5. Start the frontend app in a new terminal:

```bash
npm run dev
```

6. Open the frontend URL shown by Vite (usually `http://localhost:5173`) in your browser.

## API Documentation

### Base URL

`http://localhost:5000/api/expenses`

### Endpoints

- `GET /api/expenses`
  - Description: Retrieve a list of all expenses.
  - Response: JSON array of expense objects.

- `POST /api/expenses`
  - Description: Create a new expense.
  - Request body:
    ```json
    {
      "amount": 12.5,
      "category": "Food",
      "date": "2026-06-08",
      "note": "Lunch"
    }
    ```
  - Response: JSON object of the created expense.

- `PUT /api/expenses/:id`
  - Description: Update an existing expense by ID.
  - Request body:
    ```json
    {
      "amount": 14.0,
      "category": "Food",
      "date": "2026-06-08",
      "note": "Lunch updated"
    }
    ```
  - Response: JSON object of the updated expense.

- `DELETE /api/expenses/:id`
  - Description: Delete an expense by ID.
  - Response:
    ```json
    {
      "success": true,
      "message": "Expense Deleted"
    }
    ```

## Project Structure

```
mini_expense_tracker/
├── frontend/            # React frontend
│   ├── public/          # Static frontend assets
│   ├── src/             # React frontend source code
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── api.js       # Axios API client
│   │   ├── App.jsx      # App entrypoint
│   │   └── main.jsx     # Vite startup file
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.example
│   └── README.md
├── backend/             # Express backend
│   ├── controllers/     # Expense API controllers
│   ├── database/        # SQLite database setup
│   ├── routes/          # Express routes
│   ├── server.js        # Express server entrypoint
│   ├── package.json
│   ├── Procfile
│   ├── README.md
│   └── expenses.db
├── package.json         # Monorepo workspace scripts
├── .gitignore
└── README.md
```

## Deployment

### Frontend

Recommended hosts:

- Vercel
- Netlify
- GitHub Pages

For Vercel or Netlify:

- Build command: `npm run build`
- Publish directory: `dist`
- Set environment variable `VITE_API_BASE_URL` to your backend URL.

### Backend

Recommended hosts:

- Render (recommended for SQLite)
- Railway

For Render:

- Root directory: `mini_expense_tracker/backend`
- Build command: `npm install`
- Start command: `npm start`

## Next Steps

- Add authentication and user accounts.
- Add charts and category summary visualizations.
- Add expense search and export functionality.
