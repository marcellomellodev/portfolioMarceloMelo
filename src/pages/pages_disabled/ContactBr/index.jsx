// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Container, Content } from './styles';

export function Details(){
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <h1>
            Aider les entreprises à créer des produits numériques modernes et de haute qualité. !
          </h1>

          <p>
            Ajudando empresas a construírem produtos digitais de forma moderna e de alta qualidade.!
          </p>

          <h2>
            Un mélange de conception, de développement frontend et de compétences professionnelles qui permettront à votre produit de se démarquer sur le marché.
          </h2>

          <p>
            Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado. 
          </p>
          
        </Content>
      </main>
    </Container>
  )
} 