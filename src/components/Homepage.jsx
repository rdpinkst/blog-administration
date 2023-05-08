import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';
import { useEffect, useState } from 'react';

const API_GET = "https://holy-water-2894.fly.dev/api/v1/posts"

function Homepage() {
    const [postData, setPostData] = useState([]);
    const [posts, setPosts] = useState(false);
    let postLength = postData.length;

    useEffect(() => {
        async function postDataGet(url) {
            const res = await fetch(url, {
                method: "GET",
                mode: "cors"
            })
            const obj = await res.json();
            setPostData(prevState => [...obj] );
            setPosts(true);
        }
        postDataGet(API_GET);
    }, [])
    
  
    
    return (
        <div className="bg-shell flex grow justify-center overflow-scroll">
            { !posts ?
            <div className="flex flex-col h-44 self-center">
                 <Link to="/new-post" state={{postData: null }}>
                   <UploadFileIcon className="flex-no-shrink fill-current" viewBox="0 0 24 24" heigth="auto" width="50%" /> 
                   <h2>CREATE YOUR FIRST POST</h2>
                 </Link>  
            </div> : null
            }{ posts ?
             <div className='grid grid-cols-4 gap-6 mt-14 mb-14'>
                {postData.map(data => {
                    return <PostCard key={data._id} postData= {data} />
                })} 
              </div> : null
            }
        </div>
    )
}

export default Homepage;