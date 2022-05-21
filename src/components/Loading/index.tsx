import * as C from './styles'
import { CircleNotch} from 'phosphor-react'

export function Loading(){
  return(
    <C.Loading>
      <CircleNotch size="90px" className="loading" color="#69EBD0" />
    </C.Loading>
  )
}