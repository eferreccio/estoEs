const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');

app.use('/users', usersRouter);
app.use('/projects', projectsRouter);

app.listen(3000, function(){
    console.log('server running in port 3000');
});