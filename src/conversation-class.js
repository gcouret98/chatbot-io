const ConvHistory = class ConvHistory {
    lockMsg(bot, message) {
        const conv = this.load();
        conv.push({
            idBot: bot.id,
            picture: bot.picture,
            nomBot: bot.nomBot,
            message,
            time: new Date().toLocaleString('fr-FR', { timeZone: 'UTC' })
        });
        localStorage.setItem('conversation', JSON.stringify(conv));
        return conv;
    }

    load() {
        if (localStorage.getItem('conversation') == null) {
            localStorage.setItem('conversation', JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem('conversation'));
    }
};

export default ConvHistory;