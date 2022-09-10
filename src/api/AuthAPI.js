export default class AuthAPI {
  login({
    email,
    password
  }) {
    return Promise.resolve({
      user: {
        email: 'email',
        name: 'name',
        profilePic: 'pic.png'
      }
    });

    const resp = fetch('/login', {
      type: 'POST',
      credentials: 'include',
      data: JSON.stringify({
        email,
        password
      })
    });

    if (resp.ok) {
      return resp.json();
    }
    
    return resp;
  }
}
