import { Task } from '../models/Task.js';


export const createTask = async (req, res) => {
    const { name, done, proyectId } = req.body;

    try {
        const newTask = await Task.create({
            proyectId,
            name,
            done,
        });
        res.json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getTasks = async (req, res) => {

    try {
        const allTasks = await Task.findAll({
            // attributes: ['id', 'name', 'done', 'projectId',],
            //order: [["id","desc"]],
        });
        res.json(allTasks);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const oneTask = await Task.findOne({
            where: { id }
        });
        res.json(oneTask);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTask = await Task.destroy({
            where: { id }
        });
        console.log(deleteTask);
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    const {id} = req.params;
    try {
        const task = await Task.findOne({
            where: { id }
        });
        task.set(req.body);
        await task.save();
        return res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
