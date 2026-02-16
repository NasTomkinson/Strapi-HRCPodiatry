export default ({env}) => {
    
  console.log('AWS_ACCESS_KEY_ID =', env('AWS_ACCESS_KEY_ID'));
  console.log('AWS_SECRET_ACCESS_KEY =', env('AWS_SECRET_ACCESS_KEY') ? 'SET' : 'MISSING');

  return {
    upload: {
        config: {
            provider: "aws-s3",   
            providerOptions: {
                credentials: {
                    accessKeyId: env('AWS_ACCESS_KEY_ID'),
                    secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
                },
                region: env("AWS_REGION"),
                params: {
                    Bucket: env("AWS_BUCKET"),
                    ACL: null
                },
            },
            breakpoints: {
                thumbnail: 156,
                small: 640,
                medium: 768,
                large: 1024,
            },
        },
    },
    seo: {
        enabled: true,
    }, 
}

};
