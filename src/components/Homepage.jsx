import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';
import { useState } from 'react';


function Homepage() {
    const [noPosts, setNoPosts] = useState(false);
  
    return (
        <div className="bg-shell flex grow justify-center overflow-scroll">
            { noPosts &&
            <div className="flex flex-col h-44 self-center">
               
                 <Link to="/new-post">
                   <UploadFileIcon className="flex-no-shrink fill-current" viewBox="0 0 24 24" heigth="auto" width="50%" /> 
                   <h2>CREATE YOUR FIRST POST</h2>
                 </Link>  
            </div>
            }
            { !noPosts &&
             <div className='grid grid-cols-4 gap-6 mt-14 mb-14'>
                 <PostCard />
                 <PostCard />
                 <PostCard />
                 <PostCard />
                 <PostCard />
                 <PostCard />
                 <PostCard />
                 <PostCard />
                 <PostCard />
                 <PostCard />
                 
              </div>
            }
        </div>
    )
}

export default Homepage;