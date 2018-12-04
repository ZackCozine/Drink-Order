
    if(process.env.NODE_ENV = production){
         AUTH_CONFIG ={

    domain: "drink-order.auth0.com",
    clientId: "Gq4062xx3-delMHyAkFxcAN_Mo2uGsD9",
    callbackUrl: "http://localhost:3000/callback"
    }
}
    else
    {
         AUTH_CONFIG = {
        domain: AUTH0_CLIENT_ID,
        clientId: AUTH0_CLIENT_ID,
        callbackUrl: AUTO0_CALLBACK_URL
    }
    }

export default AUTH_CONFIG;
