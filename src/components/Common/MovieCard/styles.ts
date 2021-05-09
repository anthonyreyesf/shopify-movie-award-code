import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 14em;
    white-space: pre-wrap;
    margin-bottom: 1em;
`;

export const Title = styled.p`
    font-weight: 800;
    font-size: 13px;
    margin: 10px 0;
`;

export const Detail = styled.p`
    font-size: 12px;
    margin: 5px 0;
`;

export const Button = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #004c3f;
    color: #ffffff;
    padding: .5em .75em;
    cursor: pointer;
`;

export const PosterContainer = styled.div`
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    width: 14em;
    height: 20em;
`;

export const Poster = styled.img`
    width: 14em;
    height: 20em;
`;
