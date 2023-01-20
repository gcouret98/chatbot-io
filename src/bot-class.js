const Bot = class Bot {
    id;

    nomBot;

    picture;

    propositionsList;

    constructor(id, nomBot, picture, propositionsList) {
        this.id = id;
        this.nomBot = nomBot;
        this.picture = picture;
        this.propositionsList = propositionsList;
    }

    async checkInput(inputMsg, bots, conversation, mainExec, callback) {
        for (let i = 0; i < this.propositionsList.length; i += 1) {
            const purpose = this.propositionsList[i];
            for (let j = 0; j < purpose.propositions.length; j += 1) {
                if (purpose.propositions[j] === inputMsg) {
                    if (!purpose.url) {
                        callback(this, purpose.response(), bots, conversation, mainExec);
                    } else {
                        this.getApi(purpose, bots, conversation, mainExec, callback);
                    }
                }
            }
        }
    }

    async getApi(purpose, bots, conversation, mainExec, callback) {
        const resultat = await fetch(purpose.url);
        const content = await resultat.json();
        callback(this, purpose.response(content), bots, conversation, mainExec);
    }
};

export default Bot;