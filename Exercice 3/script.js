function birds(){
let oiseaux=document.getElementById('vitesse').value;
if (oiseaux){
    if (document.getElementById('poulet').checked){
        oiseaux = document.getElementById('poulet').value;
        if (typeof oiseaux !== "number"){
            document.getElementById("message").innerHTML = '« Veuillez saisir la vitesse dans un format correct»';
            }
        else {
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
    }
    else if (document.getElementById('canard').checked) {
        oiseaux = document.getElementById('canard').value;
        if (typeof oiseaux === "number"){
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
            document.getElementById("message").innerHTML = '« Veuillez saisir la vitesse dans un format correct»';
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

