const Game = require('./gamesClass')

const leagueOfLegends = new Game(
  "League of Legends",
  "ranked",
  "host",
  "10/05",
  "23h00"
)

const readDeadRedemption = new Game(
  "Read Dead Redemption",
  "funny",
  "visitor",
  "15/05",
  "22h00"
)

const CSGO = new Game(
  "CS-GO",
  "ranked",
  "visitor",
  "16/05",
  "21h00"
)

module.exports = [leagueOfLegends, readDeadRedemption, CSGO]