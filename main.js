const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Sub-zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun', 'knife', 'stick'],
    attack: function(name) {
        console.log(name + " Fight...");
    }
}

const player2 = {
    player: 2,
    name: 'Liu kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['gun', 'knife', 'stick'],
    attack: function(name) {
        console.log(name + " Fight...");
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}
function createPlayer(playerObj) {

    const $player = createElement('div', 'player' + playerObj.player);
    const $progressBar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressBar.appendChild($name);
    $progressBar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressBar);
    $player.appendChild($character);

    return $player;

}

function changeHp(player) {
    const $playerLife = document.querySelector('.player' + player.player +' .life');
    player.hp -= Math.ceil(Math.random() * 20);

    console.log(`${player.name} : ${player.hp}hp`);

    if (player1.hp <= 0 || player2.hp <= 0) {
        player.hp = 0;
        $randomButton.disabled = true;
        player.player === 1 ? $arenas.appendChild(playerWins(player2.name)) : $arenas.appendChild(playerWins(player1.name));
    }

    $playerLife.style.width = player.hp + '%';
}


function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' loose';
    return $loseTitle;
}


function playerWins(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' wins';
    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
   changeHp(player1);
   changeHp(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));



