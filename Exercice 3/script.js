function birds(){
    let oiseaux;
    if (typeof oiseaux !== "number"){
        document.getElementById("message").innerHTML = '« Veuillez saisir la vitesse dans un format correct»';
    }
    else{
        if (document.getElementById('poulet').checked){
            oiseaux = document.getElementById('vitesse').value;
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
        else if (document.getElementById('canard').checked){
            oiseaux = document.getElementById('vitesse').value;
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
}

    document.getElementById("envoyer").addEventListener("click", birds);
    
    