import React from 'react';
import IssueService from "./IssueService";

class Buglist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            issues: [],
        };
    }
    componentDidMount() {
        IssueService.getTickets()
            .then((issues) => {
                this.setState({
                    issues,
                    loading: false
                });
            });
    }

    renderTableData() {
        return this.state.issues.map((issue, index) => {
            const { _id, name, createdTimestamp, editedTimestamp, description, owner, status } = issue //destructuring
            return (
                <tr className="table-primary" key={_id} >
                    {/*<td>{_id}</td>*/}
                    <td>{name}</td>
                    <td>{createdTimestamp}</td>
                    {/*<td>{editedTimestamp}</td>*/}
                    <td>{description}</td>
                    <td>{owner}</td>
                    <td>{status}</td>
                </tr>
            )
        })
    }

    render() {
        let content = (<h2>Loading</h2>);
        if(!this.state.loading) {
            content = (
                <div id="bug-table">
                    <h2>some words</h2>
                    <table className="table table-hover" id="issues">
                        <tbody>
                        { this.renderTableData() }
                        </tbody>
                    </table>
                </div>)
        }
        return (
            <div className="buglist">
                { content }
            </div>
        );
    }
}

export default Buglist
