import { Container } from './styles';
import { Tag } from '../Tag';


export function Note({ data, ...rest }){ // como serão várias propriedades vamos criar como um objeto data.
  return(
    <Container { ...rest }>
      <h1>{data.title}</h1>
      {
        data.tags && // renderizar se houver tag.
        <footer> 
           { // percorrendo cada tag e o id para identificar cada elemento como único.
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
           } 
        </footer> // como se fosse o rodapé do cartão. 
      }
    </Container>
  );
};

  