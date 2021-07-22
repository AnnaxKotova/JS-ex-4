function verificateur (){

    let x = document.getElementById("age").value;

    if (x > 0 && x < 110){ // x peut être comparé seulement 1 fois, 0 < x < 110 ne marche pas, il faut écrire toutes les conditions chaque fois

        if (x > 18){
            document.getElementById("reponse").innerHTML = '« Vous êtes majeur »';
        }
        else{
            document.getElementById("reponse").innerHTML = '« Vous êtes mineur »';
        }
    }

    else{
        document.getElementById("reponse").innerHTML = '« Erreur »';
    }

}

document.getElementById("bouton").addEventListener("click", verificateur);
