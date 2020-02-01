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
function dumb(){let xl = Math.floor(Math.random() * 3);let yl = Math.floor(Math.random() * 3);if(!avail() || win) return;while(sets[xl][yl] != -1){xl = Math.floor(Math.random() * 3);yl = Math.floor(Math.random() * 3);}if(sets[xl][yl] === -1){sets[xl][yl] = 10;for(let c = 1 ; c <= 9; c++){            let obj = document.getElementsByClassName('b'+c);if(parseInt(obj[0].id) === xl && parseInt(obj[0].value) === yl){obj[0].textContent = 'O';obj[0].focus();c = 10;}}}check();}
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