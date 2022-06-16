//used in previous assignments. 

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE341 Team Project -- Jewelery Cataloger',
    description: 'A program for cataloging jewelry items for insurance purposes ---- <button><a href="https://cse-341-team-jewelry-cataloger.herokuapp.com/logout">LOGOUT</a></button> ---- ',
  },
  host: 'cse-341-team-jewelry-cataloger.herokuapp.com',
  schemes: ['https'],
  "tags": [
    {
      "name": "user",
      "description": "Stuff for inputing and changing a customers user's data."
    },
    {
      "name": "market",
      "description": "Price and infromation for metal and stones."
    },
    {
      "name": "jewelry",
      "description": "Description and details about the jewelry item."
    },
    {
      "name": "insurance",
      "description": "Insurance company and policy information."
    }
  ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./server.js'); 
});
