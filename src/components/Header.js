import React from "react";

function Header() {
  const firstName = "Hosea";
  const lastName = "Tirtajaya";

  // return <h1>{firstName + " " + lastName}</h1>; this or using es6 string

  return <h1>{`${firstName} ${lastName}`}</h1>;
}

export default Header;
