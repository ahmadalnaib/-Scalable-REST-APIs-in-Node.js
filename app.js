const express = require('express');
const authRouter = require('./route/authRoute');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// all routes will be here
app.use('/api/v1/auth', authRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
)
