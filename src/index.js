import './index.scss';

import Chat from './chat-class';
import Bot from './bot-class';
import ConvHistory from './conversation-class';

const bonjourPropositions = {
    propositions: [
        'bonjour',
        'salut'
    ],
    response: () => 'Bonjour utilisateur !'
};

const randomNumber = {
    propositions: [
        'nombre',
        'number'
    ],
    url: 'https://api.math.tools/numbers/nod',
    response: (response) => response.contents.nod.numbers.number
};

const politiquePropositionsLepen = {
    propositions: [
        'politique'
    ],
    response: () => 'J\'adore faire peur aux gens'
};

const politiquePropositionsJLM = {
    propositions: [
        'politique'
    ],
    response: () => 'Attention a ce que vous allez dire monsieur'
};

const kayneWest = {
    propositions: [
        'kayne'
    ],
    url: 'https://api.kanye.rest/',
    response: (response) => response.quote
};

const geekFact = {
    propositions: [
        'geek'
    ],
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    response: (response) => response.joke
};

const randomFact = {
    propositions: [
        'fait inutile',
        'random fact'
    ],
    url: 'https://uselessfacts.jsph.pl/random.json?language=en',
    response: (response) => response.text
};

const aidePropositions = {
    propositions: [
        'help',
        'aide'
    ],
    response: () => `
    <b>Jean Luc Mélanchon :</b> bonjour, commit, nombre <br>
    <b>Emmanuel Macron</b> bonjour, kayne, geek <br>
    <b>Marine Le Pen</b> bonjour, random fact, politique <br>
    <b>Utilisateur commandes </b> help, aide <br>`
};

const conv = new ConvHistory();
const chat = new Chat();

const utilisateur = new Bot(0, 'Utilisateur', 'https://www.icone-png.com/png/54/53793.png', [aidePropositions]);
const jmlBot = new Bot(1, 'Jean Luc Mélanchon', 'https://lafranceinsoumise.fr/wp-content/uploads/2020/09/Jean_Luc_MELENCHON_in_the_European_Parliament_in_Strasbourg_2016_cropped-scaled-e1599038504130.jpg', [bonjourPropositions, politiquePropositionsJLM, randomNumber]);
const macronBot = new Bot(2, 'Emmanuel Macron', 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Emmanuel_Macron_June_2022_%28cropped%29.jpg', [bonjourPropositions, kayneWest, geekFact]);
const lepenBot = new Bot(3, 'Marine Le Pen', 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Le_Pen%2C_Marine-9586_%28cropped%29.jpg', [bonjourPropositions, randomFact, politiquePropositionsLepen]);

chat.main([utilisateur, jmlBot, macronBot, lepenBot], conv);