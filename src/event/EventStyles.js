import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
