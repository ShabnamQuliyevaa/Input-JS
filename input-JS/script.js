number.onkeyup = function(){

    let x = document.getElementById("number").value;

    let ekran ="";

    for(let i=1; i<=x; i++){

ekran+=`<li><input placeholder="Musteri ${[i]}"></li>`

}

    document.getElementById("list").innerHTML=ekran;
}

