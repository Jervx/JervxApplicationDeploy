/*
 Copyright © Jerbee Paragas 1/31/2020 

 ATTENTION: -------------------------------------------------------------------------------------
    if you opened this source code your IP will be
    tracked by GITHUB. Don't worry as long as you are not copying
    the code, screenshot, you will be fine.
 
 Message: 
    This is my own algorithm and you should not copy 
    it without my concent. 
    NOTE: You should not copy comeone else's code!
 
<important>--------------------------------------------------------------------------------------
 LICENSE: Apache License 2.0

 A permissive license whose main conditions require preservation of copyright and license notices. 
 Contributors provide an express grant of patent rights. Licensed works, modifications, and larger
 works may be distributed under different terms and without source code.
<!important!>-------------------------------------------------------------------------------------
 */
function startDumb(){en();mode = 1;gamemode = 0;outContent();}function p1p2(){en();gamemode = -1;outContent();}function outContent(){document.getElementById("scoreBoard").innerHTML = '<p id="turns">'+(gamemode == -1 ? "P1 turn!" : "")+'</p><br><p class="winnerBoard" id="winStat">--</p><p id="xScore" class="playerXScore" value="0">Player X: 0</p><p id="oScore" class="playerOScore" value="0">Player O: 0</p><button id="again" onclick="again()">Play Again</button><br><button id="reset" onclick="reset()">Reset Game</button><br><button id="menu" onclick="menu()" style="width:100%">Main Menu</button>';upd();}function menu(){gamemode = -1;reset();dis();document.getElementById("scoreBoard").innerHTML = '<p id="coming_soon" style ="font-size:30px;padding-bottom:20px;text-align: center;">Choose Game Mode</p><button id="options1" onclick="startDumb()" style="width:100%">Human Against dumbAI</button><br><button id="options2" onclick="p1p2()"  style="width:100%">Human Vs Human</button><br><br><center><p id="coming_soon" style ="font-size:14px">▓  UNBEATABLE AI Comming Soon!  ▓</p></center>'}function dis(){for (let x = 1; x <= 9; x++) {let childr = document.getElementsByClassName("b" + x);childr[0].disabled = true;}}function en(){for (let x = 1; x <= 9; x++) {let childr = document.getElementsByClassName("b" + x);childr[0].disabled = false;}}
/*
 Copyright © Jerbee Paragas 1/31/2020 

 ATTENTION: -------------------------------------------------------------------------------------
    if you opened this source code your IP will be
    tracked by GITHUB. Don't worry as long as you are not copying
    the code, screenshot, you will be fine.
 
 Message: 
    This is my own algorithm and you should not copy 
    it without my concent. 
    NOTE: You should not copy comeone else's code!
 
<important>--------------------------------------------------------------------------------------
 LICENSE: Apache License 2.0

 A permissive license whose main conditions require preservation of copyright and license notices. 
 Contributors provide an express grant of patent rights. Licensed works, modifications, and larger
 works may be distributed under different terms and without source code.
<!important!>-------------------------------------------------------------------------------------
 */