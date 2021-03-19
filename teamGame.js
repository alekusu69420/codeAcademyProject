const team = {
  _players: [{
    firstName: `Alex`,
    lastName: `Tur`,
    age: 23},
  {
    firstName: `John`,
    lastName: `Ada`,
    age: 21},
  {
    firstName: `Henri`,
    lastName: `Mato`,
    age: 29},

  ],
  _games: [{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27},

  {
  opponent: 'Tiger',
  teamPoints: 25,
  opponentPoints: 99},

  {
  opponent: 'BTC',
  teamPoints: 420,
  opponentPoints: 69

  }],

  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },

  addPlayer(firstName,lastName,age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this._players.push(player)
  },

  addGame(opponent,teamPoints,opponentPoints){
    let game = {
      opponnent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
   this._games.push(game);
  },
};
team.addPlayer(`stephan`,`Curry`,30);
team.addPlayer(`Lisa`,`Maska`,19);
team.addPlayer(`John`,`Lopez`,51);

team.addGame(`Red`,55,64);
team.addGame(`blueaaa`,1,64);
team.addGame(`To Rekt`,420,69);
team.addGame(`Sexy Bunny`,69,64);

console.log(team)
