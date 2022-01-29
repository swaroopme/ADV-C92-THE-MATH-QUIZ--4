var player1name;
var player2name;

function addUser(){

    player1name=document.getElementById("player1_name").value;
    localStorage.setItem("player1name",player1name);
    player2name=document.getElementById("player2_name").value;
    localStorage.setItem("player2name",player2name);
    
    window.location="game_page.html";

}