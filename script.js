


function Cipher(){
    const word = document.getElementById("word").value;

    const endword = document.getElementById("endword");


    let le = word.split("");
    let l = le.length;

    console.log(l)







    let newStr = "";

    
    for(let i = l -1; i >= 0; i--) {
        newStr += word[i];
    }



  


    endword.innerHTML = newStr;









};
