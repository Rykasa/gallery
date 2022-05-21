import { useState } from 'react'
import * as C from './styles'

export function FileArea(){
  const [selectedFile, setSelectedFile] = useState(false)
  return(
    <C.Container>
      <C.FileInput type="file" onClickCapture={() => setSelectedFile(true)} valor={selectedFile} />
      <button type="submit">Send</button>
    </C.Container>
  )
}