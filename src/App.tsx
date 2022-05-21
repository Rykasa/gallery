import { FileX, FileDotted ,Trash, CircleNotch } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Image } from './types/Image'
import * as C from './App.styles'
import { Header } from './components/Header'
import { getAll } from './services/images'
import { Photo } from './components/Photo'
import { Loading } from './components/Loading'
import { FileArea } from './components/FileArea'

export function App(){
  const [isLoading, setIsLoading] = useState(false)
  const [photoList, setPhotoList] = useState<Image[]>([])

  useEffect(() =>{
    const getPhotos = async () =>{
      setIsLoading(true)
      setPhotoList(await getAll())
      setIsLoading(false)
    }
    getPhotos()
  }, [])

  return(
    <C.Container>
      <Header />
      <C.Area>

        <FileArea />

        {isLoading && <Loading />}
        
             
        <C.ImageList>
          {photoList.map((image, index)=>(
            <Photo key={index} url={image.url} name={image.name} />
          ))}
        </C.ImageList>
      </C.Area>
    </C.Container>
  )
}