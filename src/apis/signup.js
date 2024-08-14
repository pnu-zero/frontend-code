import instance from './instance';

const signup = () => {
  instance
    .post('/auth/sign-up', {
      email: 'yungs0917@naver.com',
      username: 'seunghun',
      password: 'password',
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default signup;

export const getValidCheck = (payload, setValidCheck) => {
  instance
    .post('/email/check-valid', {
      email: payload.email,
      code: payload.code,
    })
    .then((response) => {
      console.log(response);
      setValidCheck(true);
    })
    .catch((error) => {
      console.log(error);
    });
};
