import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { storage } from "../libs/firebase";
import { Image } from '../types/Image';

export const getAll = async () =>{
  let list: Image[] = []
  const imagesFolder = ref(storage, "images")
  const photoList = await listAll(imagesFolder)

  for(let i in photoList.items){
    let photoUrl = await getDownloadURL(photoList.items[i])

    list.push({
      name: photoList.items[i].name,
      url: photoUrl
    })
  }

  return list
}