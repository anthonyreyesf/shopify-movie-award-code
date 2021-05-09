import styled from "styled-components";

export const Section = styled.div`
    width: 100vw;
    height: 80vh;
    background-color: #FBF7ED;
    color: #004c3f;
    position: relative;
    white-space: pre;
`;

export const About = styled.div`
    position: absolute;
    top: 40%;
    left: 5em;
`;

export const headline = styled.div`
    font-size: 3em;
    font-weight: 800;
    margin-bottom: .25em;
`;

export const Description = styled.div`
    font-size: 1em;
    color: #42474c;
    line-height: 1.5;
`;

export const FactContainer = styled.div`
    color: #FFFFFF;
    background-color: #014C3E;
    padding: 1.3em;
    display: inline-block;
    position: absolute;
    bottom: 9em;
    right: 9em;
    z-index: 1;
`;

export const FactTitle = styled.div`
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: .5em;
`;

export const FactDescription = styled.div`
    font-size: 1em;
    line-height: 1.5;
`;

export const Image = styled.img`
    width: 20em;
    height: auto;
    position: absolute;
    top: 50%;
    right: 5em;
    transform: translateY(-50%);
`;

export const Link = styled.a`
    color: #004c3f;
`;

export const LinkTwo = styled.a`
    color: #FFFFFF;
`;
