const { pagination } = require('../helpers/pagination');
const db = require('../database/models');


const getAllProjects = async (page = 0, limit = 4) => {

  let offset = page * limit;

  const data = await db.Project.findAndCountAll({ attributes: ['name','description'], offset, limit });
  const projects = await pagination(data, page, limit, 'projects');
  
  return projects;
}

const getOneProject = async (id) => {
  
    const project = await db.Project.findByPk(id);
    
    return project;
}

const addProject = async (project) => {
  
    const newProject = await db.Project.create(project);
    return newProject;
   
}

const removeProject = async (id) => {
  
    const deletedProject = await db.Project.destroy({ where: { id: id } });
    return deletedProject;

}

module.exports = {
    getAllProjects,
    getOneProject,
    addProject,
    removeProject
}; 