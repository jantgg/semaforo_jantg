import React, { useState } from "react";
import '/workspace/react-hello/src/styles/index.css';



const Home = () => {
	const [color, setColor] = useState("")
	const colors = ['red', 'yellow', 'green']
	
	const roll = (arr, n) => {
		const randomN = [];
		while(randomN.length < n){
		  const randomIndex = Math.floor(Math.random()*arr.length);
		  randomN.push(arr[randomIndex]);
		  arr.splice(randomIndex, 1);
		}
		return randomN;}
	  
	  let swapper = (roll(colors, 1)); 
	  
	

  return (
	<div>
		<div className="row vh-100 d-flex justify-content-center pt-5">
			<div id="father" className="col-4 mt-5 d-flex align-items-start flex-column black">
				<button id="light1" className={"w-50 h-25 mx-auto mt-5 circle " + (color == "red" ? color : "gray")}  onClick={()=>setColor("red")}></button>
				<button id="light2" className={"w-50 h-25 mx-auto mt-5 circle " + (color == "yellow" ? color : "gray")}  onClick={()=>setColor("yellow")}></button>
				<button id="light3" className={"w-50 h-25 mx-auto mt-5 circle " + (color == "green" ? color : "gray")}  onClick={()=>setColor("green")}></button>
			</div>
			<div id="div2" className="col-2 mt-5 d-flex align-items-center">
			<button id="button" className="rounded" onClick={()=>setColor(swapper)}><strong>Press me</strong></button>
			</div>
		</div>
		
	</div>
  );
};

export default Home;
