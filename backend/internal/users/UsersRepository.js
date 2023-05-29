const { ApiConnector } = require('../../modules/ApiConnector');
const { getGroupMembers } = require('../../modules/urls');
const { GROUP_ID } = require('../../modules/constants');


class UsersRepository {
    static ac = new ApiConnector(getGroupMembers(GROUP_ID));

    static async connect() {
        let res = await this.ac.connect();

        return res;
    }
}

module.exports = {
    UsersRepository,
};
