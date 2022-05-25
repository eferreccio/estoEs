const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpec = require('./swagger/config')

app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.listen(3000, function(){
    console.log('server running in port 3000');
});