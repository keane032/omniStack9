const User = require('../models/Uses');

module.exports = {
    async store(req,res){
        const { email, password } = req.body;

        let user = await User.findOne({email}).catch((e) => 
            console.log("not find" + e)
        );
        if(!user){
            user = await User.create({email,password});
            console.log(user)
        }

        return res.json(user);
    }
}