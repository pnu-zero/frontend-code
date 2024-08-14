import instance from './instance';

const login = () => {
  instance
    .post('/auth/sign-in', {
      id: '',
      password: '',
    })
    .then((response) => {
      const token = response.headers.Authorization;
      // token 복화하면 유저 네임 나옴
      const { userName } = response.data;
      instance.defaults.headers.common.Authorization = token;
      localStorage.setItem('userName', userName);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default login;
