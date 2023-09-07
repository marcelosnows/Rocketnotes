import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  // se for novo, renderiza na cor transparente, do contrário, background_900;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  // se for novo, renderiza borda e cor, do contário, sem borda
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;
  
  > button {
    border: none;
    background: none;
  }
  // inserindo classe para estilizar a cor dos ícones do botão. 

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  
  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    };
    };
`;
