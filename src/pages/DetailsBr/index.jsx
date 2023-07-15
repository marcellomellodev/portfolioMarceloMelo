// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Button } from '../../components/Button';
import { HeaderBr } from '../../components/HeaderBr';

import { Container, Content } from './styles';

export function DetailsBr(){
  return(
    <Container>
      <HeaderBr/>
      <main>
        <Content>
          <h1>
          Ajudando empresas a construírem produtos digitais de forma moderna e de alta qualidade.!
          </h1>

          <p>
            Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado. 
          </p>
          
        </Content>
      </main>
    </Container>
  )
} 