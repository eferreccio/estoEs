/**
 * @swagger
 * components:
 *  schemas:
 *    Project:
 *       type: object
 *       properties:
 *          name:
 *            type: string
 *            description: the project's name
 *          description:
 *            type: string
 *            description: a summary of the project 
 *          manager:
 *            type: string
 *            description: a person in charge
 *          asignedTo:
 *            type: string
 *            description: the responsible of doing the duty
 *          status:
 *            type: string
 *            description: a word wich represents the status of project
 *          userId:
 *            type: number
 *            description: the id of the user who has created the project *    
 *       required:
 *         - name
 *         - description
 *       example:
 *          name: members
 *          description: create a web of members of the company.
 *          manager: Mr. Gonzalez
 *          asignedTo: Juan Perez
 *          status: In Progress
 *          userId: 1      
 */

/**
 * @swagger
 * /projects/create:
 *   post:
 *       summary: create a new project
 *       tags: [Projects]
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Project'
 *              examples:
 *                registro exitoso:
 *                  value:    
 *                    "name": "Alpha"
 *                    "description": "Proyecto alpha"
 *                    "manager" : "Jhon"
 *                    "asignedTo": "Mary"
 *                    "status": "Done"
 *                    "userId": "2"
 *                registro exitoso (No contiene descripción):
 *                  value:    
 *                    "name": "Beta"
 *                    "manager" : "Grace"
 *                    "asignedTo": "Mary"
 *                    "status": "To Verify"
 *                    "userId": "2"
 *                registro sin éxito (No contiene nombre):
 *                  value:    
 *                    "manager" : "Louis"
 *                    "asignedTo": "Mary"
 *                    "status": "To Verify"
 *                    "userId": "2"
 *       responses:
 *         '201':
 *           description: The project was successfully saved
 *         '500':
 *           description: something was wrong, please check it
 */

/**
 * @swagger
 * /projects/:
 *  get:
 *     summary: Get projects
 *     tags: [Projects]
 *     responses:
 *      200:
 *        description: return all projects
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/Project'
 *      500:
 *         description: something was wrong, please check it
 */

/**
 * @swagger
 * /projects/{id}:
 *  get:
 *     summary: Get project by Id
 *     tags: [Projects]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *              required: true
 *     responses:
 *      200:
 *        description: return a project
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/Project'
 *      500:
 *         description: something was wrong, please check it
 */

/** 
 * @swagger
 * /projects/{id}:
 *  delete:
 *     summary: delete a project
 *     tags: [Projects]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *              required: true
 *     responses:
 *      200:
 *        description: Project Removed
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/Project'
 *      500:
 *         description: something was wrong, please check it
 */

/**
 * @swagger
 * /projects/search?{query}:
 *  get:
 *     summary: Get project shearching by the name
 *     tags: [Projects]
 *     parameters:
 *        - in: query
 *          name: name
 *          schema:
 *              type: string
 *              required: true
 *     responses:
 *      200:
 *        description: return a project
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/Project'
 *      500:
 *         description: something was wrong, please check it
 */