import axios from "axios";
import { useState } from "react";


function App (){
    const [photos, setPhotos]= useState([]);
    const  getAllPhotos = ()=> {
        axios.get ("https://jsonplaceholder.typicode.com/photos").then((response)=>{
          setPhotos(response.data)
           

        })
    }

    return <div>

        <button onClick={getAllPhotos}>Get date</button>
     

{
    photos.map((photo,index)=>(
   <div className="iterm-pare">
    <div className="iterm">
        <p>{photo.title}</p>
        <img src={photo.thumbnailUrl}/>

    </div>
   </div>

   ))

}
</div>
}

export default App;
