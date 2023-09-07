import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    };
  };
`;

  export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(4) {
      margin-top: 24px;
    };
`;

  export const Avatar = styled.div`
    position: relative;
    margin: -125px auto 32px;
    
    // usando a mesma altura e largura do Avatar
    width: 186px;
    height: 186px;
    
    // usando o border-radius de 50% para a imagem ficar redonda
    > img {
      width: 186px;
      height: 186px;
      border-radius: 50%;
    }

    > label {
      width: 30px;
      height: 30px;

      background-color: ${({ theme }) => theme.COLORS.ORANGE};
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 7px;
      right: 7px;

      cursor: pointer;

      input {
        display: none;
      }

      svg {
        width: 15px;
        height: 15px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      }
    };
  `;