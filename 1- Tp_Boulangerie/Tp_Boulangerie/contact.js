// // document.querySelector('#nom').addEventListener('keydown', function (e) {
// //     var lettre = String.fromCharCode(e.keyCode)
// //     if (lettre != "N") {
// //         e.preventDefault()
// //     }
// // })
// // // POUR AFFICHER QUE DES N 

// // document.querySelector('#form').addEventListener('submit', function (e) { // Lorsque je soummet mon formulaire tu vas ajouter mon event. mon evenement seras de type submit (lorsque que je soummet un formulaire je lance ma fonction dans laquel je lui fait passer mon evenement)
// //     var cp = document.querySelector('#cp')      //Pour recuperer se qu'il y a dans mon champ 
// //     if (cp.value.lenght != 5) {                 // si la taille de mon elements est diff de 5 
// //         alert("Le code postal n'est pas bon")
// //         e.preventDefault()                        // pour empecher la soumission de formulaire
// //     }
// // })

// document.querySelector("#form").addEventListener("submit", function (e) {
//     var cp = document.querySelector("#cp")
//     if (cp.value.length != 5) {
//         alert("Le code postal n'est pas bon")
//         e.preventDefault()
//     }
// })

// document.querySelector("#form").addEventListener("submit", function (e) {
//     var cp = document.querySelector("#cp")
//     if (cp.value === false) {
//         alert("vide")
//         e.preventDefault()
//     }
// })


// Pour verifier si le champs est vide ou pas
// document.querySelector('#form').addEventListener('submit', function (e) {
//     var prenom = document.querySelector('#prenom')
//     if (prenom.value === "") {
//         alert("Votre prénom")
//         e.preventDefault()
//     }
// })

// Pour verifier si la taille du champ comporte bien au moins 5 caractères
// document.querySelector('#form').addEventListener('submit', function (e) {
//     var prenom = document.querySelector('#prenom')
//     if (prenom.value.length < 5) {
//         alert("Votre prenom doit compter au moins 5 caractères")
//         e.preventDefault()
//     }
// })

//     Pour verifier si la taille du champ comporte bien au plus de 5 caractères
//     document.querySelector('#form').addEventListener('submit', function (e) {
//      var prenom = document.querySelector('#prenom')
//      if (prenom.value.length > 25) {
//          alert("Votre prenom doit compter maximum 25 caractères ")
//          e.preventDefault()
//     }
// })

// // Pour verifier si mon champ a  un “@” et un “.”

// document.querySelector('#form').addEventListener('submit', function (e) {
//     var prenom = document.querySelector('#email')
//     if (prenom.value != "@" && prenom.value != ".") {
//         console.log(prenom.value);

//         alert(" Votre e-mail doit comporter un “@” et un “.” ")
//         e.preventDefault()
//     }
// })

// document.querySelector('#form').addEventListener('submit', function (e) {
//     var prenom = document.querySelector('#email')
//     if (email.value != "@" && email.value != ".") {
//         alert(" Votre e-mail doit comporter un “@” et un “.” ")
//         e.preventDefault()
//     } else {
//         alert("c'est bon")
//     }
// })

// document.querySelector('#form').addEventListener('submit', function (e) {
//     var telephone = document.querySelector('#telephone')
//     if (telephone.value != Number) {
//         alert("Chaque caractère doit être un nombre")
//         e.preventDefault()
//     }
// })










// document.querySelector('#form').addEventListener('submit', function (e) {
//     var prenom = document.querySelector('#telephone')
//     if (telephone.value.length != 10) {
//         alert("Votre numéros de téléphone doit comporter exactement 10 caractères  ")
//         e.preventDefault()
//     }
// })


// (function verifie() {
//     document.querySelector('#form').addEventListener('submit', function (e) {
//         var nom = document.querySelector('#nom')
//         var prenom = document.querySelector('#prenom')
//         var email = document.querySelector('#email')
//         var telephone = document.querySelector('#telephone')
//         var titre = document.querySelector('#titre')
//         var message = document.querySelector('#message')



//         // Pour le nom

//         if (nom.value === "") {
//             alert(" Veuillez entrez votre nom")
//             e.preventDefault()
//         }
//         if (nom.value.length < 5) {
//             alert("Votre nom doit compter au moins 5 caractères")
//             e.preventDefault()
//         }
//         if (nom.value.length > 25) {
//             alert("Votre nom doit compter maximum 25 caractères ")
//             e.preventDefault()
//         }
//         // Pour le prenom

//         if (prenom.value === "") {
//             alert(" Veuillez entrez votre prenom")
//             e.preventDefault()
//         }
//         if (prenom.value.length < 5) {
//             alert("Votre prenom doit compter au moins 5 caractères")
//             e.preventDefault()
//         }
//         if (prenom.value.length > 25) {
//             alert("Votre prenom doit compter maximum 25 caractères ")
//             e.preventDefault()
//         }
//         // Pour l'Adresse email

//         if (prenom.value === "") {
//             alert(" Veuillez entrez votre adresse email")
//             e.preventDefault()
//         }
//         if (prenom.value.length < 5) {
//             alert("Votre adresse email doit compter au moins 5 caractères")
//             e.preventDefault()
//         }
//         if (prenom.value.length > 25) {
//             alert("Votre adresse email doit compter maximum 25 caractères ")
//             e.preventDefault()
//         }

//         if (email.value != "@" && email.value != ".") {
//             alert(" Votre e-mail doit comporter un “@” et un “.” ")
//             e.preventDefault()
//         }

//         // Pour le numéros de téléphone

//         if (telephone.value === "") {
//             alert("Veuillez entrez votre numéros de téléphone")
//             e.preventDefault()
//         }
//         if (telephone.value.length != 10) {
//             alert("Votre numéros de téléphone doit comporter exactement 10 caractères")
//             e.preventDefault()
//         }
//         if (telephone.value != Number) {
//             alert("Chaque caractère de votre numéros de téléphone doit être un nombre")
//             e.preventDefault()
//         }

//         // Pour le titre 

//         if (titre.value === "") {
//             alert(" Veuillez entrez votre titre  ")
//             e.preventDefault()
//         }
//         if (titre.value.length < 5) {
//             alert("Votre titre doit compter au moins 5 caractères")
//             e.preventDefault()
//         }
//         if (titre.value.length > 25) {
//             alert("Votre titre doit compter maximum 25 caractères ")
//             e.preventDefault()
//         }

//         // Pour le message

//         if (message.value === "") {
//             alert(" Veuillez entrez votre message ")
//             e.preventDefault()
//         }
//         if (message.value.length < 5) {
//             alert("Votre message doit compter au moins 5 caractères")
//             e.preventDefault()
//         }
//         if (message.value.length > 500) {
//             alert("Votre message doit compter maximum 500 caractères ")
//             e.preventDefault()
//         }

//     })
// }())

// Pour verifier si le champs est vide ou pas

// document.querySelector('#form').addEventListener('submit', function (e) {
//     var telephone = document.querySelector('#telephone')
//     if (telephone.value != Number) {
//         alert("Chaque caractère doit être un nombre")
//         e.preventDefault()
//     }
// })

//     if (email.value != "@" && email.value != ".") {
//         alert(" Votre e-mail doit comporter un “@” et un “.” ")
//         e.preventDefault()
//     } else {
//         alert("c'est bon")
//          alert("Votre prenom doit compter maximum 25 caractères ")
//          e.preventDefault()
// Pour verifier si la taille du champ comporte bien au moins 5 caractères
// document.querySelector('#form').addEventListener('submit', function (e) {
//     var prenom = document.querySelector('#prenom')
//     if (prenom.value.length < 5) {
//         alert("Votre prenom doit compter au moins 5 caractères")
//         e.preventDefault()
//     }
// })



// document.querySelector('#form').addEventListener('submit', function (e) {
//     var prenom = document.querySelector('#prenom')
//     if (prenom.value === "") {
//         alert("Votre prénom")
//         e.preventDefault()
//     }
// })








































































































(function verifie() {
    document.querySelector('#form').addEventListener('submit', function (e) {

        var nom = document.querySelector('#nom')
        var prenom = document.querySelector('#prenom')
        var email = document.querySelector('#email')
        var telephone = document.querySelector('#telephone')
        var titre = document.querySelector('#titre')
        var message = document.querySelector('#message')


        // Pour le nom 
        if (nom.value === "") {
            document.querySelector('#faute_nom1').innerHTML = "Veuillez entrez votre nom"

        }
        if (nom.value.length < 5) {
            document.querySelector('#faute_nom2').innerHTML = "Votre nom doit compter au moins 5 caractères"

        }
        if (nom.value.length < 25) {
            document.querySelector('#faute_nom3').innerHTML = "Votre nom doit compter maximum 25 caractères "

        }

        // Pour le prénom

        if (prenom.value === "") {
            document.querySelector('#faute_prenom1').innerHTML = "Veuillez entrez votre prenom"

        }
        if (prenom.value.length < 5) {
            document.querySelector('#faute_prenom2').innerHTML = "Votre prenom doit compter au moins 5 caractères"

        }
        if (prenom.value.length < 25) {
            document.querySelector('#faute_prenom3').innerHTML = "Votre prenom doit compter maximum 25 caractères "

        }

        // Pour l'Adresse mail

        if (email.value === "") {
            document.querySelector('#faute_email1').innerHTML = "Veuillez entrez votre adresse mail"

        }
        if (email.value.length < 5) {
            document.querySelector('#faute_email2').innerHTML = "Votre adresse mail doit compter au moins 5 caractères"

        }
        if (email.value.length < 25) {
            document.querySelector('#faute_email3').innerHTML = "Votre adresse mail doit compter maximum 25 caractères "

        }
        if (email.value != "@" && email.value != ".") {
            document.querySelector('#faute_email4').innerHTML = "Votre adresse mail est fausse "

        }

        // Pour le numéros de téléphone

        if (telephone.value === "") {
            document.querySelector('#faute_telephone1').innerHTML = "Veuillez entrez votre numero de téléphone"

        }
        if (telephone.value.length != 10) {
            document.querySelector('#faute_telephone2').innerHTML = "Votre numéro de téléphone doit comporter exactement 10 caractères "

        }
        if (telephone.value.length != Number) {
            document.querySelector('#faute_telephone3').innerHTML = " Chaque caractère doit être un nombre  "

        }

        // Pour le titre

        if (titre.value === "") {
            document.querySelector('#faute_titre1').innerHTML = "Veuillez entrez votre titre"

        }
        if (titre.value.length < 5) {
            document.querySelector('#faute_titre2').innerHTML = "Votre titre doit compter au moins 5 caractères"

        }
        if (titre.value.length < 25) {
            document.querySelector('#faute_titre3').innerHTML = "Votre titre doit compter maximum 25 caractères "

        }

        // Pour le message

        if (message.value === "") {
            document.querySelector('#faute_message1').innerHTML = "Veuillez entrez votre message"

        }
        if (message.value.length < 25) {
            document.querySelector('#faute_message2').innerHTML = "Votre message doit compter au moins 25 caractères"

        }
        if (message.value.length > 500) {
            document.querySelector('#faute_message3').innerHTML = "Votre message doit compter maximum 500 caractères "
        }
        alert("Vérifiez les informations saisies, puis réessayez")
    })

}())




































