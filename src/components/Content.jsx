import React from 'react'
import Select from 'react-select'
import axios from 'axios';
import DisplayTab from './DisplayTab';


function Content() {

  //Init a state to set the countrylists after getting data from the API
  const [countryList, setCountryList] = React.useState([]);

  //Fetch the countries slug from the API:
  //Add second argument [] to prevent continuos calling
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://corona.lmao.ninja/v2/countries?yesterday&sort',
      );

      //Set CountryList to the data got (an array of objects)
      setCountryList(result.data);
    };
    fetchData();
  }, []);

  //Set current state selectedOption if select any country from the list
  const [selectedOption, setSelectedOption] = React.useState({ value: { recovered: null, cases: null, deaths: null, todayRecovered:null, todayCases:null, todayDeaths:null}, label: 'Choose a country' });

  //Append the countries into the select bar with the frame {value:all the contents inside that country, and label:country name}
  const options = (countryList.map(countryData => ({ value: countryData, label: countryData.country })));

  //Styles for searchbar with react-select
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: '#F27A5E',
      backgroundColor: state.isSelected ? '#6D9E5D' : 'white',
      "&:hover": {
        backgroundColor: "#CBD9C7",
      }
    }),

    control: provided =>({
      ...provided,
      borderRadius:0,
      backgroundColor:'#B4DCC1',
      color:'#F27A5E'
    }),

    //Placeholder text color
    singleValue: (provided, state) => {
      const color='#F27A5E';
      return {...provided, color};
    },

    //Dropdown menu button;
    dropdownIndicator: (provided, state) => {
     
      const color = '#F27A5E';
      return { ...provided, color };
    }
  }


  return (
    <div className="datacontent ">
      <div className="row">
        <Select className="searchbarconfig"
          defaultValue={selectedOption} onChange={setSelectedOption} options={options}
          styles={customStyles} isSearchable={true} placeholder={<p>Hello</p>} />
      </div>
     
        <div className="row displayrow">
          <DisplayTab title="Country" content={selectedOption.label} subcontent={null} />
          <DisplayTab title="Recovered" content={selectedOption.value.recovered} subcontent={selectedOption.value.todayRecovered} />
        </div>

        <div className="row displayrow">
          <DisplayTab title="Cases" content={selectedOption.value.cases} subcontent={selectedOption.value.todayCases} />
          <DisplayTab title="Deaths" content={selectedOption.value.deaths} subcontent={selectedOption.value.todayDeaths}/>
        </div>
      </div>

   
  )
}

export default Content;