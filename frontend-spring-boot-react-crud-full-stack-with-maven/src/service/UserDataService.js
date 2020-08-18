import axios from 'axios'

//const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
//const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class UserDataService {

    retrieveAllUsers() {
        //console.log('executed service')
        return axios.get(`${COURSE_API_URL}/users`);
    }

    retrieveUser(id) {
        //console.log('executed service')
        return axios.get(`${COURSE_API_URL}/users/${id}`);
    }

    deleteUser(id) {
        //console.log('executed service')
        return axios.delete(`${COURSE_API_URL}/users/${id}`);
    }

    updateUser(id, user) {
        //console.log('executed service')
        return axios.put(`${COURSE_API_URL}/users/${id}`, user);
    }

    createUser(user) {
        //console.log('executed service')
        return axios.post(`${COURSE_API_URL}/user`, user);
    }
}

export default new UserDataService()