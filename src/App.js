
import "./App.css"
import { useState } from 'react';
import Movielist from "./Movielist";
import Filter from "./Filter.jsx";
import { Route, Routes } from "react-router-dom";
import Trailer from "./Trailer.js";

function App() {
const[newRate,setNewRate] =useState(1)
 const [keyFilter, setkeyFilter] = useState("")
 const [movies, setMovies] = useState([
    { id:1, title: "Wolf of Wall Street", description: 'Martin Scorsese directs this true story of New York stockbroker Jordan Belfort (Leonardo DiCaprio). From the American dream to corporate greed, Belfort goes from penny stocks and righteousness to IPOs and a life of corruption in the late 80s', posterURL: 'https://media.newyorker.com/photos/590951571c7a8e33fb38a2e8/master/pass/wallstreet-580.jpg', rating: 5,trailer:"https://youtu.be/iszwuX1AK6A?si=Lby2oX0SSPy_eJH1" },
    { id:2,title: 'hangover', description: 'wei Tage vor der Hochzeit feiert Doug in Vegas mit seinen Freunden Stu und Phil und dem künftigen Schwager Alan Abschied vom Singledasein. Doch am .', posterURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/The_Hangover_Trilogy_DVD_cover.jpg/220px-The_Hangover_Trilogy_DVD_cover.jpg', rating: 4,trailer:"https://youtu.be/tlize92ffnY?si=3AasZkP0D1rTBLMm"},
    { id:3,title: 'interstellar', description: 'Le film raconte les aventures dun groupe dexplorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.', posterURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIVryzUKVaqs-5yb0-uHykg7Ob4rUWFl-Ojl28OvBExh8Xc8GT', rating: 5,trailer: "https://youtu.be/zSWdZVtXT7E?si=lzpgUP2QaFzcRyhS"},
    
 ]);
const search=(text)=>{
   setkeyFilter(text)
}
const setRate=(rate)=>{
   setNewRate(rate)
}


 return (
    <div className="App">
      <Filter search={search} setRate={setRate} newRate={newRate}/>
      <Routes>
         <Route path="/" element={ <Movielist movies={movies.filter((el)=> el.rating >= newRate && el.title.toLowerCase().includes(keyFilter.toLowerCase().trim()))} />}/>
         <Route path="/trailer/:id" element={ <Trailer/>} />
      </Routes>
     
     

    </div>
   
   

 );
}

export default App;
