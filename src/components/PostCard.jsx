import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const API_DELETE = "https://holy-water-2894.fly.dev/api/v1/posts";

function PostCard({postData, setPostData}) {

  async function deletePost() {
    let api_to_delete = API_DELETE + "/" + postData._id;
    let jwt = localStorage.getItem("token");

    const res = fetch(api_to_delete, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + jwt,
      }
    })

    if(res) {
      setPostData(prevState => prevState.filter(data => data._id !== postData._id));
    }
    
  }
  
    return (
        <div className='container p-4 flex flex-col justify-between bg-shell w-80 h-80 border-2 border-eggplant rounded'>
          <div>
           <h2 className='text-center font-bold text-xl'>{postData.title}</h2>
           <p className='mt-2 mb-2'>{postData.postBody}</p> 
          </div>
          
          <div className='flex justify-end'>
            <Link to='/new-post' state={{postData: postData}}><EditIcon className='mr-4' /></Link>
            <button onClick={deletePost}><DeleteIcon /></button>
          </div>
        </div>


        
    )
}

export default PostCard;