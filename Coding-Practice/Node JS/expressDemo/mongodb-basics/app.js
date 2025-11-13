const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sonalsuresh2255_db_user:sonalsuresh5522@cluster0.wypopp5.mongodb.net/").then(() => console.log('database connected sucessfully'))
    .catch((e) => console.log(e))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now }
})

//create user modal

const User = mongoose.model('User', userSchema)

async function runQueryExamples() {
    try {
        // create a new document in dataBase
        const newUser = await User.create({
            name: 'updateUser',
            email: 'update@gmail.com',
            age: 27,
            isActive: false,
            tags: [' developer', 'react js'],
        })

        // another way of creating

        // const newUser = new User({
        //     name: 'Amala',
        //     email: 'amala@gmail.com',
        //     age: 32,
        //     isActive: true,
        //     tags: ['backend developer','java'],
        // });
        // await newUser.save()

        console.log('Created new user', newUser)

        // get the user from database
        // const allUser = await User.find({})
        // console.log(allUser)

        // get the user based on condition from database
        // const getUserofActiveFalse = await User.find({ isActive : false})
        // console.log(getUserofActiveFalse)

        // const getFirstUser = await User.findOne({isActive : true})
        // console.log(getFirstUser)

        // const findWithID = await User.findById('69146fefa91329a3011f1ed8')
        // console.log(findWithID)

        // const selectedFeild = await User.find().select('name email -_id')
        // console.log(selectedFeild)

        // const limitedUser = await User.find().limit(5).skip(1);
        // console.log(limitedUser)

        // const sortedUsers = await User.find().sort({age: -1}); //desending order
        // console.log(sortedUsers)

        // const countDocuments = await User.countDocuments({isActive:true})
        // console.log(countDocuments)

        // Delete User
        // const deleteUser = await User.findByIdAndDelete(newUser._id)
        // console.log('deleted user ->',deleteUser)

        const updateUser = await User.findByIdAndUpdate(newUser._id, {
            $set: { age: 50 }, $push: { tags: "updated" }
        }, { new: true })

        console.log(updateUser)


    } catch (e) {
        console.log('Error ->', e)
    } finally {
        await mongoose.connection.close()
    }

}

runQueryExamples()