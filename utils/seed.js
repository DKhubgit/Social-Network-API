const connection = require('../config/connection');
const { User, Thought } = require('../model');


connection.once('open', async function() {
    await User.deleteMany({});
    await Thought.deleteMany({});

    //only adding user data.
    //manually adding thoughts to add to user's thoughts array and to populate it
    //So we really only need the user data and it's ID
    const userData = [
        {
            username: "OptimisticPanda",
            email: "optimisticpanda@gmail.com"
        },
        {
            username: "PeacefulPlace",
            email: "peacefulplace@gmail.com",
        },
        {
            username: "SunshineSoul",
            email: "sunshinesoul@gmail.com"
        }
    ]
    
    await User.insertMany(userData);
    console.log(userData);

    process.exit(0);
})