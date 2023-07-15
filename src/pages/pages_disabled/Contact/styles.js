import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";
  overflow-y: scroll;
  

  >main {
    grid-area: content;
    padding: 50px 0; 

  };
`

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 30px; 
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 20px;

`;
