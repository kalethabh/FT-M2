import React from "react";

export default function Species(props) { // export default function Species({species, handleSpecies,handleAllSpecies }) {
  return (
    <div>
      <h2>Species</h2>
      {props.species?.map((specie, index) => ( // species?.map (si uso el destructuring)
        <button
          key={index}
          onClick={props.handleSpecies}
          value={specie}>
          {specie}
        </button>
      ))}
      <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  );
}
