import { IoMdDownload } from "react-icons/io";
import DownloadCurriculo from "../utils/download_curriculo";
import './download.css'

function Download(){
    return(
        <div>
            <div className="project_button_menu download" onClick={DownloadCurriculo}>
                download  <IoMdDownload/>
            </div>
        </div>
    )
}

export default Download;