import './List.css'
import axios from '../Constants/Axios';
import ListItems from "./ListItems";
import { useEffect, useState } from 'react';
import { imageUrl } from '../Constants/constant';
import Trailer from './Trailer';


function List(props) {
    const [movies, setMovie] = useState()
    useEffect(() => {
        axios.get(props.genreUrl)
            .then((response) => {
                console.log(response.data.results);
                setMovie(response.data.results)
            })
    }, [])


    return (
        <div className="list-group">
            <h1 className='headdings' >{props.listTitle}</h1>
            <div className="list-wrapper">
                {
                    movies && movies.map((singlemovie) => {
                        return <ListItems title={singlemovie.title || singlemovie.name} url={imageUrl + singlemovie.backdrop_path} movieId={singlemovie.id} />
                    })
                }
            </div>
        </div>
    )
}
export default List;