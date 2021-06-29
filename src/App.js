
import './App.css';
import SearchBar from "./components/SearchBar.jsx";
import covid from './covid.png';


function App() {
  return (
    <div className="wholepage row">
      
      <div className="col col-sm-12 col-md-3 col-lg-3 figurecolumn">
        <div className="covidfigure">
          <img src={covid} alt="covid" className="figure"/>
        </div>
      </div>
      <div className="col col-sm-12 col-md-8 col-lg-8 contentcolumn">
        <div className="content">
          <h1 className="title">COVID TRACKER</h1>
          <SearchBar/>
          <p>Source: https://mmediagroup.fr/covid-19</p>
        </div>
      </div>
    </div>
  )
}

export default App;
