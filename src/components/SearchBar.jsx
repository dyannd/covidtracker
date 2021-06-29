import React  from 'react'
import Select from 'react-select'
import axios from 'axios';
import DisplayTab from './DisplayTab';


function SearchBar (){
    
  //Init a state to set the countrylists after getting data from the API
    const [countryList, setCountryList]=React.useState([]);

      //Fetch the countries slug from the API:
      //Add second argument [] to prevent continuos calling
      React.useEffect(()=>{
        const fetchData=async () => {
            const result = await axios(
             'https://covid-api.mmediagroup.fr/v1/cases',
             );
            //the data has the type of nested key:value pairs, so use Object.entries to convert them to nested Arrays, which can be used to map data
            setCountryList(Object.entries(result.data))
            };
        fetchData();
    }, []);

    //Set current state selectedOption if select any country from the list
    const [selectedOption, setSelectedOption] = React.useState({value:{All:{confirmed:null,deaths:null,recovered:null,population:null,updated:[], country:null }},label:'Choose a country'});

    //Append the countries into the select bar with the frame {value:all the contents inside that country, and label:country name}
    const options=(countryList.map(country => ({value:country[1], label:country[0]})));
    
    //Styles for searchbar with react-select
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          color: '#231613',
          backgroundColor: state.isSelected?'#6D9E5D':'white',
          "&:hover": {
            backgroundColor: "#CBD9C7",
          }
        }),
    
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0 : 1;
          const transition = 'opacity 100ms';
      
          return { ...provided, opacity, transition };
        },
        dropdownIndicator:(provided, state) =>{
           const backgroundColor= '#6D9E5D';
           const color = 'white';
           return{...provided, backgroundColor, color};
        }
      }
      
  
      //Have some exceptions for Global stats
      //If the updated content is not found with All, then find the next object (state/city) that contain the updated time. which is the first index object of the first index entry
    return(
        <div className="datacontent">
          <div className="row">
            <Select  className="searchbarconfig"
             defaultValue={selectedOption} onChange={setSelectedOption} options={options} 
             styles={customStyles} isSearchable={true} placeholder={<p>Hello</p>}/>
          </div>     
             
          <div className=" row displayrow">
              <DisplayTab title={selectedOption.label==="Global"?null:"Country"} content={selectedOption.label==="Global"?"Global":selectedOption.label}/>
              <DisplayTab title="Recovered" content={selectedOption.value.All.recovered}/>
           </div>
          
          <div className=" row displayrow">
            <DisplayTab title="Cofirmed" content={selectedOption.value.All.confirmed}/>
            <DisplayTab title="Deaths" content={selectedOption.value.All.deaths}/>
          </div>
          <div className=" row displayrow">
            <DisplayTab title="Last Updated" content={selectedOption.label==="Global"?options[0].value.All.updated:selectedOption.value.All.updated==null?Object.entries(selectedOption.value)[1][1].updated:selectedOption.value.All.updated} class="col-lg-12 col-md-12 col-sm-12"/>
          </div>
          
        </div>
    )
}

export default SearchBar;