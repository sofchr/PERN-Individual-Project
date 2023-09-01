
const users = [
    { username: 'sofiecodes', password: 'ilovemycat', name: 'Sofie Christensen' },
    { username: 'bennieboi', password: 'ilovebroccoli', name: 'Bennie Tchop' }
]

const characters = [
    { name: 'Greg', human: true, description: 'Younger brother of Wirt' },
    { name: 'Wirt', human: true, description: 'Older brother of Greg' },
    { name: 'The Woodsman', human: true, description: 'At the beck and call of The Beast' },
    { name: 'The Beast', human: false, description: 'Uses the Woodsman to keep his soul alive' },
    { name: 'Beatrice', human: false, description: 'Bluebird, a friend to Greg and Wirt' },
    { name: 'The Frog', human: false, description: 'Pet of Greg, given many different names' },
]

const posts = [
    { title: 'My favorite quote', body: 'Aint that just the way', authorid: 1 },
    { title: 'Which frog name did you like the best?', body: 'I liked that Greg finally settled on Jason as the name, very funny', authorid: 2 }
]

module.exports = { users, characters, posts }