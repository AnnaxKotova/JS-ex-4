function birds(){
let oiseaux;
if (oiseaux){
if (document.getElementById('poulet').checked) {
 oiseaux = document.getElementById('poulet').value;
    if (document.getElementById('vitesse').value < 14){
        document.getElementById("message").innerHTML = '« La vitesse saisie est trop petite »';
    }
    else if (document.getElementById('vitesse').value > 14){
        document.getElementById("message").innerHTML = '« La vitesse saisie est trop grande »';
    }
    else{
        document.getElementById("message").innerHTML = '« La vitesse saisie est correcte»';
    }
}


else if (document.getElementById('canard').checked) {
    oiseaux = document.getElementById('canard').value;
        if (document.getElementById('vitesse').value < 60){
            document.getElementById("message").innerHTML = '« La vitesse saisie est trop petite »';
        }
        else if (document.getElementById('vitesse').value > 60){
            document.getElementById("message").innerHTML = '« La vitesse saisie est trop grande »';
        }
        else{
            document.getElementById("message").innerHTML = '« La vitesse saisie est correcte»';
        }
    }

else {
    document.getElementById("message").innerHTML = '« Veuillez choisir une oiseaux»';
}
}

else {
    document.getElementById("message").innerHTML = '« Veuillez saisir la vitesse »';
}
}

document.getElementById("envoyer").addEventListener("click", birds);