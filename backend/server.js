const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Certifique-se de que seu arquivo swagger.json está neste diretório
const connectDB = require('./db/connect');
const quizzesRouter = require('./routes/quizzes');

const app = express();
const port = process.env.PORT || 8083;

app.use(cors());
app.use(express.json());

// Configuração do Swagger
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Conectar ao MongoDB
connectDB();

// Rotas
app.use('/quizzes', quizzesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
