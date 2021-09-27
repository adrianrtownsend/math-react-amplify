Amplify.configure({
  Auth: {
    identityPoolId: 'xxx',
    region: 'xxx' ,
    cookieStorage: {
      domain: 'xxx',
      path: 'xxx',
      secure: true
    }
  },
  aws_appsync_graphqlEndpoint: 'xxxx',
  aws_appsync_region: 'xxxx',
  aws_appsync_authenticationType: 'xxxx',
  aws_appsync_apiKey: 'xxxx'
});