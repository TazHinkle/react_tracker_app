import React from 'react';
import {
    Link
} from "react-router-dom";

class Buglist extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTableData() {
        return this.props.issues.map((issue, index) => {
            const { _id, name, createdTimestamp, editedTimestamp, description, owner, status } = issue //destructuring
            const issueUrl = `/issue/${_id}`;
            return (
                <tr
                    className="table-primary"
                    key={_id}
                    style={{"borderWidth":"1px", 'borderColor':"#aaa", 'borderStyle':'solid'}}
                >
                    <td><Link to={issueUrl}>{name}</Link></td>
                    <td><Link to={issueUrl}>{createdTimestamp}</Link></td>
                    <td><Link to={issueUrl}>{description}</Link></td>
                    <td><Link to={issueUrl}>{owner}</Link></td>
                    <td><Link to={issueUrl}>{status}</Link></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="buglist">
                <div id="bug-table">
                    <h2>Current Issues</h2>
                    <table
                        className="table table-hover"
                        id="issues"
                    >
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>created</th>
                            <th>description</th>
                            <th>owner</th>
                            <th>status</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.renderTableData() }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Buglist
