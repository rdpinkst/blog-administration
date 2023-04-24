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
                {postData.map(data => {
                    return <PostCard key={data.id} postData= {data} />
                })} 
              </div>
            }
        </div>
    )
}

const postData = [
    {
        id: 1,
        user: "some user object",
        title: "Post Title",
        postBody: "This is the first sentence of the post.",
        publish: "True",
        timestamps: Date.now(),
    },
    {
        id: 2,
        user: "some user object",
        title: "Post Title",
        postBody: "This is the first sentence of the post.",
        publish: "True",
        timestamps: Date.now(),
    },
    {
        id: 3,
        user: "some user object",
        title: "Post Title",
        postBody: "This is the first sentence of the post.",
        publish: "True",
        timestamps: Date.now(),
    },
    {
        id: 4,
        user: "some user object",
        title: "Post Title",
        postBody: "This is the first sentence of the post.",
        publish: "True",
        timestamps: Date.now(),
    },
    {
        id: 5,
        user: "some user object",
        title: "Post Title",
        postBody: "This is the first sentence of the post.",
        publish: "True",
        timestamps: Date.now(),
    },
    {
        id: 6,
        user: "some user object",
        title: "Post Title",
        postBody: "This is the first sentence of the post.",
        publish: "True",
        timestamps: Date.now(),
    },
    {
        id: 7,
        user: "some user object",
        title: "Post Title",
        postBody: "This is the first sentence of the post.",
        publish: "True",
        timestamps: Date.now(),
    },
]

export default Homepage;