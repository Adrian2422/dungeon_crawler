// globals 
const GAME_BOARD = [];
// selectors
const board = document.querySelector('.board');

// functions
const drawBoard = (rows, tiles) => {
  for(let i = 0; i < rows; i++){
    const tileRow = document.createElement('div');
    tileRow.className = 'tile-row'
    GAME_BOARD.push([]);
    for(let j = 0; j < tiles; j++){
      GAME_BOARD[i].push([]);
      const tile = document.createElement('div');
      if(j === 0){
        tile.classList.add('tile', 'tile-clear');  
      } else {
        tile.className = 'tile';
      }
      tileRow.appendChild(tile);
    }
    board.appendChild(tileRow);
  }
}
const generateGems = (amount) => {
  for(let i = 0; i < amount; i++){
    let x = Math.floor(Math.random() * GAME_BOARD.length - 1) + 0;
    let y = Math.floor(Math.random() * GAME_BOARD.length - 1) + 0;
    console.log(x, y);
    const gemTile = document.createElement('div');
    const tile = board.children[x].children[y];
    gemTile.className = 'gem'
    tile.append(gemTile);
  }
}
const spawnPlayer = (x, y) => {
  const tile = board.children[x].children[y];
  const playerTile = document.createElement('div');
  playerTile.className = 'player'
  tile.append(playerTile);
  return [x, y];
}
const movePlayer = (e) => {
  const position = startPos;
  const player = document.querySelector('.player');
  if(e.keyCode === 38 && position[0] > 0){
    // up
      position[0]--;
      player.remove();
      spawnPlayer(...position);
  } else if(e.keyCode === 40 && position[0] < GAME_BOARD.length - 1){
    // down
    position[0]++;
    player.remove();
    spawnPlayer(...position);
  } else if (e.keyCode === 37 && position[1] > 0){
    // left
    position[1]--;
    player.remove();
    spawnPlayer(...position);
  } else if (e.keyCode === 39 && position[1] < GAME_BOARD[this.length].length - 1){
    // right
    position[1]++;
    player.remove();
    spawnPlayer(...position);
  }
}
// events
document.addEventListener('keydown', movePlayer);

// calls
drawBoard(15, 15);
const startPos = spawnPlayer(14, 0);
generateGems(10);