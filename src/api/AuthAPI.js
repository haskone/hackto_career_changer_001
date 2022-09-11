export default class AuthAPI {
  login({
    email,
    password
  }
  ){
    const resp = fetch('https://hacketeers.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
      body: JSON.stringify({
        username: email,
        password
      })
    })


    if (resp.ok) {
      return resp.json();
    }

    return Promise.resolve({
          user: {
            email: 'jamie@gmail.com',
            name: 'Jamie',
            profilePic: 'pic.png'
          }
        });
  }
}