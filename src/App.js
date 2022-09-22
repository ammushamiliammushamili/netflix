// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Baner from './Components/Baner';
import List from './Components/List';
import { actionURL, trendingURL, comedyURL, thrillerURL, horrorURL, romanceURL, animationURL } from './Constants/constant';



function App() {

  return (
    <>
      {/* <h1>hlo</h1> */}
      <Navbar />
      <Baner />
      <List listTitle="Treding Movies" genreUrl={trendingURL} />
      <List listTitle="Action Movies" genreUrl={actionURL} />
      <List listTitle="Comedy Movies" genreUrl={comedyURL} />
      <List listTitle="Thriller Movies" genreUrl={thrillerURL} />
      <List listTitle="Horror Movies" genreUrl={horrorURL} />
      <List listTitle="Romance Movies" genreUrl={romanceURL} />
      <List listTitle="Animation Movies" genreUrl={animationURL} />


    </>
  );
}

export default App;
