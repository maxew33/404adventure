const story = [
    {
        "id": 1,
        "text":["Bonjour, vous êtes le nouveau stagiaire et votre chef vous demande d'aller demander à l'huissier le formulaire 404.","Par quoi, allez-vous commencer ?", "1 : vous diriger vers l'huissier.", "2 : aller à la machine à café."],
        "path": [2, 3]
    },
    {
        "id": 2,
        "text": ["Vous arrivez devant une personne d'un certain âge à moitié endormi.", "quel est votre choix ?", "1 : lui demander le formulaire 404.",  "2 : aller à la machine à café."],
        "path": [4, 3]
    },
    {
        "id": 3,
        "text": ["Ahh, un bon café, quelle bonne idée!","Quoi, 1 franc le café ! Vous retournez vos poches et ne trouvez pas un centime.","Heureusement, Enzo est là et accepte de vous offrir un  café.","Vous buvez votre café tranquillement en devisant avec votre ami de l'émission de Cocoricocoboy d'hier soir.", "Votre café avalé, vous réfléchissez à la suite des opérations.", "Qu'allez-vous faire ?", "1 : vous diriger vers l'huissier", "2 : vers l'huissier vous diriger" ],
        "path": [2, 2]
    },
    {
        "id": 4,
        "text": ["- Comment ? Vous voulez immatriculer un zodiac ?", "- Le port, vous le trouverez au bas de la ville.", "-C'est au bord de la mer, vous ne pouvez pas vous tromper.", "Que voulez-vous faire maintenant ?" , "1 : LUI DEMANDER LE FORMULAIRE 404", "2 : lui demander le formulaire 404" ],
        "path": [5, 6]
    },
    {
        "id": 5,
        "text":["- Ah, ne criez pas.", "- En voilà des manières" , "- Où vous croyez-vous ?", "- Adressez-vous au guichet 1, couloir de gauche, dernière porte à droite.", "Que voulez-vous faire maintenant ?" , "1 : aller au guichet 1", "2 : aller boire un café" ],
        "path": [7, 3]
    },
    {
        "id": 6,
        "text": ["- Hein ?", "Que voulez-vous faire maintenant ?" , "1 : aller boire un café", "2 : LUI DEMANDER LE FORMULAIRE 404" ],
        "path": [3, 5]
    },
    {
        "id": 7,
        "text": ["Vous prenez le couloir de gauche mais... oh, surprise...", "Il n'y a pas de porte à droite !", "Que faites-vous ?" ,  "1 : retourner voir l'huissier.", "2 : ourvir la porte de gauche." ],
        "path": [2, 8]
    },
    {
        "id": 8,
        "text": ["Un homme replet d'un âge certain fait tranquillement de la balançoire poussé par son assistante." ,"étonné, il vous demande :","- Qui vous a permis d'entrer dans mon bureau ?",  "Qu'allez-vous répondre ?", "1 : je cherche le formulaire 404.", "2 : je cherche le guichet 1." ],
        "path": [9, 10]
    },
    {
        "id": 9,
        "text": ["- Pour le formulaire 404, consultez l'huissier.", "Qu'allez-vous faire ?", "1 : allez voir l'huissier.", "2 : aller boire un café." ],
        "path": [2, 3]
    },
    {
        "id": 10,
        "text": ["Pour le guichet 1, consultez le plan, c'est au 6ème étage." ,"-Et refermez la porte. Quelle insolence !","-Continuons mademoiselle.",  "Qu'allez-vous faire ?", "1 : monter les 5 étages (il n'y a pas d'ascenseur).", "2 : aller boire un café" ],
        "path": [11, 3]
    },
    {
        "id": 11,
        "text": ["Pour le guichet 1, consultez le plan, il est au 6ème étage." ,"-Et refermez la porte. Quelle insolence !","-Continuons mademoiselle.",  "Qu'allez-vous faire ?", "1 : monter les 5 étages (il n'y a pas d'ascenseur).", "2 : aller boire un café" ],
        "path": [11, 3]
    },
    {
        "id": 11,
        "text": ["Essoufflé, vous arrivez au 6ème étage (Ils sont hauts les étages)." ,"-Après avoir longuement étudié le plan, vous trouvez le guichet : Le guichet 1 est au rez-de-chaussée, couloir de droite en entrant.", "Qu'allez-vous faire ?", "1 : redescendre les 5 étages (il n'y a pas d'ascenseur).", "2 : aller boire un café" ],
        "path": [12, 13]
    },
    {
        "id": 12,
        "text": ["Vous arrivez devant deux guichets derrière lesquels deux femmes certainement d'un âge boivent un thé tout en discutant ." ,"-Alors, elle a acheté du tissu à un marchand ambulant...", "Elle va s'acheter du marbre ? Quelle drôle d'idée.", "-Oh, tu la connais. n'importe quoi pour épater les gens.", "-Et note bien, elle n'a même pas de quoi se payer une femme de ménage...", "Qu'allez-vous faire ?", "1 : les interrompre poliment.", "2 : MADAME" ],
        "path": [15, 16]
    },
    {
        "id": 13,
        "text": ["Ahh, une pause, quelle bonne idée!","Tiens, Enzo est encore, à boire un café tout en caressant un chat, il vous offre un café.","Vous buvez votre café tranquillement en devisant avec votre ami de l'émission de Benny Hill d'hier soir.", "Votre café avalé, vous réfléchissez à la suite des opérations.", "Qu'allez-vous faire ?", "1 : redescendre les 5 étages (il n'y a pas d'ascenseur)", "2 : boire un autre café" ],
        "path": [12, 14]
    },
    {
        "id": 14,
        "text": ["Quand on aime, on ne compte pas!","Enzo continue à boire son chat tout en caressant son café.", "Vous buvez votre café tranquillement en devisant avec votre ami de l'émission de l'épisode de l'agence tout risque d'hier soir.", "Votre café avalé, vous réfléchissez à la suite des opérations.", "Qu'allez-vous faire ?", "1 : redescendre les 5 étages (il n'y a pas d'ascenseur)", "2 : redescendre les 5 étages (il faudra bien le faire)" ],
        "path": [12, 12]
    },
    {
        "id": 15,
        "text": ["-Elle a congédié sa femme de ménage, sous prétexte qu'elle aime mieux faire son ménage elle même.","-Mais moi je sais que la situation de son mari...", "-Ah oui, ce pauvre Claudius. Tu sais qu'il avait une affaire de construction de viaducs...",  "Qu'allez-vous faire ?", "1 : MADAME !!! ", "2 : EHO MADAME !!!" ],
        "path": [16, 16]
    },
    {
        "id": 16,
        "text": ["-Oh ce que les gens peuvent être désagréables. Que voulez-vous ?", "Le Laisser-passer 404.", "-Vous avez le formulaire bleu ?", "-Le formulaire bleu ? Non !", "Alors comment voulez-vous obtenir le Laisser-passer 404 ?", "Qu'allez-vous faire ?", "1 : retournez voir l'huissier (et tout recommencer).", "2 : aller boire un dernier café avant de vous pendre" ],
        "path": [2, 17]
    },
    {
        "id": 17,
        "text": ["Vous retrouvez Enzo qui boit son 42ème café.", "Il vous explique au'il cherche ce formulaire 404 depuis des mois.", "Vous comprenez alors que votre chef s'est bien moqué de vous.", "Vous écrivez sur une feuille : 404 introuvable.", "Vous donnez cette feuille pliée en deux à votre chef et quittez cette maison qui rend fou.", "Fin ?", "1 : retournez voir l'huissier (et tout recommencer).", "2 : aller boire un dernier café avant de vous pendre" ],
        "path": [1, 1]
    }
],
    textSection = document.querySelector('.text')

let myStory,
    prevId,
    newId = 1,
    textId = 0 ,
    currentParagraph,
    formerTextLength = 0,
    answerInput

const findText = id => {

    const $section = document.createElement('div')
    $section.id = 'text'+textId

    prevId === id && writeText('Réponse invalide'.split(''), $section, false)

    prevId = id

    currentParagraph = story.find(storyPart => {
        return storyPart['id'] === id
    })
    const paragraphText = [...currentParagraph.text]
    paragraphText.forEach((text, idx) => {
        const textArray = text.split('')
        const textLength = textArray.length
        setTimeout(() => {
        writeText(textArray, $section, idx === paragraphText.length - 1 ? true : false)}, (formerTextLength + 1) * 10)
        
        formerTextLength += textLength
    })
}

const writeText = (text, $section, answerInput) => {
    const $container = document.createElement('p')
    $container.classList.add('paragraph')


    text.forEach((char, idx) => {
        setTimeout(() => {
            $container.innerHTML += char
            answerInput && (idx === text.length - 1 && appendInput($container), formerTextLength = 0)
        }, idx * 10)
    })

    $section.appendChild($container)

    
    textSection.appendChild($section)
}

const appendInput = container => {
    (container.innerHTML += `
<div class="answer-container active">
<input type="text" class="answer" aria-labelledby="text${textId}"/>
</div>`)
    const answer = document.querySelectorAll('.answer')
    answerInput = answer[answer.length - 1]
    answerInput.focus()
    answerInput.addEventListener('input', checkAnswer)

    textId ++
}

const checkAnswer = e => {
    const formerInput = document.querySelector('.active')
    formerInput.classList.remove('active')
    switch (e.target.value) {
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
    findText(newId)
}

findText(newId)