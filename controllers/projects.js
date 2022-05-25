const serviceProject = require('../services/projects');
const {request,response} = require('express');

const list= async(req,res) => {

  const {page} = req.query;
  const projects = await serviceProject.projectsServiceGetAll(page);
  
  try {
    res.status(200).json({
      projects
    });
  } catch (error) {
    return res.status(500).json({
      msg:'something was wrong, please check it'
    })
  }
}

const detail = async(req,res) => {

    try {

        const id = req.params.id;
        const project = await serviceProject.projectsServiceGetOne(id);

        if (project === null) {
            res.status(404).json({ msg: 'not found' });
        }
        res.status(200).json({
          project
        });
      } catch (error) {
        return res.status(500).json({
          msg:'something was wrong, please check it'
        })
      }
}

const create = async(req, res) => {

  try {
    const { name, description, manager, asignedTo, status, userId } = req.body
        
    const data = {
            name,
            description,
            manager,
            asignedTo,
            status,
            userId
        }
        const projectCreated = await serviceProject.save(data);
        res.status(201).json('The project was successfully saved ')
        return projectCreated;
  } catch (error) {
    return res.status(500).json({
      msg:'something was wrong, please check it'
    })
  }

}

const remove = async(req, res) => {
  try {
    
    const { id } = req.params;
    const removedProject = await serviceProject.remove(id);
    return res.status(200).send('Project Removed');
  } catch (error) {
    return res.status(500).json({
      msg:'something was wrong, please check it'
    })
  }
};

const search = async(req, res) => {

  try {
    const text = req.query.name;

    const project = await serviceProject.search(text);

        if (project === null) {
            res.status(404).json({ msg: 'not found' });
        }
        res.status(200).json({
          project
        });

  } catch (error) {
    return res.status(500).json({
      msg:'something was wrong, please check it'
    })
  }
};
  



module.exports = {
    list,
    detail,
    create,
    remove,
    search
};