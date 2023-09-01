
const users = [
    { username: 'sofiecodes', password: 'ilovemycat', name: 'Sofie Christensen' },
    { username: 'bennieboi', password: 'ilovebroccoli', name: 'Bennie Tchop' },
    { username: 'girlwithnoname', password: 'whoisshe', name: 'Jane Doe' }
]

const characters = [
    { name: 'Greg', human: true, description: 'Younger brother of Wirt', posterid: 3 },
    { name: 'Wirt', human: true, description: 'Older brother of Greg', posterid: 3 },
    { name: 'The Woodsman', human: true, description: 'At the beck and call of The Beast', posterid: 2 },
    { name: 'The Beast', human: false, description: 'Uses the Woodsman to keep his soul alive', posterid: 2 },
    { name: 'Beatrice', human: false, description: 'Bluebird, a friend to Greg and Wirt', posterid: 1 },
    { name: 'The Frog', human: false, description: 'Pet of Greg, given many different names', posterid: 2 },
]

const posts = [
    { title: 'My favorite quote', body: 'Aint that just the way', authorid: 1 },
    { title: 'Which frog name did you like the best?', body: 'I liked that Greg finally settled on Jason as the name, very funny', authorid: 3 }
]

module.exports = { users, characters, posts }