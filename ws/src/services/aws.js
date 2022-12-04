const AWS = require('aws-sdk');

module.exports = {
    IAM_USER_KEY: 'AKIAWBRNJWCGW5GVJOYQ',
    IAM_USER_SECRET: '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',
    BUCKET_NAME: 'claudia-gomes-app',
    AWS_REGION: 'sa-east-1',
    uploadToS3: function (file, filename, acl = 'public-read') {
        return new Promise((resolve, reject) => {
            let IAM_USER_KEY = this.IAM_USER_KEY;
            let IAM_USER_SECRET = this.IAM_USER_SECRET;
            let BUCKET_NAME = this.BUCKET_NAME;

            let s3bucket = new AWS.S3({
                acessKeyId: IAM_USER_KEY,
                secretAccessKey: IAM_USER_SECRET,
                Bucket: BUCKET_NAME,
            });

            s3bucket.createBucket(function () {
                var params = {
                    Bucket: BUCKET_NAME,
                    Key: file.name,
                    Body: file.data,
                    ACL: acl,
                };

                s3bucket.upload(params, function (err, data) {
                    if (err) {
                        console.log(err)
                        return resolve({ error: true, message: err.message });
                    }
                    console.log(data);
                    return resolve({ error: false, message: data });
                })
            })
        })
    },
    deleteFileS3: function (key) {
        return new Promise((resolve, reject) => {
            let IAM_USER_KEY = this.IAM_USER_KEY;
            let IAM_USER_SECRET = this.IAM_USER_SECRET;
            let BUCKET_NAME = this.BUCKET_NAME;

            let s3bucket = new AWS.S3({
                acessKeyId: IAM_USER_KEY,
                secretAccessKey: IAM_USER_SECRET,
                Bucket: BUCKET_NAME,
            });

            s3bucket.createBucket(function () {
                s3bucket.deleteObject(
                    {
                        Bucket: BUCKET_NAME,
                        Key: key,
                    },
                    function (err, data) {
                        if (err) {
                            console.log(err)
                            return resolve({ error: true, message: err });
                        }
                        console.log(data);
                        return resolve({ error: false, message: data });
                    }
                );
            })
        })
    }
};