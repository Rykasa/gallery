import { FileX } from 'phosphor-react'
import { FormEvent, useEffect, useState } from 'react'
import { Image } from './types/Image'
import * as C from './App.styles'
import { Header } from './components/Header'
import { getAll, insert, deleteImage } from './services/images'
import { Photo } from './components/Photo'
import { Loading } from './components/Loading'

export function App(){
  const [isLoading, setIsLoading] = useState(true)
  const [photoList, setPhotoList] = useState<Image[]>([])
  const [selectedFile, setSelectedFile] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)



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

  const handleDeleteImage = async (id: string) =>{
    setIsDeleting(true)
    await deleteImage(id)
    setPhotoList(await getAll())
    setIsDeleting(false)
  }

  return(
    <C.Container>
      <Header />
      <C.Area>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <C.FileInput type="file" name="image" onClickCapture={() => setSelectedFile(true)} valor={selectedFile} />
          <input type="submit" value={isUploading ? "Enviando" : "Enviar"} />
        </C.UploadForm>

        {isLoading && <Loading />}
        {isDeleting && <Loading />}
             

        {photoList.length > 0 && (
          <C.ImageList>
            {photoList.map((image, index)=>(
              <Photo key={index} url={image.url} name={image.name} handleDeleteImage={handleDeleteImage}/>
            ))}
          </C.ImageList>
        )}
        {photoList.length == 0 && !isLoading && (
          <div className="empty" style={{paddingTop: "50px", display: "flex", flexDirection: "column", gap: "10px"}}>
            <FileX size="80px" color="#CAC4CE" style={{display: "flex", margin: "auto"}} />
            <span style={{color: "#CAC4CE", textAlign: 'center'}}>Galeria vazia</span>
          </div>
        )}
      </C.Area>
    </C.Container>
  )
}