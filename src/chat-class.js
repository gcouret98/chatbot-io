const Chat = class Chat {
  renderHeader() {
    return `
      <header>
        <nav class="navbar navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">
            <span class="text-danger">
              <strong>France Politique</strong>
            </span> / 
            <span class="text-primary">Chatbot</span>
            </span>
          </div>
        </nav>
      </header>
    `;
  }

  renderListBots(bots) {
    return `
      <ul class="list-group list-group-flush sticky-top" style="margin-top: 50px">
        ${bots.map((bot) => this.renderBot(bot)).join('')}
      </ul>
    `;
  }

  renderBot(bot) {
    return `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <img width="60" class="rounded-circle border border-white border-2" src="${bot.picture}" />
          <b>${bot.nomBot}</b>
      </li>
    `;
  }

  renderMsgConv(conversation) {
    return `
      <section class="messages-conversation mt-5" >
  ${conversation.map((message) => {
      if (message.idBot === 0) {
        return this.renderMsgUtilisateur(message);
      }
      return this.renderMsgBot(message);
    }).join('')} 
      </section>
    `;
  }

  renderMsgBot(message) {
    return `
      <div class="row mt-2">
        <div class="col-6">
          <div class="card text-bg-light">
            <h5 class="card-header">
              <img width="20%" src="${message.picture}" class="rounded-circle img-thumbnail" alt="...">
              ${message.nomBot}
            </h5>
            <div class="card-body">
              <h5 class="card-title">${message.time}</h5>
              <p class="card-text">
                ${message.message}
              </p>
            </div>
          </div>
        </div>
        <div class="col-6"></div>
      </div>
    `;
  }

  renderMsgUtilisateur(message) {
    return `
      <div class="row mt-2">
        <div class="col-6"></div>
        <div class="col-6">
          <div class="card text-bg-light">
            <h5 class="card-header">
              <img width="20%" src="${message.picture}" class="rounded-circle img-thumbnail" alt="...">
              ${message.nomBot}
            </h5>
            <div class="card-body">
              <h5 class="card-title">${message.time}</h5>
              <p class="card-text">${message.message}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderInput() {
    return `
      <section class="typing mt-3">
        <div class="row">
          <div class="col-12">
            <div class="input-group mb-3">
                <input id="inputMsg" type="text" class="form-control" placeholder="Message">
                <button id="btnSend" class="btn btn-primary" type="button">Envoyer</button>
              </div>
          </div>
        </div>
      </section>
    `;
  }

  render(bots, conversation) {
    return `
      <div id="app">
        ${this.renderHeader()}
        <main class="container-fluid mt-3">
          <div class="row">
            <div class="col-3">
              ${this.renderListBots(bots)}
            </div>
            <div class="col-9">
              ${this.renderMsgConv(conversation)}
              ${this.renderInput()}
            </div>
          </div>
        </main>
      </div>
    `;
  }

  async handleMessage(conversation, bots, message) {
    conversation.lockMsg(bots[0], message);
    this.main(bots, conversation);
    for (let i = 0; i < bots.length; i += 1) {
      const bot = bots[i];
      bot.checkInput(message, bots, conversation, this, this.doBotMsg);
    }
  }

  doBotMsg(bot, message, bots, conversation, mainExec) {
    conversation.lockMsg(bot, message);
    mainExec.main(bots, conversation);
  }

  main(bots, conversation) {
    document.body.innerHTML = this.render(bots, conversation.load());
    const inputMsg = document.getElementById('inputMsg');
    const btnSend = document.getElementById('btnSend');
    btnSend.onclick = () => this.handleMessage(conversation, bots, inputMsg.value);
    onkeyup = (event) => {
      if (event.key === 'Enter') {
        this.handleMessage(conversation, bots, inputMsg.value);
      }
    };
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 200);
  }
};

export default Chat;