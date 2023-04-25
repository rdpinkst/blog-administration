import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

function PostCard({postData}) {
    return (
        <div className='container p-4 flex flex-col justify-between bg-shell w-80 h-80 border-2 border-eggplant rounded'>
          <div>
           <h2 className='text-center font-bold text-xl'>{postData.title}</h2>
           <p className='mt-2 mb-2'>{postData.postBody}</p> 
          </div>
          
          <div className='flex justify-end'>
            <Link to='/new-post' state={{postData: postData}}><EditIcon className='mr-4' /></Link>
            <DeleteIcon />
          </div>
          
        </div>

        
    )
}

export default PostCard;