import Bot from './bot-class';

const Tchat = class Tchat {
  renderHeader() {
    return `<header>
            < nav class="navbar navbar-dark bg-dark" >
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">
                        <span class="text-danger">
                            <strong>FRANCE POLITIQUE</strong>
                        </span> /
                        <span class="text-primary">Chatbot</span>
                    </span>
                </div>
        </nav >
      </header > `;
  }

  renderMain() {
    return `
    <main class="container-fluid mt-3">
      <div class="row">
        <div class="col-3">
            <ul class="list-group list-group-flush">
              ${this.renderBot(new Bot(
      1,
      'Jean luc Mélanchon',
      'https://pbs.twimg.com/profile_images/1504144526247616515/JgtQ2mGP_400x400.jpg',
      2,
      [
        { Bonjour: 'Hello user !' },
        { Politique: 'Pour les travailleurs !' },
        { Youpi: 'La fête !' }
      ]
    ))}
              ${this.renderBot(new Bot(2, 'Emmanuel Macron', 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Emmanuel_Macron_June_2022_%28cropped%29.jpg', 2, [
      { Bonjour: 'Hello user !' },
      { Politique: 'Vive le world economic forum !' },
      { Youpi: 'La fête !' }
    ]))}
              ${this.renderBot(new Bot(3, 'Marine Le Pen', 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Le_Pen%2C_Marine-9586_%28cropped%29.jpg', 2, [
      { Bonjour: 'Hello user !' },
      { Politique: 'Dehors les arabes !' },
      { Youpi: 'La fête !' }
    ]))}
            </ul>
        </div>
        <div class="col-9">
          <section id="conversation" class="messages-history">
            ${this.renderMessagesHistory()}
          </section>
          <section class="typing mt-3">
          ${this.renderInput()}
          </section>
        </div>
      </div>
    </main>
    `;
  }

  renderBot(bot) {
    return `
    <li class="bg-dark text-light list-group-item d-flex justify-content-between align-items-center">
      <img width="50" class="rounded-circle border border-white border-2" src="${bot.urlPicture}" />${bot.name}
        <span class="badge bg-primary rounded-pill">${bot.newMessages}</span>
    </li>
    `;
  }

  renderMessagesHistory() {
    return `
    ${this.renderMessageUser()}
   `;
  }

  renderMessageBot(response) {
    return `
    <!-- Message 1 -->
    <div class="row mt-2">
      <div class="col-6">
        <div class="card text-bg-light">
          <h5 class="card-header">
            <img width="20%" src="https://avatarfiles.alphacoders.com/149/149041.jpg"
              class="rounded-circle img-thumbnail" alt="...">
            Spiderman
          </h5>
          <div class="card-body">
            <h5 class="card-title">12/01/23</h5>
            <p class="card-text">${response}</p>
          </div>
        </div>
      </div>
      <div class="col-6"></div>
    </div>
    `;
  }

  renderMessageUser() {
    return `
    <!-- Message 2 -->
    <div class="row mt-2">
      <div class="col-6"></div>
      <div class="col-6">
        <div class="card text-bg-light">
          <h5 class="card-header">
            <img width="20%" src="https://avatarfiles.alphacoders.com/149/thumb-149117.jpg"
              class="rounded-circle img-thumbnail" alt="...">
            Cyril
          </h5>
          <div class="card-body">
            <h5 class="card-title">12/01/23</h5>
            <p class="card-text">Hello ca va ?</p>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  renderInput() {
    return `
      <div class="row">
          <div class="col-12">
            <div class="input-group mb-3">
              <input id="inputMsg" type="text" class="form-control" placeholder="Message">
              <button id="btnSend" class="btn btn-primary" type="button">Send</button>
            </div>
          </div>
      </div>
    `;
  }

  render() {
    return `
    <body class="bg-dark">
      <div id="app">
        ${this.renderHeader()}
        ${this.renderMain()}
      </div>
    </body>
    `;
  }

  sendResponse(message) {
    let response = '';

    const id = 1;// En attendant !

    switch (id) {
      case 1:
        if (message.includes('Bonjour')) {
          response = 'Yo mon pote !';
        }
        break;
      case 2:
        if (message.includes('Bonjour')) {
          response = 'Yo mon pote !';
        }
        break;
      case 3:
        if (message.includes('Bonjour')) {
          response = 'Yo mon pote !';
        }
        break;
      default:
        response = 'Pas de réponse !';
        break;
    }
    return response;
  }

  sendMsg() { // Stocker les bots dans le localstorage apres boucler dessus pour faire une réponse
    const btnSend = document.getElementById('btnSend');
    const inputMsg = document.getElementById('inputMsg');
    const msgHistory = document.getElementById('conversation');

    btnSend.addEventListener('click', () => {
      const responseBot = this.sendResponse(inputMsg.value);
      msgHistory.innerHTML += this.renderMessageBot(responseBot);
    });
  }

  run() {
    document.body.innerHTML = this.render();
    this.sendMsg();
  }
};

export default Tchat;