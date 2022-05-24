const db = require('../database/models')

const usersController = {

    list: async (req, res)  => {

        try {

            const users = await db.User.findAll()

            let response = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: '/users'
                },
                data: users
            }

            res.json(response);    

        } catch(error) {
            return res.status(500).json({
                msg:'Internal Server Error'
            })
        }

    }
}

module.exports = usersController;