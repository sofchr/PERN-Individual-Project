
const users = [
    { username: 'sofiecodes', password: 'ilovemycat' },
    { username: 'bennieboi', password: 'ilovebroccoli' },
    { username: 'girlwithnoname', password: 'whoisshe' }
]

const characters = [
    { name: 'Greg', image: 'https://images.squarespace-cdn.com/content/v1/583c906ebe659429d1106265/05e26a7a-5a7f-4ffa-a2a0-d8ff2479521f/gardenwallgreg.jpg', human: true, description: 'Younger brother of Wirt', posterid: 3 },
    { name: 'Wirt', image: 'https://practicaltyping.com/wp-content/uploads/2020/07/gardenwallwirt.png', human: true, description: 'Older brother of Greg', posterid: 3 },
    { name: 'The Woodsman', image: 'https://m.media-amazon.com/images/M/MV5BNDBhYTcyMWItNWRlMS00MmU1LWIyM2YtYmVkZjE1NWI5ZGRjXkEyXkFqcGdeQXVyMTAxOTUyOTAz._V1_.jpg', human: true, description: 'At the beck and call of The Beast', posterid: 2 },
    { name: 'The Beast', image: 'https://i.pinimg.com/736x/2d/0a/d4/2d0ad4e01e0799f37d81c090f4fcf9b2.jpg', human: false, description: 'Uses the Woodsman to keep his soul alive', posterid: 2 },
    { name: 'Beatrice', image: 'https://practicaltyping.com/wp-content/uploads/2020/07/beatrice.jpg', human: false, description: 'Bluebird, a friend to Greg and Wirt', posterid: 1 },
    { name: 'The Frog', image: 'https://i.pinimg.com/originals/30/f5/33/30f533e9bd9e348afdd7d03d07250d37.jpg', human: false, description: 'Pet of Greg, given many different names', posterid: 2 },
    { name: 'Sara', image: 'https://i.pinimg.com/1200x/5c/49/63/5c496342b23a0d092928c58a7f049215.jpg', human: true, description: 'Girl that Wirt has a crush on', posterid: 2 },
    { name: 'Jason Funderburker', image: 'https://i.redd.it/05edckrtf9c81.png', human: true, description: "Wirt's Nemesis", posterid: 1 },
    { name: 'Fred', image: 'https://m.media-amazon.com/images/M/MV5BYmZmYjBhYTUtNjQ1Yy00NDRjLTgyZTAtMzA0MGI2YTEzNWM3XkEyXkFqcGdeQXVyMzAwMjMyMjY@._V1_FMjpg_UX1000_.jpg', human: false, description: 'A talking horse who likes to steal things', posterid: 1 },
    { name: 'Enoch', image: 'https://m.media-amazon.com/images/M/MV5BOTdkMmQ1YTMtNWFjMC00MWE0LTk4NmQtZTNkZDk0NTIwY2U5XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg', human: false, description: 'The daunting leader of Pottsville', posterid: 1 }

]

const posts = [
    { title: 'My favorite quote', body: 'Aint that just the way', authorid: 1 },
    { title: 'Which frog name did you like the best?', body: 'I liked that Greg finally settled on Jason as the name, very funny', authorid: 3 }
]

module.exports = { users, characters, posts }