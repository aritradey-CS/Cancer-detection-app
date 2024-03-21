import React, {useState} from "react";
import './style.css';
// import data from "./TemplateData.json";
import data from "./data.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm === ""){
                  return val;
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.name}</h3>
                      <p className="price">${val.pricePerMonth}</p>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default App;
