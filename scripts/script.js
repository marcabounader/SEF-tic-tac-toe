var player=0;



get_player_one = () => sessionStorage.getItem('player_one');

get_player_two = () => sessionStorage.getItem('player_two');
player_entry = () =>{
    sessionStorage.setItem('player_one',document.getElementById('first-player').value);
    sessionStorage.setItem('player_two',document.getElementById('second-player').value);
    document.getElementById('player-content').innerText=`${get_player_one()}'s turn!`;
};

player_victory = () => {
    btn_1 = document.getElementById("btn-1").innerText;
    btn_2 = document.getElementById("btn-2").innerText;
    btn_3 = document.getElementById("btn-3").innerText;
    btn_4 = document.getElementById("btn-4").innerText;
    btn_5 = document.getElementById("btn-5").innerText;
    btn_6 = document.getElementById("btn-6").innerText;
    btn_7 = document.getElementById("btn-7").innerText;
    btn_8 = document.getElementById("btn-8").innerText;
    btn_9 = document.getElementById("btn-9").innerText;

    }

document.getElementById('wrapper').addEventListener('click', (e) =>{
    if (player == 0) {
        e.target.textContent = "0";
        e.target.disabled = true;
        e.target.classList+=" active-1"
        player = 1;
        if (player_victory()){
            document.getElementById('player-content').innerText=`${get_player_one()} won!`;

        } else{
            document.getElementById('player-content').innerText=`${get_player_two()}'s turn!`;
        }
    }
    else {
        e.target.textContent = "X";
        e.target.disabled = true;
        e.target.classList+=" active-2";
        player = 0;
        document.getElementById('player-content').innerText=`${get_player_one()}'s turn!`;
        if (player_victory()){
            document.getElementById('player-content').innerText=`${get_player_two()} won!`;
        } else{
            document.getElementById('player-content').innerText=`${get_player_one()}'s turn!`;
        }
    }
});


