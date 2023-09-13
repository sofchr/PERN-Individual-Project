// const bcrypt = require('bcrypt')
// const { getAllUsers, getUserById, createUser } = require('../db/helpers/users')
// const router = require('express').Router()

// const SALT_ROUNDS = 10

// router.get('/', async (req, res, next) => {
//     try {
//         res.send("wow!")
//     } catch (error) {
//         next(error)
//     }
// })

// router.post('/register', async (req, res, next) => {
//     try {
//         const { username, password } = req.body
//         const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
//         const user = await createUser({ username, password: hashedPassword })
//         delete user.password
//         const token = jwt.sign(user, JWT_SECRET)
//         res.cookie('token', token, {
//             sameSite: 'strict',
//             httpOnly: true,
//             signed: true
//         })
//         delete user.password
//         res.send({ user })

//     } catch (error) {
//         next(error)
//     }
// })

// router.post('/login', async (req, res, next) => {
//     try {
//         console.log(req.body)
//         const { username, password } = req.body
//         const user = await getUserByUsername(username)
//         console.log(user)

//         const validPassword = await bcrypt.compare(password, user.password)

//         delete user.password
//         if (validPassword) {
//             //creating our token
//             const token = jwt.sign(user, JWT_SECRET)
//             //attaching a cookie to our response using the token that we created
//             res.cookie('token', token, {
//                 sameSite: 'strict',
//                 httpOnly: true,
//                 signed: true
//             })

//             delete user.password
//             res.send({ user })
//         }

//     } catch (error) {
//         next(error)
//     }
// })

// router.post('/logout', async (req, res, next) => {
//     try {
//         res.clearCookie('token', {
//             sameSite: 'strict',
//             httpOnly: true,
//             signed: true
//         })
//         res.send({
//             loggedIn: false,
//             message: 'Logged Out'
//         })
//     } catch (error) {
//         next(error)
//     }
// })


// module.exports = router