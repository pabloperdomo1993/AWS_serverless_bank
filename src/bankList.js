const { dynamodb } = require('./const/providers');
const { sendResponse } = require('./utils/sendResponse');

module.exports.bankList = async (event) => {
    const result = await dynamodb.scan({
        TableName: 'banksTable'
    }).promise();

    return sendResponse(200, result.Items);
}