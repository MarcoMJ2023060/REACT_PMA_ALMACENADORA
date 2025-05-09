import {Route, Routes} from "react-router-dom";
import { Superheroes } from "../superheroe/Superheroe"
import { PostView } from '../posts/PostView'


export const Content = ({superheros, obtenerLosSuperheroes, newPost}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="/" element={<superheros superheros={superheros}/>}/>
                <Route path="post/:id" element={<PostView obtenerLosSuperheroes={obtenerLosSuperheroes}/>}/>
            </Routes>
        </div>
    )
} 