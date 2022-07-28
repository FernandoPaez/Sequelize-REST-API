import { Proyect } from '../models/Proyect.js';
import { Task } from '../models/Task.js';




export async function getProyects(req, res) {
    try {
        //throw new Error('Query failed');
        const project = await Proyect.findAll();
        res.json(project);
        console.log('Getting Projectos');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export async function getProyect(req, res) {
    const { id } = req.params;
    try {
        const project = await Proyect.findOne({
            where: {
                id: id,
            },
        });

        if (!project) {
            return res.status(404).json({ message: 'project does not exist' })
        }

        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};
//select tasks from project
export async function getProjectTask (req, res)  {
    const { id } = req.params;
    try {
        const tasks = await Task.findAll({
            attributes: ["id", "proyectId", "name", "done"],
            where: { proyectId: id },

        });

        res.json(tasks);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export async function createProyec(req, res) {
    const { name, priority, description } = req.body;
    try {

        const newProyect = await Proyect.create({
            name: name,
            priority: priority,
            description: description,
        })

        return res.json(newProyect);
        //res.send('creating project');
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

export const updateProyect = async (req, res) => {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    try {
        const project = await Proyect.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        //guardar en la base de datos
        await project.save();


        return res.json(project);


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }



};

export const deleteProject = async (req, res) => {

    try {
        const { id } = req.params;
        await Proyect.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return send.status(500).json({ message: error.message });
    };
};
