import React,{useState} from 'react'
import MovieCard from './Moviecard'
import 'bootstrap/dist/css/bootstrap.min.css';


const Movielist = ({movies}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {movies.map((movie)=><MovieCard movie={movie}/> )}
      <button onClick={handleShow}>add</button>
      <add  show={show}handleClose={handleClose}/>
    </div>
  )
}

export default Movielist
