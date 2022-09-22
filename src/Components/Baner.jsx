import './Baner.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import axios from '../Constants/Axios';
import { imageUrl, trendingURL } from '../Constants/constant';


function Baner() {

    const [banerMovie, setbanerMovie] = useState()
    useEffect(() => {
        axios.get(trendingURL)
            .then((response) => {
                setbanerMovie(response.data.results[0])
            })
    }, [])
    return (
        <div className="baner" style={banerMovie && { background: `url(${imageUrl}${banerMovie.backdrop_path})`, backgroundSize: "cover" }}  >
            <div className="main-baner" >
                <h1 className='main-head'>{banerMovie && banerMovie.title}</h1>
                <p>{banerMovie && banerMovie.overview}</p>
                <div className="btn-group">
                    <button className='play-btn'>< PlayArrowIcon />Play</button>
                    <button className='My-list'> <AddIcon />My List</button>
                </div>
            </div>

        </div>

    )
}
export default Baner;