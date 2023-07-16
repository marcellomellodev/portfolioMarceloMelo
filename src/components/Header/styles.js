import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;

  height: 105px;
  width: 100%;

  font-family: 'Poppins', sans-serif;

  background-color: ${({ theme }) => theme.colors.bg_07};

  border-bottom: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.bg_03};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

 
`;

export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  >.logo{
    display: flex;
    align-items: center;
    gap: 5px;
    
    > svg{
      display: flex;

      align-items: center;
      font-size: 40px;
      color: ${({ theme }) => theme.colors.bg_08};
    }

    > span{
      font-size: 25px;
      font-weight: bold;
      color: yellow;

    }
  }

  > .wrapperPages{
    ul{
      list-style-type: none;
      display: flex;
      gap: 80px;
      color: ${({ theme }) => theme.colors.bg_08};

    }
    
  }

  >.btnLanguage{
    display: flex;
    gap: 20px;
    align-items: center;

    > svg{
      color: ${({ theme }) => theme.colors.orange};

    }
    
    a{
      color: ${({ theme }) => theme.colors.orange};

    }
  }
`;

export const btnGoogle = styled.button`
  width: 50px;
  height: 50px;
`