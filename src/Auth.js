import auth0 from 'auth0-js';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: 'groove-ecommerce.auth0.com',
      audience: 'https://groove-ecommerce.auth0.com/userinfo',
      clientID: 'L2aq7ZRBMjl2HTYMYiDBxMTXE0O52qjY',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  showAdmin() {
      console.log(this.email === 'horacio.hhh1@gmail.com');
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
          
        }
        console.log(authResult.idTokenPayload)
        this.email = authResult.idTokenPayload.name;
        // this.showAdmin();
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        if (authResult.idTokenPayload.name !== "horacio.hhh1@gmail.com") {
          
        }
        // set the time that the id token will expire at
        this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
        resolve();
      });
    })
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  signIn() {
    this.auth0.authorize();
  }

  signOut() {
    // clear id token, profile, and expiration
    this.auth0.logout();
  }
}

const auth0Client = new Auth();

export default auth0Client;