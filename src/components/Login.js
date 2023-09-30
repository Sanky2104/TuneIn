import styled from "styled-components";
import React, {useEffect} from "react";

/*const animateBg = keyframes`
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
`;*/

/*const FullViewport = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    animation: ${animateBg} 0.5s linear infinite;
    @media(max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        //width: 100vw;
        //height: 100vh;
    }
`;*/

const Login = (props) => {
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
      useEffect(() => {
        const interval = setInterval(() => {
          const randomColor = getRandomColor();
          document.body.style.backgroundColor = randomColor;
        }, 500); // Change color every 0.5 seconds
    
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
      }, []);
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/tuneintext.png" alt="" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Where Every Beat Matters...</h1>
                    <img src="/images/tuneinnobg.svg" alt=""></img>
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt=""></img>
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
};

const Container = styled.div`
    padding: 0px;
`;
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    & > a {
        width: 134px; /* Adjust this value */
        height: 34px; /* Adjust this value */
        padding: 20px;
        @media (max-width: 768px) {
            padding: 0 5px;
        } 
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    //color: rgba(0, 0, 0, 0.6);
    color: black;
    margin-right: 12px;
    border-radius: 4px;
    &:hover {
        //background-color: rgba(0, 0, 0, 0.08);
        background-color: yellow;
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
    }
`;

const SignIn = styled.a`
    //box-shadow: inset 0 0 0 1px #0a66c2;
    //color: #0a66c2;
    box-shadow: inset 0 0 0 1px black;
    color: yellow;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);
    &:hover {
        //background-color: rgba(112, 181, 249, 0.15);
        background-color: black;
        color: yellow;
        //color: #0a66c2;
        text-decoration:none;
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height:700px;
    padding-bottom: 75px;
    padding-top: 40px;
    padding: 2px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
        padding-bottom: 150px;
    }
`;

const Hero = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 50px;
        color: #141414;
        font-weight: 200;
        line-height: 60px;
        @media (max-width: 768px) {
            padding: 20px;
            text-align: center;
            font-size: 25px;
            font-weight: 300;
            width: 100%;
            line-height: 2;
        }
    }
    img {
        //z-index: -1;
        margin-top: -50px;
        width: 450px;
        height: 450px;
        //position: relative;
        float: left;
        bottom: -2px;
        right: -150px;
        border-radius: 28px;
        @media (max-width: 768px) {
            top: 230px;
            width: 200px;
            //position: initial;
            margin-top: 10px;
            height: 200px;

        }
    }
`;

const Form = styled.div`
    margin-top: -100px;
    width: 408px;
    @media (max-width: 768px) {
        margin-top: 20px;
        padding:20px;
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);

    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
    img {
        margin-right: 2px;
    }
`;

export default Login;
