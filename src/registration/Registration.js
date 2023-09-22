import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Registration extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://register.rockthevote.com/assets/rtv-iframe.js';
        script.async = true;

        script.onload = () => {
            window.RtvIframe.init({ partner: 39144, source: "PA YOUTH VOTE" });
        };

        document.getElementById('rock-the-vote-script').appendChild(script);

        this.cleanupScript = () => {
            document.querySelector('rock-the-vote-script').appendChild(script);
        };
    }

    componentWillUnmount() {
        if (this.cleanupScript) {
            this.cleanupScript();
        }
    }

    render() {
        const { loggedInUser } = this.props;

        return (
        <div>
            <div style={{ display: "flex" }} >
                <span style={{ fontSize: "18px", color: "#333333", flex: 2, marginTop: "5px" }}>Welcome  {loggedInUser}!</span>
            </div>
            <header>
                <h1>PA YOUTH VOTE: Voter Registration</h1>
            </header>
            <div id="rock-the-vote-script" >
            </div>
        </div>
        );
    }
}

export default Registration;
