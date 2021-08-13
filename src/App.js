import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import BugDetails from "./Components/BugDetails";
import Buglist from "./Components/Buglist";
import { withAuth0 } from "@auth0/auth0-react";
import IssueService from "./Components/IssueService";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            issues: [],
        };
    }

    componentDidMount() {
        const {isAuthenticated} = this.props.auth0;
        if (isAuthenticated) {
            this.loadTickets();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {isAuthenticated} = this.props.auth0;
        const wasAuthenticated = prevProps.auth0.isAuthenticated;
        if (
            isAuthenticated
            && !wasAuthenticated
        ) {
            this.loadTickets();
        }
        else if(
            !isAuthenticated
            && wasAuthenticated
        ) {
            this.resetOnLogout();
        }
    }

    loadTickets() {
        IssueService.getTickets()
            .then((issues) => {
                this.setState({
                    issues,
                    loading: false,
                });
            });
    }

    resetOnLogout() {
        this.setState({
            issues: [],
            loading: true,
        });
    }

    render() {
        const {
            isLoading,
            isAuthenticated,
        } = this.props.auth0;

        let content = (<div>Loading...</div>);
        const isAuth0AndContentDoneLoading = (
            !isLoading
            && !this.state.loading
        );
        if(isAuth0AndContentDoneLoading) {
            content = (
            <Switch>
                <Route path="/">
                    <Buglist issues={this.state.issues} />
                </Route>
                <Route path="/issue/:id">
                    <BugDetails issues={this.state.issues} />
                </Route>
            </Switch>);
        }
        return (
            <Router>
                <LoginButton />
                { isAuthenticated && (<LogoutButton />) }
                { isAuthenticated && content }
            </Router>
        );
    }
}

export default withAuth0(App);
