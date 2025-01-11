import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./WatchStream.css";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import WatchStreamVideo from "@/components/WatchStreamVideo/WatchStreamVideo";


export default function WatchStream(){
    return(
        <main>
            <HeaderPage/>
            <div className="big-content-add-streams">
                <h2 className="justify-this-content2">Viendo Stream </h2> 
                <WatchStreamVideo/>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    )
}