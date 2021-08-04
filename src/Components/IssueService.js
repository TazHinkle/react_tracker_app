import axios from 'axios';

const url = 'http://localhost:8080/api/issues';

class IssueService {
    // Get Tickets
    static getTickets() {
        return axios.get(url)
            .then((response) => response.data);
    }

    // Create Ticket
    static  insertTicket(text) {
        return axios.post(url, {text})
    }

    // Update Ticket -todo add put request

    // Delete Ticket
    static deleteTicket(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default IssueService;
