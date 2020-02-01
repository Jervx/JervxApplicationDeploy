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
let sets = [[-1, -1, -1],[-1, -1, -1],[-1, -1, -1]];let gameMode = -2;let alternate = 0, xscore = 0, yscore = 0;let win = false;let theme = 0;let mode = 0;function avail() {for (let x = 0; x < 3; x++)for (let y = 0; y < 3; y++) if (sets[x][y] === -1) return true;return false;}function tie() {document.getElementById("winStat").innerHTML = "TIE!";dis = () => {for (let x = 1; x <= 9; x++) {let childr = document.getElementsByClassName("b" + x);childr[0].disabled = true;}};}
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
