import axios from "axios";
import { useState } from "react";


function Classwork (){
    const [post, setPost]= useState([]);
    const  getAllPost = ()=> {
        axios.get (" https://jsonplaceholder.typicode.com/posts").then((response)=>{
          setPost(response.data)
           

        })
    }

    return <div>

        <button onClick={getAllPost}>Get date</button>
     

{
    post.map((post,index)=>(
   <div className="iterm-pare">
    <div className="iterm">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
         

    </div>
   </div>

   ))

}
</div>
}

export default Classwork;
