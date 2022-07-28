import Sequelize  from "sequelize";


export const sequelize= new Sequelize ('tres','postgres','dangerous',{
    host:'localhost',
    dialect:'postgres',

});
