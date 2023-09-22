import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from 'react-router-dom';
import { updateUserPoints } from '../points/api';
class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        const { loggedInUser } = this.props;

        return (
            <>
                <nav>
                    <div style={{ display: "flex" }} >
                        <span style={{ fontSize: "18px", color: "#333333", flex: 2, marginTop: "5px",marginLeft:"20px" }}>Welcome  {loggedInUser}!</span>
                    </div>

                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a className="active" href="index.html">Home</a></li>

                        <li className="nav-item"><Link to="/election-info" data-toggle="collapse" data-target="#navbarCollapse">Election</Link></li>
                        {/* <li><Link to={() => {this.handleClick(); return "/election-info"}}>Election2</Link></li> */}
                        <li><Link to="/polling-booths">Polling Locations</Link></li>
                        <li><Link to="/registration">Registration</Link></li>
                        <li><Link to="/polling-booths">Polling</Link></li>
                        <li><Link to="/voter-information">VoterInfo</Link></li>
                        <li><Link to="/candidate-information">Representatives Info</Link></li>  
                    </ul>


                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    
                </nav>
            </>
        )
    }
}

export default Navbar;
