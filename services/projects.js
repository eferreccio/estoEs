const { getAllProjects, getOneProject, addProject, removeProject, searchProject } = require('../repositories/projects');

const projectsServiceGetAll = async(page) => {
    const news = await getAllProjects(page);
    return news
}

const projectsServiceGetOne = async(id) => {
    const project = await getOneProject(id);
    return project
}

const save = async (project) => {
    const newProject = await addProject(project);
    return newProject
};

const remove = async (id) => {
    const deletedProject = await removeProject(id);
    if (!deletedProject) throw { name: 'Project not found', code: 404 };
    return deletedProject;
  };

const search = async (text) => {
    const searchedProject = await searchProject(text);
    if (!searchedProject) throw { name: 'Project not found', code: 404 };
    return searchedProject;
  };

module.exports = { 
    projectsServiceGetAll,
    projectsServiceGetOne,
    save,
    remove,
    search
};