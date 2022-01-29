function send(){

    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;

    actal_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+"X"+number2+"</h4>";

    input_box="<br>Answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

}

question_turn = player1;
answer_turn = player2;

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if (answer_turn == "player1")
        {
            update_player1_score =player1score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player1_score =player1score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;   
        }

    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_quetion").innerHTML = "question_turn - " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_quetion").innerHTML = "question_turn - " + player1_name;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer_turn - " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer_turn - " + player1_name;
    }
}

