import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./AddStream.css";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import AddStreamForm from "@/components/Plantillas/AddStreamForm/AddStreamForm";


export default function AddStream(){
    return(
        <main>
            <HeaderPage/>
            <div className="big-content-add-streams">
                <h2 className="justify-this-content2">Crear Stream </h2> 
                <AddStreamForm/>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    )
}