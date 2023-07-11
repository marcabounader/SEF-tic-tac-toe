var player=0;
btn_1 = document.getElementById("btn-1");
btn_2 = document.getElementById("btn-2");
btn_3 = document.getElementById("btn-3");
btn_4 = document.getElementById("btn-4");
btn_5 = document.getElementById("btn-5");
btn_6 = document.getElementById("btn-6");
btn_7 = document.getElementById("btn-7");
btn_8 = document.getElementById("btn-8");
btn_9 = document.getElementById("btn-9");


get_player_one = () => sessionStorage.getItem('player_one');

get_player_two = () => sessionStorage.getItem('player_two');
player_entry = () =>{
    sessionStorage.setItem('player_one',document.getElementById('first-player').value);
    sessionStorage.setItem('player_two',document.getElementById('second-player').value);
    document.getElementById('player-content').innerText=`${get_player_one()}'s turn!`;
};

player_victory = () => {
    btn_1_value = document.getElementById("btn-1").innerText;
    btn_2_value = document.getElementById("btn-2").innerText;
    btn_3_value = document.getElementById("btn-3").innerText;
    btn_4_value = document.getElementById("btn-4").innerText;
    btn_5_value = document.getElementById("btn-5").innerText;
    btn_6_value = document.getElementById("btn-6").innerText;
    btn_7_value = document.getElementById("btn-7").innerText;
    btn_8_value = document.getElementById("btn-8").innerText;
    btn_9_value = document.getElementById("btn-9").innerText;

    if ((btn_1_value == 'x' || btn_1_value == 'X') && (btn_2_value == 'x' ||
    btn_2_value == 'X') && (btn_3_value == 'x' || btn_3_value == 'X')) {
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;

    btn_1.style.color = "red";
    btn_2.style.color = "red";
    btn_3.style.color = "red";
    return true;
}
else if ((btn_1_value == 'x' || btn_1_value == 'X') && (btn_4_value == 'x' ||
    btn_4_value == 'X') && (btn_7_value == 'x' || btn_7_value == 'X')) {
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;

    btn_1.style.color = "red";
    btn_4.style.color = "red";
    btn_7.style.color = "red";
    return true;

}
else if ((btn_7_value == 'x' || btn_7_value == 'X') && (btn_8_value == 'x' ||
    btn_8_value == 'X') && (btn_9_value == 'x' || btn_9_value == 'X')) {

    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;

    btn_7.style.color = "red";
    btn_8.style.color = "red";
    btn_9.style.color = "red";
    return true;

}
else if ((btn_3_value == 'x' || btn_3_value == 'X') && (btn_6_value == 'x' ||
    btn_6_value == 'X') && (btn_9_value == 'x' || btn_9_value == 'X')) {

    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;

    btn_3.style.color = "red";
    btn_6.style.color = "red";
    btn_9.style.color = "red";
    return true;

}
else if ((btn_1_value == 'x' || btn_1_value == 'X') && (btn_5_value == 'x' ||
    btn_5_value == 'X') && (btn_9_value == 'x' || btn_9_value == 'X')) {
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;

    btn_1.style.color = "red";
    btn_5.style.color = "red";
    btn_9.style.color = "red";
    return true;

}
else if ((btn_3_value == 'x' || btn_3_value == 'X') && (btn_5_value == 'x' ||
    btn_5_value == 'X') && (btn_7_value == 'x' || btn_7_value == 'X')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;

    btn_3.style.color = "red";
    btn_5.style.color = "red";
    btn_7.style.color = "red";
    return true;

}
else if ((btn_2_value == 'x' || btn_2_value == 'X') && (btn_5_value == 'x' ||
    btn_5_value == 'X') && (btn_8_value == 'x' || btn_8_value == 'X')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_9.disabled = true;

    btn_2.style.color = "red";
    btn_5.style.color = "red";
    btn_8.style.color = "red";
    return true;
}
else if ((btn_4_value == 'x' || btn_4_value == 'X') && (btn_5_value == 'x' ||
    btn_5_value == 'X') && (btn_6_value == 'x' || btn_6_value == 'X')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;

    btn_4.style.color = "red";
    btn_5.style.color = "red";
    btn_6.style.color = "red";
    return true;

}

else if ((btn_1_value == '0' || btn_1_value == '0') && (btn_2_value == '0' ||
    btn_2_value == '0') && (btn_3_value == '0' || btn_3_value == '0')) {
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;

    btn_1.style.color = "red";
    btn_2.style.color = "red";
    btn_3.style.color = "red";
    return true;

}
else if ((btn_1_value == '0' || btn_1_value == '0') && (btn_4_value == '0' ||
    btn_4_value == '0') && (btn_7_value == '0' || btn_7_value == '0')) {
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;

    btn_1.style.color = "red";
    btn_4.style.color = "red";
    btn_7.style.color = "red";
}
else if ((btn_7_value == '0' || btn_7_value == '0') && (btn_8_value == '0' ||
    btn_8_value == '0') && (btn_9_value == '0' || btn_9_value == '0')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;

    btn_7.style.color = "red";
    btn_8.style.color = "red";
    btn_9.style.color = "red";
    return true;

}
else if ((btn_3_value == '0' || btn_3_value == '0') && (btn_6_value == '0' ||
    btn_6_value == '0') && (btn_9_value == '0' || btn_9_value == '0')) {

    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_3.style.color = "red";
    btn_6.style.color = "red";
    btn_9.style.color = "red";
    return true;

}
else if ((btn_1_value == '0' || btn_1_value == '0') && (btn_5_value == '0' ||
    btn_5_value == '0') && (btn_9_value == '0' || btn_9_value == '0')) {

    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;

    btn_1.style.color = "red";
    btn_5.style.color = "red";
    btn_9.style.color = "red";
    return true;

}
else if ((btn_3_value == '0' || btn_3_value == '0') && (btn_5_value == '0' ||
    btn_5_value == '0') && (btn_7_value == '0' || btn_7_value == '0')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;

    btn_3.style.color = "red";
    btn_5.style.color = "red";
    btn_7.style.color = "red";
    return true;

}
else if ((btn_2_value == '0' || btn_2_value == '0') && (btn_5_value == '0' ||
    btn_5_value == '0') && (btn_8_value == '0' || btn_8_value == '0')) {
    btn_1.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_9.disabled = true;

    btn_2.style.color = "red";
    btn_5.style.color = "red";
    btn_8.style.color = "red";
    return true;

}
else if ((btn_4_value == '0' || btn_4_value == '0') && (btn_5_value == '0' ||
    btn_5_value == '0') && (btn_6_value == '0' || btn_6_value == '0')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;

    btn_4.style.color = "red";
    btn_5.style.color = "red";
    btn_6.style.color = "red";
    return true;

}


else if((btn_1_value == 'X' || btn_1_value == '0') && (btn_2_value == 'X'
    || btn_2_value == '0') && (btn_3_value == 'X' || btn_3_value == '0') &&
    (btn_4_value == 'X' || btn_4_value == '0') && (btn_5_value == 'X' ||
    btn_5_value == '0') && (btn_6_value == 'X' || btn_6_value == '0') &&
    (btn_7_value == 'X' || btn_7_value == '0') && (btn_8_value == 'X' ||
    btn_8_value == '0') && (btn_9_value == 'X' || btn_9_value == '0')) {
    document.getElementById('player-content').innerText='Tie!';
    return false;
}

}

document.getElementById('wrapper').addEventListener('click', (e) =>{
    if (player == 0) {
        e.target.textContent = "0";
        e.target.disabled = true;
        e.target.classList+=" active-1"
        player = 1;
        let player_name=get_player_one();
        if (player_victory()){
            document.getElementById('player-content').innerText=`${player_name} won!`;

        } else{
            document.getElementById('player-content').innerText=`${player_name}'s turn!`;
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


