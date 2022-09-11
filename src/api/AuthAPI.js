export default class AuthAPI {
  login({
    email,
    password
  }) {
    return Promise.resolve({
      user: {
        email: 'jamie@gmail.com',
        name: 'Jamie',
        profilePic: 'pic.png'
      }
    });

    // const resp = fetch('/login', {
    //   type: 'POST',
    //   credentials: 'include',
    //   data: JSON.stringify({
    //     email,
    //     password
    //   })
    // });

    // if (resp.ok) {
    //   return resp.json();
    // }
    
    // return resp;
  }
}
