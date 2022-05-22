import { Trash } from 'phosphor-react';
import * as C from './styles'

type PhotoProps = {
  url: string;
  name: string;
  handleDeleteImage: (id: string) => void
}

export function Photo({ url, name, handleDeleteImage }: PhotoProps){
  
  return(
    <C.Container>
      <C.Image src={url} alt={name} />
      <span>{name}</span>
      <div className="delete-btn">
        <Trash color="#fff" size="20px" onClick={() => handleDeleteImage(name)} />
      </div>   
    </C.Container>
  )
}