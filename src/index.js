import './index.scss';

import Tchat from './tchat-class';
// import Bot from './bot-class';

const tchat = new Tchat();

// const melanchonBot = new Bot('Jean luc Mélanchon', 'https://pbs.twimg.com/profile_images/1504144526247616515/JgtQ2mGP_400x400.jpg');
// const macronBot = new Bot('Emmanuel Macron', 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Emmanuel_Macron_June_2022_%28cropped%29.jpg');
// const lepenBot = new Bot('Marine Le Pen', 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Le_Pen%2C_Marine-9586_%28cropped%29.jpg');

tchat.run();