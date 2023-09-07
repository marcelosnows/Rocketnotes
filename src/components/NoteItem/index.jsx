import {FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

// o value será atribuído a propriedade value e o onClick para o button
export function NoteItem ({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        // se não é novo, bloqueia
        readOnly={!isNew} 
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>

    </Container>
  );
};
