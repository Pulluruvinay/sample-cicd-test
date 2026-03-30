const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'CI/CD Pipeline Test App is running' });
});

app.get('/api/test', (req, res) => {
  res.json({ success: true, data: 'Sample CI/CD test endpoint' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
