<?php
$to = "nicx7760@gmail.com";
$subject = "Test de mail depuis WAMP";
$message = "Ceci est un message de test envoyé depuis WAMP.";

if (mail($to, $subject, $message)) {
    echo "E-mail envoyé avec succès !";
} else {
    echo "Échec de l'envoi de l'e-mail.";
}

// if (isset($_POST['valider'])) {


    // if (isset($_POST['name']) and isset($_POST['Discord']) and isset($_POST['email'])) {
        // if (isset($_POST['service']) and isset($_POST['Cours_Syntaxes']) and isset($_POST['Réglage_Serveurs'])) {
            // if (isset($_POST['Corrections_Fichiers']) and isset($_POST['Mapings']) and isset($_POST['cgv'])) {
            // }
        // }
    // }
// }
// if (!empty($_POST['name']) and !empty($_POST['Discord']) and !empty($_POST['email'])) {
    // if (!empty($_POST['service']) and !empty($_POST['Cours_Syntaxes']) and !empty($_POST['Réglage_Serveurs'])) {
        // if (!empty($_POST['Corrections_Fichiers']) and !empty($_POST['Mapings']) and !empty($_POST['cgv'])) {
            // $name = htmlspecialchars($_POST['name']);
            // $Discord = htmlspecialchars($_POST['Discord']);
            // $email = htmlspecialchars($_POST['email']);
            // $service = htmlspecialchars($_POST['service']);
            // $Cours_Syntaxes = htmlspecialchars($_POST['Cours_Syntaxes']);
            // $Réglage_Serveurs = htmlspecialchars($_POST['Réglage_Serveurs']);
            // $Corrections_Fichiers = htmlspecialchars($_POST['Corrections_Fichiers']);
            // $Mapings = htmlspecialchars($_POST['Mapings']);
            // $cgv = htmlspecialchars($_POST['cgv']);
            // echo " <h2> bonjour <br> $name </br> merci pour votre email:<br> $email </br>, nous avons lu votre message: </br> $message </h2>";
        // }
    // }
// }



// $retour = mail('Davidnbr1-85@hotmail.com', 'Envoi depuis la page form', $_POST['message'], '');
// if ($retour)
    // echo '<p>Votre message a bien été envoyé.</p>'; {
// }
?>