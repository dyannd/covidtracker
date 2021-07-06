
import './App.css';
import Content from './components/Content';
import covid from './covid.png';


function App() {
  return (
    <div className="wholepage row">
      
      <div className="col-12 col-md-3 col-lg-3 figurecolumn">
        <div className="covidfigure">
          <img src={covid} alt="covid" className="figure"/>
        </div>
      </div>
      <div className="col-12 col-md-8 col-lg-8 contentcolumn">
        <div className="content">
          <h1 className="title">COVID TRACKER</h1>
          <Content/>
          <p>Source: https://github.com/disease-sh/API</p>
        </div>
      </div>
    </div>
  )
}

export default App;
