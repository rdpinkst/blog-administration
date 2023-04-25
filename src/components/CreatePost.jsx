import { useState } from 'react';
import {useLocation} from 'react-router-dom';

function CreatePost() {
    const location = useLocation();
    const {postData} = location.state;

    const [title, setTitle] = useState(() => postData.title ? postData.title : "");
    const [postBody, setPostBody] = useState(() => postData.postBody ? postData.postBody: "");
    const [check, setCheck] = useState(() => postData.publish ? true : false);

    const handleChange = () => {
        setCheck(!check);
    }


    return (
        <div className="bg-shell flex grow justify-center">
            <form action="#" className= "w-1/2 rounded overflow-hidden shadow-lg p-9 mt-28 space-y-8 h-fit bg-sand">
                <h2 className="text-5xl text-center font-bold text-grape">Create Post</h2>
                <div className="pb-4">
                    <label htmlFor="title"></label>
                    <input className="form-input px-4 py-3 rounded-full w-full" 
                    type="text" name="title" id="title" placeholder="Post Title" 
                    value={title} onChange={(e) => setTitle(e.target.value)}/>  
                </div>
                <div className="pb-4">
                    <label htmlFor="postBody"></label>
                    <textarea className="form-input block h-48 px-4 py-3 rounded-lg w-full" 
                    type="text" name="postBody" id="postBody" placeholder="Write your post..."
                    value={postBody} onChange={(e) => setPostBody(e.target.value)}/> 
                </div>
                <div className="flex justify-end items-center pb-2">
                    <label htmlFor="publish" className="text-grape text-lg font-bold">Publish Post:</label>
                    <input className="form-input ml-5 h-4 w-4" 
                    type="checkbox" name="publish" id="publish" checked={check} onChange={handleChange} /> 
                </div>

                <button className="font-bold py-2 px-4 rounded bg-grape 
                text-white w-full font-semibold text-lg">Create</button>
            </form>
        </div>
    )
}

export default CreatePost;