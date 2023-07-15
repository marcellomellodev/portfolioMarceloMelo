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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .content01{
    display: flex;
    margin: 0 auto;
    align-items: center;
    gap: 80px;
    
    .contentText{
      display: flex;
      flex-direction: column;
      max-width: 500px;
      line-height: 30px;
      text-align: justify;

      >h1{
        color: ${({ theme}) => theme.colors.bg_08};
        margin-bottom: 25px;
      }

      h2{
        margin-bottom: 25px;
      }
    }
  }
  
  .imag01{
    img{
      width: 450px;
      border-radius: 20px;
    }
  }
`;
