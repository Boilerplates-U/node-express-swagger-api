import Sequelize from 'sequelize';
import schemas from '../../schemas';
console.log(schemas)

const DB_NAME = 'app-db';
const TABLE_NAME_VERSION_PREFIX = 'v1'; 

console.log('new Sequelize instance')
const sequelize = new Sequelize(
    DB_NAME, // db name
    'node_app', // username
    '44Ro9BmY&z', // user password
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

async function verify() {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    return sequelize;

}

async function syncModels(){
    
    await Object.keys(schemas).forEach(async (tableName) => {
        const table = schemas[tableName];
        const fullTableName = `${TABLE_NAME_VERSION_PREFIX}_${tableName}`;
        await sequelize.define(fullTableName, table.schema, table.options);
    });

    await sequelize.sync();

}

export default {
    verify,
    syncModels,
    sequelize
}