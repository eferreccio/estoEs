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


module.exports = {
    getAllProjects,
    getOneProject
}; 