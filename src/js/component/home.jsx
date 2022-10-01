import React, { useState } from "react";
import "./home.css"
//include images into your bundle


//create your first component

const Home = () => {
	const [color, setColor] = useState("");



	return (
		<div className="text-center">
			<div className="stick">

    

			</div>
			<div className="Semaforo">
				<div onClick={() => setColor("Rojo")}
				 className={"Light Rojo" + (color === "Rojo" ? " glow" : "")}></div>
				<div onClick={() => setColor("Amarillo")}
				 className={"Light Amarillo" + (color === "Amarillo" ? " glow" : "")}></div>
				<div onClick={() => setColor("Verde")}
				className={"Light Verde" + (color === "Verde" ? " glow" : "")}></div>
			</div>

		</div>
	);
};

export default Home ;
