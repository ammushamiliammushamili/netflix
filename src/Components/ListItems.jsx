import './ListItems.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import axios from '../Constants/Axios';
import Trailer from './Trailer';
import { useState } from 'react';
import YouTube from 'react-youtube';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';



function ListItems(props) {

    const [key, setKey] = useState("")
    const [visible, setVisible] = useState(false)
    const [open, setOpen] = useState(false)
    const fetchTrailer = async () => {
        setVisible(false)

        let response = await axios.get(`/movie/${props.movieId}/videos?api_key=b999d9fa858536ad35453910cf2ad2e3&language=en-US`)
        console.log(response.data.results[0].key);
        setKey(response.data.results[0].key)
        // window.location.href = `https://www.youtube.com/watch?v=${key}`
        setVisible(true)
        setOpen(true)
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    function handleClose() {
        setOpen(false)

    }

    return (
        <>
            <div className="image-wrapper">
                <div className="image-one" style={{ backgroundImage: `url(${props.url})` }}>

                    <div className="List-items-group">
                        <p className='title'>{props.title}</p>
                        <div className="list-icon" onClick={fetchTrailer}>
                            <PlayArrowIcon />
                            < AddIcon />
                        </div>
                    </div>


                </div>
            </div>
            <div className="youtub-warpper">
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>trailer</DialogTitle>
                    {key && <YouTube videoId={key} opts={opts} />}
                </Dialog>
            </div>
        </>

    )
}
export default ListItems;