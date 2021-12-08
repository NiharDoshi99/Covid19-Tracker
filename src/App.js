import React, {useState , useEffect} from 'react'
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
  CircularProgress
  
} from "@material-ui/core";
import InfoBox from './InfoBox';
import Maps from './Maps';
import './App.css';
import Table from './Table';
import { prettyPrintStat, sortData } from './util';
import LineGraph from './LineGraph';
import 'leaflet/dist/leaflet.css';
import { circleMarker } from 'leaflet';



function App() {
  const [countries , setCountries] = useState([]);
  const [country,setCountry] = useState("worldwide");
  const [countryInfo , setCountryInfo] = useState({});
  const [tableData , setTableData] = useState([]);
  const [mapCenter , setMapCenter] = useState({ lat: 34.80746 , lng: -40.4796 });
  const [mapZoom , setMapZoom] = useState(3);
  const [mapCountries, setmapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data);
    })
  }, [])

  useEffect(() => {
    const getCountriesData = async() =>   {
      setLoading(true)  
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setmapCountries(data);
        setCountries(countries)  
        
      })

      setLoading(false)
    }; 
    getCountriesData();
  }, [])

  const onCountryChange = async(event) =>{
    setLoading(true)
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    .then((response) => response.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);

      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(4);
    });

    setLoading(false)
  } 

 


  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID 19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          {/* <CircularProgress /> */}
        </div>
        { loading ? <CircularProgress /> :
        <div className="app__stats"> 
          <InfoBox isRed active = {casesType === "cases"} onClick={ e => setCasesType("cases")} title="Coronavirus Cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)}/>
          <InfoBox active={casesType === "recovered"} onClick={e => {setCasesType("recovered")}} title="Recovered" cases = {prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)}/>
          <InfoBox isRed active={casesType === "deaths"} onClick={e => {setCasesType("deaths")}} title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)}/>
          
        </div>
        }
        <Maps casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom} />
      </div>
      <Card className="app__right">
        <CardContent>
          <div className="app__info">
            <h3>Live cases by country</h3>
            {tableData ? <Table countries={tableData} /> : <CircularProgress /> }
            <div className="graph">
              <h3 className="app__graphTitle">Worldwide new {casesType}</h3>
              <LineGraph className="app__graph" casesType={casesType} />
            </div>
          </div>
        </CardContent>
      </Card>        
    </div>
  );
}

export default App;
