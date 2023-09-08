
const users = [
    { username: 'sofiecodes', password: 'ilovemycat', name: 'Sofie Christensen' },
    { username: 'bennieboi', password: 'ilovebroccoli', name: 'Bennie Tchop' },
    { username: 'girlwithnoname', password: 'whoisshe', name: 'Jane Doe' }
]

const characters = [
    { name: 'Greg', image: 'https://images.squarespace-cdn.com/content/v1/583c906ebe659429d1106265/05e26a7a-5a7f-4ffa-a2a0-d8ff2479521f/gardenwallgreg.jpg', human: true, description: 'Younger brother of Wirt', posterid: 3 },
    { name: 'Wirt', image: 'https://practicaltyping.com/wp-content/uploads/2020/07/gardenwallwirt.png', human: true, description: 'Older brother of Greg', posterid: 3 },
    { name: 'The Woodsman', image: 'https://m.media-amazon.com/images/M/MV5BNDBhYTcyMWItNWRlMS00MmU1LWIyM2YtYmVkZjE1NWI5ZGRjXkEyXkFqcGdeQXVyMTAxOTUyOTAz._V1_.jpg', human: true, description: 'At the beck and call of The Beast', posterid: 2 },
    { name: 'The Beast', image: 'https://i.pinimg.com/736x/2d/0a/d4/2d0ad4e01e0799f37d81c090f4fcf9b2.jpg', human: false, description: 'Uses the Woodsman to keep his soul alive', posterid: 2 },
    { name: 'Beatrice', image: 'https://practicaltyping.com/wp-content/uploads/2020/07/beatrice.jpg', human: false, description: 'Bluebird, a friend to Greg and Wirt', posterid: 1 },
    { name: 'The Frog', image: 'https://i.pinimg.com/originals/30/f5/33/30f533e9bd9e348afdd7d03d07250d37.jpg', human: false, description: 'Pet of Greg, given many different names', posterid: 2 },
]

const posts = [
    { title: 'My favorite quote', body: 'Aint that just the way', authorid: 1 },
    { title: 'Which frog name did you like the best?', body: 'I liked that Greg finally settled on Jason as the name, very funny', authorid: 3 }
]

module.exports = { users, characters, posts }