require('dotenv').config();
const app = require('./app');

const port = process.env.API_PORT || 3030;

app.get('/', (_request, response) => {
  response.send({ message: 'api on-line' });
});

app.listen(port, () => console.log('ouvindo porta', `http://localhost:${port}`));