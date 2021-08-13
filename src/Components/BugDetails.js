import React from 'react';
import { useParams } from 'react-router-dom';

function BugDetails(props) {

    const {issueId} = useParams();
    const issue = props.issues.find((item) => item._id === issueId);
    return (
        <div className="bugDetails">
            <div id="bug-detail-table">
                <h2>some words</h2>
                <table
                    className="table table-hover"
                    id="details"
                >
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>createdTimestamp</th>
                            <th>editedTimestamp</th>
                            <th>description</th>
                            <th>owner</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className="table-primary"
                            key={issue._id}
                            style={{'borderWidth':"1px", 'borderColor':"#aaa", 'borderStyle':'solid'}}
                        >
                            <td>{issue.name}</td>
                            <td>{issue.createdTimestamp}</td>
                            <td>{issue.editedTimestamp}</td>
                            <td>{issue.description}</td>
                            <td>{issue.owner}</td>
                            <td>{issue.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BugDetails;
