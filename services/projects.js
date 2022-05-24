const { getAllProjects, getOneProject } = require('../repositories/projects');

const projectsServiceGetAll = async(page) => {
    const news = await getAllProjects(page);
    return news
}

const projectsServiceGetOne = async(id) => {
    const project = await getOneProject(id);
    return project
}

module.exports = { 
    projectsServiceGetAll,
    projectsServiceGetOne
};