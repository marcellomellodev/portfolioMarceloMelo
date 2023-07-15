// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import img01 from "../../assets/img01.jpg";

import { Container, Content } from './styles';

export function Details(){
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <div className='content01'>
            <div className='contentText'>
              <h1>
                Bienvenu!!! 
              </h1>
              <h2>
                On aide les entreprises à créer des produits numériques modernes et de haute qualité. !
              </h2>

              <p>
                Un mélange de conception, de développement frontend et de compétences professionnelles qui permettront à votre produit de se démarquer sur le marché.
              </p>
            </div>

            <div className='imag01'>
              <img src={img01} alt="imagem " />
            </div>
          </div>


        </Content>
      </main>
    </Container>
  )
} 