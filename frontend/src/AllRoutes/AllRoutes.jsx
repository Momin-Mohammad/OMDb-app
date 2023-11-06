import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MovieDetails from "../pages/MovieDetails";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/:heading" element={<MovieDetails />}/>
        </Routes>
    )
}