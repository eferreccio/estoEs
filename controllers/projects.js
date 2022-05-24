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

module.exports = {
    list,
    detail
};