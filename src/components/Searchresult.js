import React from "react";
import data from "../data.json";
import img from "../assets/img/student.svg";
import CardResult from "./CardResult";

function Searchresult() {
  return (
    <div>
      <h1> Tìtulo 4</h1>
      <div>
        {data.map((element) => {
          return (
            <CardResult
              img={element.img}
              title={element.title}
              texto={element.texto}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Searchresult;
