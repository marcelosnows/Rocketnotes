import styled from 'styled-components'; // importamos o styled

export const Container = styled.div`
   
  width: 100%; // ocupe a tela toda
  height: 100vh; // altura da tela
  
  display: grid;
  grid-template-rows: 105px auto; // altura e o restante de acordo com o conteúdo.
  grid-template-areas: // dando nome as areas do grid.
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll; // qdo o conteúdo não couber na vertical "scroll"
    padding: 64px 0;
  }
`;

export const Links = styled.ul`
  list-style: none;

  li {
    margin-top: 12px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  };
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto; // etratégia para posicionar todo o conteúdo no centro tela.

  display: flex;
  flex-direction: column;

  > button:first-child {
      align-self: end;
  };

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  };
  
  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  };
  
`;


/*
  criamos o componente container atribuímos o styled com a prop.div e para atribuir a estilização, utilizamos
  o Templete literals.
  Para que este componente possa ser utilizado/visualizado por outro arquivo, temos que espartá-lo,
  por isso o export.
*/ 