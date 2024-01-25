const { dynamodb } = require('./const/providers');
const { sendResponse } = require('./utils/sendResponse');

module.exports.accountTypeList = async (event) => {
    const result = await dynamodb.scan({
        TableName: 'accountTypesTable'
    }).promise();

    return sendResponse(200, result.Items);
}