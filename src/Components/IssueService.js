import axios from 'axios';

const url = 'http://localhost:8080/api/issues/';

class IssueService {
    // Get Tickets
    static getTickets() {
        return axios.get(url)
            .then((response) => response.data);
    }

    // Create Ticket adjust to accept multiple fields
    static  insertTicket(text) {
        return axios.post(url, {text})
    }

    // Get one Ticket
    static getOneTicket(id) {
        return axios.get(`${url}${id}`)
            .then((response) => response.data);
    }

    // Update Ticket put
    static updateTicket(id) {
        return axios.put(`${url}${id}`);
            // .then(response => this.setState({ updatedTimestamp: response.data.updatedTimestamp })); ??
    }

    // Delete Ticket
    static deleteTicket(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default IssueService;
