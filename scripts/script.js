var player=0;
var tie=false;
var btn_1 = document.getElementById("btn-1");
var btn_2 = document.getElementById("btn-2");
var btn_3 = document.getElementById("btn-3");
var btn_4 = document.getElementById("btn-4");
var btn_5 = document.getElementById("btn-5");
var btn_6 = document.getElementById("btn-6");
var btn_7 = document.getElementById("btn-7");
var btn_8 = document.getElementById("btn-8");
var btn_9 = document.getElementById("btn-9");
var name_1_display= document.getElementById("first-name");
var name_2_display= document.getElementById("second-name");
var first_score=document.getElementById("first-score");
var second_score=document.getElementById("second-score");
var count_score_1=0;
var count_score_2=0;
var line_list=document.getElementsByClassName('line');
get_player_one = () => sessionStorage.getItem('player_one');

get_player_two = () => sessionStorage.getItem('player_two');

player_entry = () =>{
    sessionStorage.setItem('player_one',document.getElementById('first-player').value);
    sessionStorage.setItem('player_two',document.getElementById('second-player').value);
    if (!get_player_one() || !get_player_two()){
        document.getElementById('result').innerText=`Please enter the player names to proceed`;
    } else{
        btn_1.disabled = false;
        btn_2.disabled = false;
        btn_3.disabled = false;
        btn_4.disabled = false;
        btn_5.disabled = false;
        btn_6.disabled = false;
        btn_7.disabled = false;
        btn_8.disabled = false;
        btn_9.disabled = false;
        btn_1.innerText = '';
        btn_2.innerText = '';
        btn_3.innerText = '';
        btn_4.innerText = '';
        btn_5.innerText = '';
        btn_6.innerText = '';
        btn_7.innerText = '';
        btn_8.innerText = '';
        btn_9.innerText = '';
        name_1_display.innerText=get_player_one();
        name_2_display.innerText=get_player_two();
        document.getElementById('result').innerText=`${get_player_one()}'s turn!`;
        document.getElementById('first-player').value="";
        document.getElementById('second-player').value="";
        first_score.innerText='0';
        second_score.innerText='0';
        count_score_1=0;
        count_score_2=0;
        for(i=0;i<line_list.length;i++){
            line_list[i].style.display="none";
        }
        btn_1.classList.remove('active-1','win');
        btn_1.classList.remove('active-2','win');
        btn_2.classList.remove('active-1','win');
        btn_2.classList.remove('active-2','win');
        btn_3.classList.remove('active-1','win');
        btn_3.classList.remove('active-2','win');
        btn_4.classList.remove('active-1','win');
        btn_4.classList.remove('active-2','win');
        btn_5.classList.remove('active-1','win');
        btn_5.classList.remove('active-2','win');
        btn_6.classList.remove('active-1','win');
        btn_6.classList.remove('active-2','win');
        btn_7.classList.remove('active-1','win');
        btn_7.classList.remove('active-2','win');
        btn_8.classList.remove('active-1','win');
        btn_8.classList.remove('active-2','win');
        btn_9.classList.remove('active-1','win');
        btn_9.classList.remove('active-2','win');
    }
};

clear_session = () =>{
    document.getElementById('first-player').value="";
    document.getElementById('second-player').value="";
}

reset = () => {
    btn_1.disabled = false;
    btn_2.disabled = false;
    btn_3.disabled = false;
    btn_4.disabled = false;
    btn_5.disabled = false;
    btn_6.disabled = false;
    btn_7.disabled = false;
    btn_8.disabled = false;
    btn_9.disabled = false;
    btn_1.innerText = '';
    btn_2.innerText = '';
    btn_3.innerText = '';
    btn_4.innerText = '';
    btn_5.innerText = '';
    btn_6.innerText = '';
    btn_7.innerText = '';
    btn_8.innerText = '';
    btn_9.innerText = '';
    first_score.innerText='';
    second_score.innerText='';
    count_score_1=0;
    count_score_2=0;
    document.getElementById('result').innerText=`${get_player_one()}'s turn!`;
    player=0;
    for(i=0;i<line_list.length;i++){
        line_list[i].style.display="none";
    }
    btn_1.classList.remove('active-1','win');
    btn_1.classList.remove('active-2','win');
    btn_2.classList.remove('active-1','win');
    btn_2.classList.remove('active-2','win');
    btn_3.classList.remove('active-1','win');
    btn_3.classList.remove('active-2','win');
    btn_4.classList.remove('active-1','win');
    btn_4.classList.remove('active-2','win');
    btn_5.classList.remove('active-1','win');
    btn_5.classList.remove('active-2','win');
    btn_6.classList.remove('active-1','win');
    btn_6.classList.remove('active-2','win');
    btn_7.classList.remove('active-1','win');
    btn_7.classList.remove('active-2','win');
    btn_8.classList.remove('active-1','win');
    btn_8.classList.remove('active-2','win');
    btn_9.classList.remove('active-1','win');
    btn_9.classList.remove('active-2','win');
}
play_again = () => {
    btn_1.disabled = false;
    btn_2.disabled = false;
    btn_3.disabled = false;
    btn_4.disabled = false;
    btn_5.disabled = false;
    btn_6.disabled = false;
    btn_7.disabled = false;
    btn_8.disabled = false;
    btn_9.disabled = false;
    btn_1.innerText = '';
    btn_2.innerText = '';
    btn_3.innerText = '';
    btn_4.innerText = '';
    btn_5.innerText = '';
    btn_6.innerText = '';
    btn_7.innerText = '';
    btn_8.innerText = '';
    btn_9.innerText = '';
    document.getElementById('result').innerText=`${get_player_one()}'s turn!`;
    player=0;
    for(i=0;i<line_list.length;i++){
        line_list[i].style.display="none";
    }
    btn_1.classList.remove('active-1','win');
    btn_1.classList.remove('active-2','win');
    btn_2.classList.remove('active-1','win');
    btn_2.classList.remove('active-2','win');
    btn_3.classList.remove('active-1','win');
    btn_3.classList.remove('active-2','win');
    btn_4.classList.remove('active-1','win');
    btn_4.classList.remove('active-2','win');
    btn_5.classList.remove('active-1','win');
    btn_5.classList.remove('active-2','win');
    btn_6.classList.remove('active-1','win');
    btn_6.classList.remove('active-2','win');
    btn_7.classList.remove('active-1','win');
    btn_7.classList.remove('active-2','win');
    btn_8.classList.remove('active-1','win');
    btn_8.classList.remove('active-2','win');
    btn_9.classList.remove('active-1','win');
    btn_9.classList.remove('active-2','win');
}
player_victory = () => {

    if ((btn_1.innerText == 'x' || btn_1.innerText == 'X') && (btn_2.innerText == 'x' ||
    btn_2.innerText == 'X') && (btn_3.innerText == 'x' || btn_3.innerText == 'X')) {
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;
    btn_1.classList.add('win');
    btn_2.classList.add('win');
    btn_3.classList.add('win');
    console.log(document.getElementsByClassName('top-horizontal-svg'));
    document.getElementsByClassName('top-horizontal-svg')[0].style.display="block";
    return true;
}
else if ((btn_1.innerText == 'x' || btn_1.innerText == 'X') && (btn_4.innerText == 'x' ||
    btn_4.innerText == 'X') && (btn_7.innerText == 'x' || btn_7.innerText == 'X')) {
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;
    btn_1.classList.add('win');
    btn_4.classList.add('win');
    btn_7.classList.add('win');
    console.log(document.getElementsByClassName('left-vertical-svg'));
    document.getElementsByClassName('left-vertical-svg')[0].style.display="block";
    return true;

}
else if ((btn_7.innerText == 'x' || btn_7.innerText == 'X') && (btn_8.innerText == 'x' ||
    btn_8.innerText == 'X') && (btn_9.innerText == 'x' || btn_9.innerText == 'X')) {

    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;
    btn_7.classList.add('win');
    btn_8.classList.add('win');
    btn_9.classList.add('win');
    console.log(document.getElementsByClassName('bottom-horizontal-svg'));
    document.getElementsByClassName('bottom-horizontal-svg')[0].style.display="block";
    return true;

}
else if ((btn_3.innerText == 'x' || btn_3.innerText == 'X') && (btn_6.innerText == 'x' ||
    btn_6.innerText == 'X') && (btn_9.innerText == 'x' || btn_9.innerText == 'X')) {

    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_3.classList.add('win');
    btn_6.classList.add('win');
    btn_9.classList.add('win');
    console.log(document.getElementsByClassName('right-vertical-svg'));
    document.getElementsByClassName('right-vertical-svg')[0].style.display="block";
    return true;

}
else if ((btn_1.innerText == 'x' || btn_1.innerText == 'X') && (btn_5.innerText == 'x' ||
    btn_5.innerText == 'X') && (btn_9.innerText == 'x' || btn_9.innerText == 'X')) {
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_1.classList.add('win');
    btn_5.classList.add('win');
    btn_9.classList.add('win');
    console.log(document.getElementsByClassName('diagonal-left-svg'));
    document.getElementsByClassName('diagonal-left-svg')[0].style.display="block";
    return true;

}
else if ((btn_3.innerText == 'x' || btn_3.innerText == 'X') && (btn_5.innerText == 'x' ||
    btn_5.innerText == 'X') && (btn_7.innerText == 'x' || btn_7.innerText == 'X')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;
    btn_3.classList.add('win');
    btn_5.classList.add('win');
    btn_7.classList.add('win');
    console.log(document.getElementsByClassName('diagonal-right-svg'));
    document.getElementsByClassName('diagonal-right-svg')[0].style.display="block";
    return true;

}
else if ((btn_2.innerText == 'x' || btn_2.innerText == 'X') && (btn_5.innerText == 'x' ||
    btn_5.innerText == 'X') && (btn_8.innerText == 'x' || btn_8.innerText == 'X')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_9.disabled = true;
    console.log(btn_2.classList);
    btn_2.classList.add('win');
    console.log(btn_2.classList);
    btn_5.classList.add('win');
    btn_8.classList.add('win');
    console.log(btn_2);
    document.getElementsByClassName('middle-vertical-svg')[0].style.display="block";
    return true;
}
else if ((btn_4.innerText == 'x' || btn_4.innerText == 'X') && (btn_5.innerText == 'x' ||
    btn_5.innerText == 'X') && (btn_6.innerText == 'x' || btn_6.innerText == 'X')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;
    btn_4.classList.add('win');
    btn_5.classList.add('win');
    btn_6.classList.add('win');
    console.log(document.getElementsByClassName('middle-horizontal-svg'));
    document.getElementsByClassName('middle-horizontal-svg')[0].style.display="block";
    return true;

}

else if ((btn_1.innerText == '0' || btn_1.innerText == '0') && (btn_2.innerText == '0' ||
    btn_2.innerText == '0') && (btn_3.innerText == '0' || btn_3.innerText == '0')) {
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;
    btn_1.classList.add('win');
    btn_2.classList.add('win');
    btn_3.classList.add('win');
    console.log(document.getElementsByClassName('top-horizontal-svg'));
    document.getElementsByClassName('top-horizontal-svg')[0].style.display="block";
    return true;

}
else if ((btn_1.innerText == '0' || btn_1.innerText == '0') && (btn_4.innerText == '0' ||
    btn_4.innerText == '0') && (btn_7.innerText == '0' || btn_7.innerText == '0')) {
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;
    btn_1.classList.add('win');
    btn_4.classList.add('win');
    btn_7.classList.add('win');
    console.log(document.getElementsByClassName('left-vertical-svg'));
    document.getElementsByClassName('left-vertical-svg')[0].style.display="block";
    return true;
}
else if ((btn_7.innerText == '0' || btn_7.innerText == '0') && (btn_8.innerText == '0' ||
    btn_8.innerText == '0') && (btn_9.innerText == '0' || btn_9.innerText == '0')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_6.disabled = true;
    btn_7.classList.add('win');
    btn_8.classList.add('win');
    btn_9.classList.add('win');
    console.log(document.getElementsByClassName('bottom-horizontal-svg'));
    document.getElementsByClassName('bottom-horizontal-svg')[0].style.display="block";
    return true;

}
else if ((btn_3.innerText == '0' || btn_3.innerText == '0') && (btn_6.innerText == '0' ||
    btn_6.innerText == '0') && (btn_9.innerText == '0' || btn_9.innerText == '0')) {

    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_4.disabled = true;
    btn_5.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_3.classList.add('win');
    btn_6.classList.add('win');
    btn_9.classList.add('win');
    console.log(document.getElementsByClassName('right-vertical-svg'));
    document.getElementsByClassName('right-vertical-svg')[0].style.display="block";
    return true;

}
else if ((btn_1.innerText == '0' || btn_1.innerText == '0') && (btn_5.innerText == '0' ||
    btn_5.innerText == '0') && (btn_9.innerText == '0' || btn_9.innerText == '0')) {

    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_1.classList.add('win');
    btn_5.classList.add('win');
    btn_9.classList.add('win');
    console.log(document.getElementsByClassName('diagonal-left-svg'));
    document.getElementsByClassName('diagonal-left-svg')[0].style.display="block";
    return true;

}
else if ((btn_3.innerText == '0' || btn_3.innerText == '0') && (btn_5.innerText == '0' ||
    btn_5.innerText == '0') && (btn_7.innerText == '0' || btn_7.innerText == '0')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;
    btn_3.classList.add('win');
    btn_5.classList.add('win');
    btn_7.classList.add('win');
    console.log(document.getElementsByClassName('diagonal-right-svg'));
    document.getElementsByClassName('diagonal-right-svg')[0].style.display="block";
    return true;

}
else if ((btn_2.innerText == '0' || btn_2.innerText == '0') && (btn_5.innerText == '0' ||
    btn_5.innerText == '0') && (btn_8.innerText == '0' || btn_8.innerText == '0')) {
    btn_1.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
    btn_6.disabled = true;
    btn_7.disabled = true;
    btn_9.disabled = true;
    btn_2.classList.add('win');
    btn_5.classList.add('win');
    btn_8.classList.add('win');
    console.log(document.getElementsByClassName('middle-vertical-svg'));
    document.getElementsByClassName('middle-vertical-svg')[0].style.display="block";
    return true;

}
else if ((btn_4.innerText == '0' || btn_4.innerText == '0') && (btn_5.innerText == '0' ||
    btn_5.innerText == '0') && (btn_6.innerText == '0' || btn_6.innerText == '0')) {
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_7.disabled = true;
    btn_8.disabled = true;
    btn_9.disabled = true;
    btn_4.classList.add('win');
    btn_5.classList.add('win');
    btn_6.classList.add('win');
    console.log(document.getElementsByClassName('middle-horizontal-svg'));
    document.getElementsByClassName('middle-horizontal-svg')[0].style.display="block";
    return true;

}


else if((btn_1.innerText == 'X' || btn_1.innerText == '0') && (btn_2.innerText == 'X'
    || btn_2.innerText == '0') && (btn_3.innerText == 'X' || btn_3.innerText == '0') &&
    (btn_4.innerText == 'X' || btn_4.innerText == '0') && (btn_5.innerText == 'X' ||
    btn_5.innerText == '0') && (btn_6.innerText == 'X' || btn_6.innerText == '0') &&
    (btn_7.innerText == 'X' || btn_7.innerText == '0') && (btn_8.innerText == 'X' ||
    btn_8.innerText == '0') && (btn_9.innerText == 'X' || btn_9.innerText == '0')) {
    tie=true;
    return false;
}

}

document.getElementById('wrapper').addEventListener('click', (e) =>{
    if (player == 0 && (get_player_one() || get_player_two())) {
        e.target.textContent = "0";
        e.target.disabled = true;
        e.target.classList+=" active-1"
        player = 1;
        if (player_victory()){
            document.getElementById('result').innerText=`${get_player_one()} won!`;
            first_score.innerText=++count_score_1;
        }
        else if(tie){
            document.getElementById('result').innerText='Tie!';
        } else{
            document.getElementById('result').innerText=`${get_player_two()}'s turn!`;
        }
    }
    else if (player == 1 && (get_player_one() || get_player_two())){
        e.target.textContent = "X";
        e.target.disabled = true;
        e.target.classList+=" active-2";
        player = 0;
        if (player_victory()){
            document.getElementById('result').innerText=`${get_player_two()} won!`;
            second_score.innerText=++count_score_2;
        } else if (tie){
            document.getElementById('result').innerText='Tie!';
        } else {
            document.getElementById('result').innerText=`${get_player_one()}'s turn!`;
        }
    } else{
        sessionStorage.clear();
        document.getElementById('result').innerText=`Please enter the player names to proceed`;

    }
});


