const Sequelize = require('sequelize');
const sequelize = new Sequelize('User', 'root', 'root', 
    {
        dialect:'mysql',
    }
);

const User = sequelize.define('user', {
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 21
    }
},
{
    freezeTableName: true,
    tableName: 'table',
    
})

User.sync().then((data)=> {
    console.log('Table created successfully');
}).catch((err)=> {
    console.error('Unable to connect to the database:', err);
})
console.log('Table created successfully', sequelize.model.User);
sequelize.authenticate().then( ()=> {
    console.log('Connection has been established successfully.');
}).catch( (error)=> {
    console.error('Unable to connect to the database:', error);
})
console.log('Connection has been established successfully')