// Select all the tiles
const tiles = document.querySelectorAll('td');

// Check if a tile has an empty neighbour
const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1)
  || (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1)
  || (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1)
  || (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
};

// Move the tile
const moveTile = (element) => {
  // Select the empty place
  const emptyTile = document.querySelector('.empty');
  emptyTile.innerHTML = element.innerHTML;
  emptyTile.classList.remove('empty');
  element.innerHTML = '';
  element.classList.add('empty');
};

const checkIfPlayerWins = (tiles) => {
  // TODO: Check if player has won
  const winTiles = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  const results = [];
  tiles.forEach((tile) => {
    results.push(tile.innerText);
  });
  if (results.join() === winTiles) {
    alert("You won 🎸!");
  }
};

// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins(tiles);
    }
  });
});
