import request from '../common/APIWrapper'

function login(data) {
  return request({
    url:    '/auth/login',
    method: 'POST',
    data:   data
  });
}

function signup({subject, content}) {
  return request({
    url:    '/message/create',
    method: 'POST',
    data:   {
      subject,
      content
    }
  });
}

const LoginService = {
  login, signup //, update, delete, etc. ...
}

export default LoginService;