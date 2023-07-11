var player=0;
var player_one="";
var player_two="";

get_player_one = () => sessionStorage.getItem('player_one');

get_player_two = () => sessionStorage.getItem('player_two');
player_entry = () =>{
    sessionStorage.setItem('player_one',document.getElementById('first-player').value);
    sessionStorage.setItem('player_two',document.getElementById('second-player').value);
    document.getElementById('player-content').innerText=`${get_player_one()}'s turn!`;
};

document.getElementById('wrapper').addEventListener('click', (e) =>{
    console.log(e);
    if (player == 0) {
        e.target.textContent = "0";
        e.target.disabled = true;
        e.target.classList+=" active-1"
        player = 1;
        document.getElementById('player-content').innerText=`${get_player_two()}'s turn!`;
    }
    else {
        e.target.textContent = "X";
        e.target.disabled = true;
        e.target.classList+=" active-2";
        player = 0;
        document.getElementById('player-content').innerText=`${get_player_one()}'s turn!`;
    }
});


