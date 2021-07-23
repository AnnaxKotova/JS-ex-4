function birds(){
let oiseaux=document.getElementById('vitesse').value;
if (oiseaux){
if (document.getElementById('poulet').checked) {
    if (oiseaux < 14){
        document.getElementById("message").innerHTML = '« La vitesse saisie est trop petite »';
    }
    else if (oiseaux > 14){
        document.getElementById("message").innerHTML = '« La vitesse saisie est trop grande »';
    }
    else{
        document.getElementById("message").innerHTML = '« La vitesse saisie est correcte»';
    }
}


else if (document.getElementById('canard').checked) {
        if (oiseaux < 60){
            document.getElementById("message").innerHTML = '« La vitesse saisie est trop petite »';
        }
        else if (oiseaux > 60){
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