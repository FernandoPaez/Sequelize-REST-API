import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Task } from './Task.js';


export const Proyect = sequelize.define('proyects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING,
    },
},
    {
        timestamps: false,
    });

Proyect.hasMany(Task, {
    foreinKey: 'proyectId',
    sourceKey: 'id',
});
Task.belongsTo(Proyect, {
    foreinKey: 'proyectId',
    targetId: 'id',
});