import styled from "styled-components";

export const Section = styled.div`
    min-height: 100vh;
    padding: 2em 5em .25em 5em;
    background-color: #FBF7ED;
    color: #004c3f;
    position: relative;
    white-space: pre;
`;

export const MovieList = styled.div``;

export const Searchbar = styled.input`
    padding: .5em .75em;
    border: 1px solid #212326;
    border-radius: 5px;

    ::placeholder {
        font-weight: 500;
        color: #014C3E;
    }
`;

export const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: space-between;
    margin: 2em 0;
`;

export const Empty = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center;
`;

export const EmptyImg = styled.img`
    width: 20em;
`;

export const EmptyLabel = styled.div`
    font-size: 12px;
    font-weight: 700;
`;

export const EmptyDescription = styled.div`
    font-size: 12px;
`;

export const NomineesList = styled.div`
    display: flex;
`;

export const NomineesLabel = styled.p`
    font-weight: 700;
`;

export const NomineesTitle = styled.p`
    margin: auto 1em;
    cursor: pointer;
`;
