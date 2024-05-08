import http from '../http-common';

class AuthService {
    login(data) {
        return http.post('/auth/login', data);
    }
    signup(data) {
        return http.post('/auth/signup', data);
    }
    logout() {
        return http.get('/auth/logout');
    }
}

export default new AuthService();