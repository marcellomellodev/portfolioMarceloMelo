import { HiTranslate } from "react-icons/hi";
import { PiDevToLogo } from "react-icons/pi";

import { Container, WrapperHeader } from './styles';


export function Header (){
  return(
    <Container>
      <WrapperHeader>
        <div className='logo'>
          <PiDevToLogo/>
          <span>Marcelo Melo</span>
        </div>

        <div className='wrapperPages'>
          <ul>
            <li>Accueil</li>
            <li>Portefeuille</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='btnLanguage'>
          <HiTranslate/>
          <a href="index.html">French</a>
          <a href="indexBr.html">Portuguese</a>
        </div>
      </WrapperHeader>
    </Container>
  )
}