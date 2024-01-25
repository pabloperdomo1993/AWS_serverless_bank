const { dynamodb } = require('./const/providers');
const { sendResponse } = require('./utils/sendResponse');
const { v4: uuidV4 } = require('uuid');

module.exports.bankAccountCreate = async (event) => {
    const { idBank, accountNumber, idFile, idAccountType } = JSON.parse(event.body);
    const createdDate = new Date();
    
    try {
        await dynamodb.put({
            TableName: 'bankAccountsTable',
            Item: {
                idBankAccount: uuidV4(),
                idBank: idBank,
                idUser: '',
                accountNumber: accountNumber,
                idFile: idFile,
                idAccountType: idAccountType,
                createdBy: '',
                createdDate: createdDate.toString(),
                updatedBy: '',
                updatedDate: '', 
            }
        }).promise();
        
        return sendResponse(200, 'Created bank successfully!');
    } catch (error) {
        return sendResponse(400, error);
    }
}