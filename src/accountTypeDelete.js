const { dynamodb } = require('./const/providers');
const { sendResponse } = require('./utils/sendResponse');

module.exports.accountTypeDelete = async (event) => {
    const { idAccountType } = JSON.parse(event.body);

    try {
        await dynamodb.delete({
            TableName: 'documentTypesTable',
            Key: {
                idAccountType: idAccountType
            }
        }).promise();

        return sendResponse(200, 'Deleted account type successfully!');
    } catch (error) {
        return sendResponse(400, error);
    }
}