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
dis();function check() {for (let x = 0; x < 3; x++) {let sum = sets[x][0] + sets[x][1] + sets[x][2];let sum2 = sets[0][x] + sets[1][x] + sets[2][x];let sum3 = sets[0][0] + sets[1][1] + sets[2][2];let sum4 = sets[2][0] + sets[1][1] + sets[0][2];if (sum === 3 || sum2 === 3 || sum4 === 3 || sum3 === 3) {document.getElementById("winStat").innerHTML = (gamemode != -1 )? "Human Wins!" : "Player 1 Wins!";document.getElementById("turns").innerHTML = "";xscore++;upd();dis();win = true;return true;}   if (sum === 30 || sum2 === 30 || sum3 === 30 || sum4 === 30) {document.getElementById("winStat").innerHTML = gamemode != -1 ? "AI Wins" : " Player 2 Wins!";document.getElementById("turns").innerHTML = "";yscore++;upd();dis();win = true;return true;}}if (avail() == false) {tie();document.getElementById("again").disabled = false;return true;}return false;}function btCl(event) {document.getElementById("turns").innerHTML = gamemode === -1 ? (alternate % 2 === 1 ? "P1 Turn!":"P2 Turn!") : "";let yl = Number(event.target.value);let xl = parseInt((event.target || event.srcElement).id + "");if (sets[xl][yl] != -1) return;let childr = document.getElementsByClassName(event.target.className);childr[0].textContent = alternate % 2 === 0 ? "X" : "O";
sets[xl][yl] = alternate++ % 2 === 0 ? 1 : 10;check();if(gamemode === 0 ){dumb();alternate++;}}function upd() {document.getElementById("xScore").innerHTML = (gamemode != -1 ? "Human : " : "Player1 : " )+ xscore;document.getElementById("oScore").innerHTML = (gamemode != -1 ? "AI : " : "Player2 : " ) + yscore;document.getElementById("again").disabled = false;}function again() {alternate = 0;document.getElementById("again").disabled = true;for (let x = 1; x <= 9; x++) {let childr = document.getElementsByClassName("b" + x);childr[0].textContent = " ";childr[0].disabled = false;}for (let x = 0; x < 3; x++) sets[x] = Array(3).fill(-1);document.getElementById("winStat").innerHTML = "--";win = false;document.getElementById("turns").innerHTML = gamemode != -1? "":"P1 turn!";}function reset() {alternate = 0;for (let x = 1; x <= 9; x++) {let childr = document.getElementsByClassName("b" + x);childr[0].textContent = " ";childr[0].disabled = false;}yscore = 0;xscore = 0;for (let x = 0; x < 3; x++) sets[x] = Array(3).fill(-1);document.getElementById("winStat").innerHTML = "--";upd();win = false;document.getElementById("turns").innerHTML =gamemode != -1? "":"P1 turn!";}
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
