import './Trailer.css'
function Trailer(props) {
    console.log("key = ", props.api_key)
    return (
        <>
            {/* <h1 className='main'>hlo</h1> */}
            <div >
                {props.api_key && <iframe className={'tframe'} width="560" height="315" src={`https://www.youtube.com/embed/${props.api_key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;autoplay" allowfullscreen></iframe>}
            </div>
        </>
    )
}
export default Trailer;