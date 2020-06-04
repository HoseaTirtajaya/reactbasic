import React from "react";

function Cards(props) {
  console.log(props); // Checking the transferred props data
  return (
    <div className="contact-card">
      <img src={props.dtcontact.imgUrl} />
      <h3>Name: {props.dtcontact.name}</h3>
      <p>Phone: {props.dtcontactphone}</p>
      <p>Email: {props.dtcontact.email}</p>
    </div>
  );
}

export default Cards;
