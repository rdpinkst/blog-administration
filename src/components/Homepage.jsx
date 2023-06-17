import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';
import { useEffect, useState } from 'react';

const API_GET = "https://holy-water-2894.fly.dev/api/v1/posts"

function Homepage({token}) {
    const [postData, setPostData] = useState([]);
    let mounted = true;
    
    useEffect(() => {
        if(postData.length) {
            return;
        }
        if(mounted && token) {
           postDataGet(API_GET); 
        }

        return () => mounted = false;
        
    }, [postData, token])
    
    async function postDataGet(url) {
            const res = await fetch(url, {
                method: "GET",
                mode: "cors"
            })
            const obj = await res.json();
            setPostData(prevState => [...obj]);       
        }
  
    
    return (
        <div className="bg-shell flex grow justify-center overflow-scroll p-4">
            { postData.length === 0 ?
            <div className="flex flex-col h-44 self-center">
                 <Link to="/new-post" state={{postData: null }}>
                   <UploadFileIcon className="flex-no-shrink fill-current" viewBox="0 0 24 24" heigth="auto" width="50%" /> 
                   <h2>CREATE YOUR FIRST POST</h2>
                 </Link>  
            </div> :
             <div className='grid xl:grid-cols-4 lg:grid-cols-3 gap-6 mt-14 mb-14 md:grid-cols-2 sm:grid-cols-1'>
                {postData.map(data => {
                    return <PostCard key={data._id} postData= {data} setPostData={setPostData}/>
                })} 
              </div>
            }
        </div>
    )
}

export default Homepage;