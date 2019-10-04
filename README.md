# msg-code

This npm used to provide the messages for the particular code.
Below the list of Error and Success messages are there.
Please select the code for the corresponding messages.


# Example

 ```javascript
const msgCode = require('msg-code')
msgCode.msg('SMG001')

//  { 'code':SMG001, 'msg': 'Successfully Inserted.'};
 ```

# 

####  SUCCESS MESSAGES

   * "SMG000": "Success",
   * "SMG001": "Successfully Inserted."
   * "SMG002": "Successfully Updated."
   * "SMG003": "Successfully Deleted."
   * "SMG004": "Successfully Created."

####    ERROR MESSAGES
   * "EMG000":"ERROR"
   * "EMG001": "Failed to insert."
   * "EMG002": "Failed to Update."
   * "EMG003": "Failed to Delete."
   * "EMG004": "Failed to Create"
   * "EMG010": "The field should not be empty.",
   * "EMG011": "Please fill all the fields.",
   * "EMG012": "Should not be undefined.",
   * "EMG013": "Should not be null.",
   * "EMG025": "Oops, Something Went Wrong.",
   * "EMG026": "Token Not Valid",
   * "EMG027": "Token Expired. ",


