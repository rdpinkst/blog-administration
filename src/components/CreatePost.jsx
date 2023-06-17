import { useState } from 'react';
import {useLocation, Navigate} from 'react-router-dom';

const API_POST = "https://holy-water-2894.fly.dev/api/v1/posts";


function CreatePost() {
    const location = useLocation();
    const {postData} = location.state;
    

    const [title, setTitle] = useState(() => postData ? postData.title : "");
    const [postBody, setPostBody] = useState(() => postData ? postData.postBody: "");
    const [check, setCheck] = useState(() => postData ? postData.publish === "true" ? true : false : false);
    const [update, setUpdate] = useState(() => postData ? true : false);
    const [redirect, setRedirect] = useState(false);

    const handleChange = () => {
        setCheck(!check);
    }

    async function submitPost(e) {
        e.preventDefault();
        let jwt = localStorage.getItem("token");
        let methodType = update ? "PUT" : "POST";
        let api_address = update ? API_POST + "/" + postData._id : API_POST;
        

        const res = await fetch(api_address, {
            method: methodType,
            mode: "cors",
            headers: {
              "Content-type": "application/json",
              "Authorization": "Bearer " + jwt,
            },
            body: JSON.stringify({
              title: title,
              postBody: postBody,
              publish: check ? "true" : "false",    
            })
        })

        const obj = await res.json();
        if(obj) {
            setTitle("");
            setPostBody("");
            setCheck(false);
            setRedirect(true);
        }
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
                text-white w-full font-semibold text-lg" onClick={submitPost}>{postData ? "Update" : "Create"}</button>
            </form>
            {redirect && <Navigate to="/" replace/>}
        </div>
    )
}

export default CreatePost;