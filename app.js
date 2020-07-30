// globals 
const GAME_BOARD = [];
let POINTS = 0;
let TAIL_LENGTH = 0;

// selectors
const board = document.querySelector('.board');
const score = document.querySelector('.score');

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
    let x = Math.floor(Math.random() * GAME_BOARD.length);
    let y = Math.floor(Math.random() * GAME_BOARD.length);
    const gemTile = document.createElement('div');
    const tile = board.children[x].children[y];
    if(tile.innerHTML){
      i--;
      continue;
    } else {
      const gems = ['diamond', 'ruby', 'emerald'];
      gemTile.classList.add('gem', `${gems[Math.floor(Math.random() * 3)]}`);
      tile.append(gemTile);
    }
  }
}
const spawnPlayer = (x, y) => {
  const tile = board.children[x].children[y];
  const playerTile = document.createElement('div');
  playerTile.className = 'player'
  tile.prepend(playerTile);
  return [x, y];
}
const movePlayer = (e) => {
  const position = startPos;
  const player = document.querySelector('.player');
  const sibling = player.nextSibling;
  if(sibling){
    sibling.remove();
  }
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
document.addEventListener('keydown', (e) => {
  movePlayer(e);
  const player = document.querySelector('.player');
  const gem = player.nextSibling;
  if(gem){
    gem.remove();
    TAIL_LENGTH++;
    switch(gem.classList[1]){
      case 'diamond':
        POINTS += 50;
        score.innerHTML = POINTS;
        break;
      case 'ruby':
        POINTS += 25;
        score.innerHTML = POINTS;
        break;
      case 'emerald':
        POINTS += 10;
        score.innerHTML = POINTS;
        break;
    }
  }
});

// calls
drawBoard(15, 15);
const startPos = spawnPlayer(14, 0);
generateGems(10);