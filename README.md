# msg-code

This npm used to provide the messages for the particular code.
Below the list of Error and Success messages are there.
Please select the code for the corresponding messages.

const msgCode = require('msg-code')
msgCode.msg('SMG001')

// { 'code':SMG001, 'msg': 'Successfully Inserted.'};


    #SUCCESS MESSAGES
    "SMG000": "Success",
    "SMG001": "Successfully Inserted."
    "SMG002": "Successfully Updated."
    "SMG003": "Successfully Deleted."
    "SMG004": "Successfully Created."

    #ERROR MESSAGES
    "EMG000":"ERROR"
    "EMG001": "Failed to insert."
    "EMG002": "Failed to Update."
    "EMG003": "Failed to Delete."
    "EMG004": "Failed to Create"