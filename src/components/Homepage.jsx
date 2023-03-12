import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';


function Homepage() {
    return (
        <div className="bg-shell flex grow justify-center items-center">
            <div className="flex flex-col h-44">
                <div className="w-full h-1/2">
                   <UploadFileIcon className="h-full w-full" /> 
                </div>
                
                <h2>CREATE YOUR FIRST POST</h2>
            </div>
        </div>
    )
}

export default Homepage;