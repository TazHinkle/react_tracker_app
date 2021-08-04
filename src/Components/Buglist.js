import React from 'react';
import IssueService from "./IssueService";

class Buglist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            items: [],
        };
    }
    componentDidMount() {
        IssueService.getTickets()
            .then((items) => {
                this.setState({
                    items,
                    loading: false
                });
            });
    }
    render() {
        let content = (<h2>Loading</h2>);
        if(!this.state.loading) {
            content = (<ul>
                {this.state.items.map((issue, index) =>
                    <li key={index}>{issue.name}</li>
                )}
            </ul>);
        }
        return (
            <div className="buglist">
                { content }
            </div>
        );
    }
}

export default Buglist
