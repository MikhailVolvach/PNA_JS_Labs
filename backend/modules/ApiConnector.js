// Здесь будет осуществляться доступ к API VK
const axios = require('axios');

class ApiConnector {
    constructor(url) {
        this.url = url;
    }

    async connect() {
        const response = await axios.get(this.url);

        return response.data.response;
    }

    setUrl(newUrl) {
        this.url = newUrl;
    }
}

module.exports = {
    ApiConnector,
};
