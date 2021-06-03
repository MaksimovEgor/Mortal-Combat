let player1 = {
    name: 'Sub-zero',
    hp: "100%",
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun', 'knife', 'stick'],
    attack: function() {
        console.log(player1.name + " " + "Fight...")
    }
}

let player2 = {
    name: 'Lu kan',
    hp: "100%",
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['gun', 'knife', 'stick'],
    attack: function() {
        console.log(player2.name + " " + "Fight...")
    }
}

const createPlayer = function(name, player) {
    const $player = document.createElement('div');
    $player.classList.add(name);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    $player.appendChild($progressBar);
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = player.hp;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = player.img;

    $character.appendChild($img);

    const $root = document.querySelector('.root');
    $root.appendChild($player);


    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);

}

createPlayer('player1', player1);
createPlayer('player2', player2);



