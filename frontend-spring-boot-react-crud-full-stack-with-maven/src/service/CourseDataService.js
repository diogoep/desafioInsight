import axios from 'axios'

//const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
//const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses() {
        //console.log('executed service')
        return axios.get(`${COURSE_API_URL}/courses`);
    }

    retrieveCourse(id) {
        //console.log('executed service')
        return axios.get(`${COURSE_API_URL}/courses/${id}`);
    }

    deleteCourse(id) {
        //console.log('executed service')
        return axios.delete(`${COURSE_API_URL}/courses/${id}`);
    }

    updateCourse( id, course) {
        //console.log('executed service')
        return axios.put(`${COURSE_API_URL}/courses/${id}`, course);
    }

    createCourse(course) {
        //console.log('executed service')
        return axios.post(`${COURSE_API_URL}/courses`, course);
    }

    retrieveAllUsers(id) {
        //console.log('executed service')
        return axios.get(`${COURSE_API_URL}/courses/${id}/addUser`);
    }

    retrieveUsersNotOnCourse(id) {
        //console.log('executed service')
        return axios.get(`${COURSE_API_URL}/courses/${id}/getUsers`);
    }

    addUser(id, idUser) {
        //console.log('executed service')
        return axios.put(`${COURSE_API_URL}/courses/${id}/addUser/${idUser}`);
    }
    
    deleteUser(id, idUser) {
        //console.log('executed service')
        return axios.delete(`${COURSE_API_URL}/courses/${id}/addUser/${idUser}`);
    }
}



export default new CourseDataService()