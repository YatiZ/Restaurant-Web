// In your Data/fakeLogin.js file
export const fakeLogin = (username, password) => {
    // Simulate a login process (replace this with your actual login logic)
    return new Promise((resolve, reject) => {
      if (username === 'yati' && password === 'yatihtun') {
        // Resolve the promise if login is successful
        resolve({ username: 'yati' });
      } else {
        // Reject the promise if login fails
        reject(new Error('Invalid credentials'));
      }
    });
  };
  