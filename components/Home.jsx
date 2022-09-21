import React,{useEffect,useState} from "react";
import "./Home.css";
import {data} from "./planet_data_base";
const Home = () => {


  const [planet, setPlanet] = useState("");
  const [input,setInput]=useState("");
  function func(event){
    setPlanet(event.target.id)
    // console.log(planet);
  }
  const handler=(event)=>{
    setInput(event.target.value)
  }
  useEffect(() => {
    var size=data.length;
    for(var i=0;i<size;i++){
      if(data[i].name===planet && input!==""){
        document.getElementById(planet+"Text").innerHTML=(input/1)*data[i].g+" Kg ";
      }
      else{
        document.getElementById(data[i].name+"Text").innerHTML="";
      }
    }
  }, [input,planet])
  
  return (
    <div className="container">
      <h1> weight on different planets</h1>
      <input type="number" id="input" placeholder="Enter your weight here" value={input} onChange={handler}/>
      <div className="planets">
        <div className="mercury">
          <p className="weightText" id="mercuryText"></p>
          <a onClick={func}>
            <img id="mercury" src="./Images/Mercury.png" alt="" className=" images" />
          </a>
        </div>

        <div className="venus">
          <p className="weightText" id="venusText"></p>
          <a onClick={func}>
            <img id="venus" src="./Images/Venus.png" alt="" className=" images" />
          </a>
        </div> 
        <div className="earth">
          <p className="weightText" id="earthText"></p>
          <a onClick={func}>
            <img id="earth" src="./Images/Earth.png" alt="" className=" images" />
          </a>
        </div>
        <div className="mars">
          <p className="weightText" id="marsText"></p>
          <a onClick={func}>
            <img id="mars" src="./Images/Mars.png" alt="" className=" images" />
          </a>
        </div>
       
        <div className="jupiter">
          <p className="weightText" id="jupiterText"></p>
          <a onClick={func}>
            <img id="jupiter" src="./Images/Jupitor.png" alt="" className=" images" />
          </a>
        </div>
        <div className="saturn">
          <p className="weightText" id="saturnText"></p>
          <a onClick={func}>
            <img
              id="saturn"
              src="./Images/saturn.png"
              alt=""
              className=" images"
            />
          </a>
        </div>
        <div className="uranus">
          <p className="weightText" id="uranusText"></p>
          <a onClick={func}>
            <img
              src="./Images/Uranus.png"
              alt=""
              className=" images"
              id="uranus"
            />
          </a>
        </div>
        <div className="neptune">
          <p className="weightText" id="neptuneText"></p>
          <a onClick={func}>
            <img id="neptune" src="./Images/Neptune.png" alt="" className=" images" />
          </a>
        </div>
        <div className="moon">
          <p className="weightText" id="moonText"></p>
          <a onClick={func}>
            <img id="moon" src="./Images/moon.png" alt="" className=" images" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
