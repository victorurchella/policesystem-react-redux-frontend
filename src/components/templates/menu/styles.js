/* eslint linebreak-style: ["error", "windows"] */
import styled from 'styled-components';

export const Menu = styled.header`

    width: 100vw;
    height: 8vh;
    background-color: #020f21;

    display:  flex;
    flex-direction: row;
    align-items: center;

    user-select: none;

    a {
        text-decoration: none;
    }

    #logoutBtn {
        width: 40px;
        height: 40px;

        border: none;
        border-radius: 40px;

        margin-left: 2.5vw;
    }

    .header-apresentation {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 25px;
        font-weight: bold;
        color: #f5f5f5;

        text-decoration: none;
        margin-left: 6.7vw;

        transition: color 0.2s ease
    }

    .header-user {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 23px;
        font-weight: bold;
        color: #f5f5f5;

        margin-left: 57.5vw;

        transition: color 0.2s ease
    }

    .header-user:hover,
    .header-apresentation:hover {
        color: white
    }

`;

export const AsideMenu = styled.nav`
    font-family: Arial, Helvetica, sans-serif;

    #menuToggle {
        display: block;
        position: relative;
        top: 50px;
        margin-left: 50px;
        
        z-index: 1;
        
        -webkit-user-select: none;
        user-select: none;
    }

    #menuToggle a {
        text-decoration: none;
        color: #f6f6f6;

        cursor: pointer;
        
        transition: color 0.3s ease;
    }

    #menuToggle a:hover {
        color: #007eed;
    }

    #menuToggle input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        
        cursor: pointer;
        
        opacity: 0;
        z-index: 2;
        
        -webkit-touch-callout: none;
    }

    #menuToggle span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        
        background: #020f21;
        border-radius: 3px;
        
        z-index: 1;
        
        transform-origin: 4px 0px;
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease;
    }

    #menuToggle span:first-child {
        transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    #menuToggle input:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #f6f6f6;
    }

    #menuToggle input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    #menuToggle input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
    }

    #menu {
        position: absolute;
        width: 125px;
        margin: -77px 0 0 -50px;
        padding: 18px;
        padding-top: 100px;

        border-bottom-right-radius: 15px;
        
        background: #011024;
        list-style-type: none;
        
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    #menu li {
        padding: 8px 0;
        font-size: 22px;
    }

    #menuToggle input:checked ~ ul {
        transform: none;
    }

`;
