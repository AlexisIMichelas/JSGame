document.addEventListener('DOMContentLoaded', function () {
    const map = document.getElementById('map');
    const player = document.getElementById('player');
  
    let playerX = 0;
    let playerY = 0;
  
    function updatePlayerPosition() {
      player.style.left = playerX + 'px';
      player.style.top = playerY + 'px';
    }
  
    document.addEventListener('keydown', function (event) {
      switch (event.key) {
        case 'ArrowUp':
          playerY -= 10;
          break;
        case 'ArrowDown':
          playerY += 10;
          break;
        case 'ArrowLeft':
          playerX -= 10;
          break;
        case 'ArrowRight':
          playerX += 10;
          break;
      }
  
      // Vérifier que le joueur ne sort pas de la carte
      playerX = Math.max(0, Math.min(map.clientWidth - player.clientWidth, playerX));
      playerY = Math.max(0, Math.min(map.clientHeight - player.clientHeight, playerY));
  
      updatePlayerPosition();
    });
  });
  