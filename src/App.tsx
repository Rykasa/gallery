import { FileX, FileDotted ,Trash, CircleNotch } from 'phosphor-react'
import { FormEvent, useEffect, useState } from 'react'
import { Image } from './types/Image'
import * as C from './App.styles'
import { Header } from './components/Header'
import { getAll, insert } from './services/images'
import { Photo } from './components/Photo'
import { Loading } from './components/Loading'

export function App(){
  const [isLoading, setIsLoading] = useState(false)
  const [photoList, setPhotoList] = useState<Image[]>([])
  const [selectedFile, setSelectedFile] = useState(false)
  const [isUploading, setIsUploading] = useState(false)



  useEffect(() =>{
    const getPhotos = async () =>{
      setIsLoading(true)
      setPhotoList(await getAll())
      setIsLoading(false)
    }
    getPhotos()
  }, [])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File

    if(file && file.size > 0){
      setIsUploading(true)
      const result = await insert(file)
      setIsUploading(false)

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`)
      }else{
        let newPhotoList = [...photoList]
        newPhotoList.push(result)
        setPhotoList(newPhotoList)
      }
    }
  }

  return(
    <C.Container>
      <Header />
      <C.Area>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <C.FileInput type="file" name="image" onClickCapture={() => setSelectedFile(true)} valor={selectedFile} />
          <input type="submit" value={isUploading ? "Sending" : "Send"} />
        </C.UploadForm>

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