const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Verifica se a conexão é estabelecida corretamente
    console.log('Mongoose default connection status:', connection.connections[0].readyState);

    // Após a conexão ser estabelecida com sucesso, exiba os dados da coleção 'csharp'
    const csharpCollection = mongoose.connection.collection('csharp');
    csharpCollection.find({}).toArray((err, data) => {
      if (err) {
        console.error('Error retrieving data from "csharp" collection:', err);
      } else {
        console.log('Data from "csharp" collection:', data);
      }
    });
  } catch (error) {
    console.error('Connection to MongoDB failed:', error.message);
  }
};

module.exports = connectDB;
