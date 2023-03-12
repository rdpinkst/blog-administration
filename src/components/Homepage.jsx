import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';


function Homepage() {
    return (
        <div className="bg-shell flex grow justify-center items-center">
            <div className="flex flex-col h-44">
               <UploadFileIcon className="flex-no-shrink fill-current" viewBox="0 0 24 24" heigth="auto" width="50%" /> 
               <h2>CREATE YOUR FIRST POST</h2>
            </div>
        </div>
    )
}

export default Homepage;