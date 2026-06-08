# Backend Deployment

This backend is a Node.js Express API using SQLite.

## Start locally

```bash
cd mini_expense_tracker/backend
npm install
npm run dev
```

## Production deploy

Recommended hosts:

- Render (recommended for SQLite workloads)
- Railway

### Render setup

1. Create a new Web Service.
2. Set "Root Directory" to `mini_expense_tracker/backend`.
3. Set build command to `npm install`.
4. Set start command to `npm start`.
5. Add any environment variables as needed.

## Notes

- The SQLite database file is stored in `backend/expenses.db`.
- For production, choose a host that supports persistent files if you need data retention.
- If using a serverless host, consider replacing SQLite with a managed database.
