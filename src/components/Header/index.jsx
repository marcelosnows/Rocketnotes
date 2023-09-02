import { RiShutDownLine } from 'react-icons/ri'; // a biblioteca que utilizaremos será a "ri"

import { Container, Profile, Logout } from './styles';

export function Header(){

  return(
    <Container>
      <Profile>
        <img 
          src="http://github.com/marcelosnows.png"
          alt="Foto do usuário" 
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Marcelo Neves</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
 );
}

