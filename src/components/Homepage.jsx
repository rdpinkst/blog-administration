import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';
import { useState } from 'react';


function Homepage() {
    const [noPosts, setNoPosts] = useState(true);
    return (
        <div className="bg-shell flex grow justify-center items-center">
            { noPosts &&
            <div className="flex flex-col h-44">
               
                 <Link to="/new-post">
                   <UploadFileIcon className="flex-no-shrink fill-current" viewBox="0 0 24 24" heigth="auto" width="50%" /> 
                   <h2>CREATE YOUR FIRST POST</h2>
                 </Link>  
            </div>
            }
            { !noPosts &&
                 <PostCard />
            }
        </div>
    )
}

export default Homepage;