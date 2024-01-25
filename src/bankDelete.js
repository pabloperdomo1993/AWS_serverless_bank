const { dynamodb } = require('./const/providers');
const { sendResponse } = require('./utils/sendResponse');

module.exports.bankDelete = async (event) => {
    const { idBank } = JSON.parse(event.body);

    try {
        await dynamodb.delete({
            TableName: 'banksTable',
            Key: {
                idBank: idBank
            }
        }).promise();

        return sendResponse(200, 'Deleted bank successfully!');
    } catch (error) {
        return sendResponse(400, error);
    }
}