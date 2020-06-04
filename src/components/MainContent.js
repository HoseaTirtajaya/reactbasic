import React from "react";
import ContactCards from "./ContactCards";

function MainContent() {
  // Menghitung siang atau malam atau pagi
  const h3color = {
    backgroundColor: "#121212",
    fontSize: "24px",
  };
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
    h3color.color = "#04756F";
    h3color.backgroundColor = "whitesmoke";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    h3color.color = "Orange";
  } else {
    timeOfDay = "night";
    h3color.color = "#121212";
    h3color.backgroundColor = "whitesmoke";
  }

  return (
    <div>
      {/* <h3 style={{ color: "aquamarine" }}>Good {timeOfDay}!</h3> This can be get longer by the time we add more css*/}
      <h3 style={h3color}>Good {timeOfDay}!</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
        eleifend urna, id malesuada ipsum. Quisque accumsan dolor nisl, vel
        mollis lectus tristique sed. Ut interdum ultricies ullamcorper.
      </p>
      <div className="contact-cards">
        {/* There are 2 ways to passing props data. Number 1 is commented. */}
        <ContactCards
          // name="Mr. Whiskerson"
          // imgUrl="http://placekitten.com/300/200"
          // phone="(212) 555-1234"
          // email="mr.whiskaz@catnap.meow"
          dtcontact={{
            name: "Mr. Whiskerson",
            imgUrl: "http://placekitten.com/300/200",
            phone: "(212) 555-1234",
            email: "mr.whiskaz@catnap.meow",
          }}
        />
        <ContactCards
          // name="Fluffykins"
          // imgUrl="http://placekitten.com/400/200"
          // phone="(212) 555-2345"
          // email="fluff@me.com"
          dtcontact={{
            name: "Fluffykins",
            imgUrl: "http://placekitten.com/400/200",
            phone: "(212) 555-2345",
            email: "fluff@me.com",
          }}
        />
        <ContactCards
          // name="Destroyer"
          // imgUrl="http://placekitten.com/400/300"
          // phone="(212) 555-3456"
          // email="ofworlds@yahoo.com"
          dtcontact={{
            name: "Destroyer",
            imgUrl: "http://placekitten.com/400/300",
            phone: "(212) 555-3456",
            email: "ofworlds@yahoo.com",
          }}
        />
        <ContactCards
          // name="Felix"
          // imgUrl="http://placekitten.com/200/100"
          // phone="(212) 555-4567"
          // email="thecat@hotmail.com"
          dtcontact={{
            name: "Felix",
            imgUrl: "http://placekitten.com/200/100",
            phone: "(212) 555-4567",
            email: "thecat@hotmail.com",
          }}
        />
      </div>
      <ol>
        <li>Japan</li>
        <li>United States</li>
        <li>Somewhere in Europe</li>
      </ol>
    </div>
  );
}

export default MainContent;
