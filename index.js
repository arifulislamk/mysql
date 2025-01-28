const Sequelize = require('sequelize');
const sequelize = new Sequelize('User', 'root', 'root', 
    {
        dialect:'mysql',
    }
);

sequelize.authenticate().then( ()=> {
    console.log('Connection has been established successfully.');
}).catch( (error)=> {
    console.error('Unable to connect to the database:', error);
})
console.log('Connection has been established successfully')