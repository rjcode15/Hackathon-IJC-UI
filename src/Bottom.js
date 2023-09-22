import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './BottomStyles.css';

function Bottom() {
  return (
    <div id="footer-everywhere">
        <p>PA YOUTH VOTE</p>
        <div id="social-media-container">
            <a href="#" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/payouthvote/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
        <p>Invite Your Friends:</p>
        <div id="invite-friends">Invite Now</div>
    </div>
  );
}

export default Bottom;
