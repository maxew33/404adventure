const story = [
    {
        "id": 1,
        "text": ["Bonjour, vous êtes le nouveau stagiaire et votre chef vous demande d'aller demander à l'huissier le formulaire 404.", "Par quoi, allez-vous commencer ?", "1 : vous diriger vers l'huissier.", "2 : aller à la machine à café."],
        "path": [2, 3]
    },
    {
        "id": 2,
        "text": ["Vous arrivez devant une personne d'un certain âge à moitié endormi.", "Quel est votre choix ?", "1 : lui demander le formulaire 404.", "2 : aller à la machine à café."],
        "path": [4, 3]
    },
    {
        "id": 3,
        "text": ["Ahh, un bon café, quelle bonne idée!", "Quoi, 1 franc le café ! Vous retournez vos poches et ne trouvez pas un centime.", "Heureusement, Enzo est là et accepte de vous offrir un  café.", "Vous buvez votre café tranquillement en devisant avec votre ami de l'émission de Cocoricocoboy d'hier soir.", "Votre café avalé, vous réfléchissez à la suite des opérations.", "Qu'allez-vous faire ?", "1 : vous diriger vers l'huissier", "2 : vers l'huissier vous diriger"],
        "path": [2, 2]
    },
    {
        "id": 4,
        "text": ["- Comment ? Vous voulez immatriculer un zodiac ?", "- Le port, vous le trouverez au bas de la ville.", "- C'est au bord de la mer, vous ne pouvez pas vous tromper.", "Que voulez-vous faire maintenant ?", "1 : LUI DEMANDER LE FORMULAIRE 404.", "2 : lui demander le formulaire 404."],
        "path": [5, 6]
    },
    {
        "id": 5,
        "text": ["- Ah, ne criez pas.", "- En voilà des manières", "- Où vous croyez-vous ?", "- Adressez-vous au guichet 1, couloir de gauche, dernière porte à droite.", "Que voulez-vous faire maintenant ?", "1 : aller au guichet 1.", "2 : aller boire un café."],
        "path": [7, 3]
    },
    {
        "id": 6,
        "text": ["- Hein ?", "Que voulez-vous faire maintenant ?", "1 : aller boire un café.", "2 : LUI DEMANDER LE FORMULAIRE 404."],
        "path": [3, 5]
    },
    {
        "id": 7,
        "text": ["Vous prenez le couloir de gauche mais... oh, surprise...", "Il n'y a pas de porte à droite !", "Que faites-vous ?", "1 : retourner voir l'huissier.", "2 : ouvrir la porte de gauche."],
        "path": [2, 8]
    },
    {
        "id": 8,
        "text": ["Un homme replet d'un âge certain fait tranquillement de la balançoire poussé par son assistante.", "Étonné, il vous demande :", "- Qui vous a permis d'entrer dans mon bureau ?", "Qu'allez-vous répondre ?", "1 : je cherche le formulaire 404.", "2 : je cherche le guichet 1."],
        "path": [9, 10]
    },
    {
        "id": 9,
        "text": ["- Pour le formulaire 404, consultez l'huissier.", "Qu'allez-vous faire ?", "1 : allez voir l'huissier.", "2 : aller boire un café."],
        "path": [2, 3]
    },
    {
        "id": 10,
        "text": ["Pour le guichet 1, consultez le plan, c'est au 6ème étage.", "- Et refermez la porte. Quelle insolence !", "- Continuons mademoiselle.", "Qu'allez-vous faire ?", "1 : monter les 5 étages (il n'y a pas d'ascenseur).", "2 : aller boire un café."],
        "path": [11, 3]
    },
    {
        "id": 11,
        "text": ["Essoufflé, vous arrivez au 6ème étage (Ils sont hauts les étages).", "Après avoir longuement étudié le plan, vous trouvez le guichet : Le guichet 1 est au rez-de-chaussée, couloir de droite en entrant.", "Qu'allez-vous faire ?", "1 : redescendre les 6 étages (il n'y a pas d'ascenseur).", "2 : aller boire un café."],
        "path": [12, 13]
    },
    {
        "id": 12,
        "text": ["Vous arrivez devant deux guichets derrière lesquels deux femmes certainement d'un âge boivent un thé tout en discutant .", "- Alors, elle a acheté du tissu à un marchand ambulant...", "Elle va s'acheter du marbre ? Quelle drôle d'idée.", "- Oh, tu la connais. n'importe quoi pour épater les gens.", "- Et note bien, elle n'a même pas de quoi se payer une femme de ménage...", "Qu'allez-vous faire ?", "1 : les interrompre poliment.", "2 : MADAME !"],
        "path": [15, 16]
    },
    {
        "id": 13,
        "text": ["Ahh, une pause, quelle bonne idée!", "Tiens, Enzo est encore là, à boire un café tout en caressant un chat, il vous en offre un (café).", "Vous buvez votre café tranquillement en devisant avec votre ami de l'émission de Benny Hill d'hier soir.", "Votre café avalé, vous réfléchissez à la suite des opérations.", "Qu'allez-vous faire ?", "1 : redescendre les 5 étages (il n'y a pas d'ascenseur)", "2 : boire un autre café."],
        "path": [12, 14]
    },
    {
        "id": 14,
        "text": ["Quand on aime, on ne compte pas!", "Enzo continue à boire son chat tout en caressant son café.", "Vous buvez votre café tranquillement en devisant avec votre ami de l'épisode de l'agence tout risque d'hier soir.", "Votre café avalé, vous réfléchissez à la suite des opérations.", "Qu'allez-vous faire ?", "1 : redescendre les 6 étages (il n'y a toujours pas d'ascenseur).", "2 : redescendre les 6 étages (et oui, il faudra bien le faire)."],
        "path": [12, 12]
    },
    {
        "id": 15,
        "text": ["- Elle a congédié sa femme de ménage, sous prétexte qu'elle aime mieux faire son ménage elle même.", "- Mais moi je sais que la situation de son mari...", "- Ah oui, ce pauvre Claude.", "Tu sais qu'il avait une affaire dans le bâtiment...", "Qu'allez-vous faire ?", "1 : MADAME !!! ", "2 : EHO MADAME !!!"],
        "path": [16, 16]
    },
    {
        "id": 16,
        "text": ["- Oh ! Ce que les gens peuvent être désagréables.", "- Que voulez-vous ?", "Le Laisser-passer 404.", "- Vous avez le formulaire bleu ?", "Le formulaire bleu ? Non !", "- Alors comment voulez-vous obtenir le Laisser-passer 404 ?", "Qu'allez-vous faire ?", "1 : retournez voir l'huissier (et tout recommencer).", "2 : aller boire un dernier café avant de vous pendre."],
        "path": [2, 17]
    },
    {
        "id": 17,
        "text": ["Vous retrouvez Enzo qui boit son 42ème café.", "Il vous explique qu'il cherche ce formulaire 404 depuis des mois.", "Vous comprenez alors que votre chef s'est bien moqué de vous.", "Vous écrivez sur une feuille : 404 - introuvable.", "Vous donnez cette feuille pliée en deux à votre chef et quittez cette maison qui rend fou.", "1 : fin de l'aventure et retour à la page d'accueil.", "2 : recommencer l'aventure."],
        "path": [18, 1]
    },
    {
        "id": 18,
        "text": [""]
    },
    {
        "id": 19,
        "text": ["Nous ne trouvons pas la page que vous cherchez par contre, nous avons trouvé cette vieille aventure textuelle dans nos archives.", "Vous pouvez revenir à la page d'accueil à tout moment en selectionnant 0.", "Avez-vous compris ?", "1 : oui.", "2 : non."],
        "path": [1, 19]
    },
    {
        "id": 20,
        "text": ["Souhaitez vous vraiment quitter cette aventure et revenir à la pade d'accueil ?", "1 : oui, je souhaite revenir à la page d'accueil.", "2 : non, je souhaite poursuivre cette extraordinaire aventure."],
        "path": [21, 22],
    }
],
    $textSection = document.querySelector('.text')


let prevId = [0, 0],//store the 2 previous answers
    newId = 1,
    textId = 0, // add a specific id for each paragraph
    currentParagraph,
    formerTextLength = 0,//for the typewritter effect, store the qty of characters
    answerInput

const findText = id => {

    const $section = document.createElement('div')
    $section.id = 'text' + textId // the id of the div for the labelledby id ARIA (will read the whole div)

    if (prevId[1] === id && prevId[1] !== 190) { writeText('Réponse invalide'.split(''), $section, false) }

    // store the two last id
    prevId[0] = prevId[1]
    prevId[1] = id

    currentParagraph = story.find(storyPart => {
        return storyPart['id'] === id
    })

    // get each sentences of the paragraph
    const paragraphText = [...currentParagraph.text]

    paragraphText.forEach((text, idx) => {
        //get each letter of the sentence
        const textArray = text.split('')
        
        const textLength = textArray.length

        setTimeout(() => {
            writeText(textArray, $section, idx === paragraphText.length - 1 ? true : false)
        }, (formerTextLength + 1) * 10)

        formerTextLength += textLength
    })
}

//add the text in the paragraph, if answerInput === true trigger the appendInput function
const writeText = (text, $section, answerInput) => {
    const $container = document.createElement('p')
    $container.classList.add('paragraph')

    //typewritter effect
    text.forEach((char, idx) => {
        setTimeout(() => {
            $container.innerHTML += char
            if (answerInput && prevId[1] !== 18 && idx === text.length - 1) {
                appendInput($container)
                formerTextLength = 0
            }
        }, idx * 10)
    })

    $section.appendChild($container)

    $textSection.appendChild($section)
}

// add the input at the end of the paragraph
const appendInput = container => {

    container.innerHTML += `
        <div class="answer-container active">
            <input type="text" class="answer" aria-labelledby="text${textId}"/>
        </div>`

    const answer = document.querySelectorAll('.answer')
    answerInput = answer[answer.length - 1]
    answerInput.focus()

    // Move the paragraph up if it is too low on the page.
    if (window.innerHeight - answerInput.getBoundingClientRect().bottom < (window.innerHeight * .4)) {
        document.querySelector('body').style.height = document.querySelector('body').getBoundingClientRect().height + (window.innerHeight * .3) + 'px'
        window.scrollTo({
            top: document.querySelector('body').getBoundingClientRect().height,
            behavior: 'smooth'
        });
    }

    answerInput.addEventListener('input', checkAnswer)

    textId++
}

const checkAnswer = e => {
    const formerInput = document.querySelector('.active')
    formerInput.classList.remove('active')
    switch (e.target.value) {

        case '0':
            prevId[1] === 20 && exitGame()
            newId = 20
            break

        case '1':
            newId = currentParagraph.path[0]
            break

        case '2':
            newId = currentParagraph.path[1]
            break

        default: console.log('error')
            break
    }1
    answerInput.removeEventListener('input', checkAnswer)
    answerInput.disabled = true

    // trying to escape but still stay
    newId === 22 && (newId = prevId[0])

    // end and escape the game
    newId === 18 && exitGame()

    newId === 21 ? exitGame() : findText(newId)
}

const exitGame = () => {
    window.location = ('https://maxime-malfilatre.com')
}

findText(newId)

//Exit the game with the escape key
window.addEventListener("keydown", e => e.key==="Escape" && exitGame())