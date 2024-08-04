require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require('express');
const authRouter = require('./route/authRoute');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// all routes will be here
app.use('/api/v1/auth', authRouter);
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
  });
});

const PORT = process.env.APP_PORT || 5001;

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});
