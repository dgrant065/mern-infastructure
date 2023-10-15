const API_KEY = process.env.API_KEY
const BASE_URL = 'https://api.rawg.io/api/games'

module.exports = {
    index, gameDetail
}

async function index(req, res) {
   try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}`)
    const games = await response.json()
    res.json(games.results)
   } catch(err) {
    res.status(400).json(err)
   }
}

async function gameDetail(req, res) {
    try {
        const response = await fetch(`${BASE_URL}/${req.params.id}?key=${API_KEY}`)
        const game = await response.json()
        console.log(game)
        res.json(game)
    } catch(err) {
        res.status(400).json(err)
    }
}