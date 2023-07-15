import { HiTranslate } from "react-icons/hi";
import { PiDevToLogo } from "react-icons/pi";


import { Container, WrapperHeader } from './styles';


export function HeaderBr (){
  return(
    <Container>
      <WrapperHeader>
      <div className='logo'>
          <PiDevToLogo/>
          <span>Marcelo Melo</span>
        </div>

        <div className='wrapperPages'>
          <ul>
            <li>Home</li>
            <li>Portfólio</li>
            <li>Contato</li>
          </ul>
        </div>

        <div className='btnLanguage'>
          <HiTranslate/>
          <a href="index.html">Francês </a>
          <a href="indexBr.html">Português</a>
        </div>
      </WrapperHeader>
    </Container>
  )
}