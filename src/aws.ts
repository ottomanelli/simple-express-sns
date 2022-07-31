import AWS from 'aws-sdk'

AWS.config.update({ region: process.env.AWS_REGION });

export const sendSMS = async (message: string) => {
    console.log(`Sending SMS message with message: ${message}`);

    var snsParams = {
        Message: message,
        TopicArn: process.env.AWS_TOPIC_ARN,
    };

    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(snsParams).promise();

    publishTextPromise.then(function(data) {
        console.log(`Message "${snsParams.Message}" sent to the topic "${snsParams.TopicArn}"`);
        console.log("MessageID is " + data.MessageId);
    }).catch(
        function(err) {
            console.error(err, err.stack);
    });

    console.log('Message sent!')
}
