import React from "react";

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
        mollis lectus tristique sed. Ut interdum ultricies ullamcorper. Fusce id
        vulputate ante. Maecenas sapien ex, pellentesque in pretium non, semper
        ac velit. Nam interdum risus vel mi rutrum semper. In hac habitasse
        platea dictumst. Aenean facilisis semper nunc, at eleifend sem
        consectetur nec. Vivamus eget ante sed tellus cursus euismod non sit
        amet risus. Integer nec dui non quam egestas consequat.
      </p>
      <ol>
        <li>Japan</li>
        <li>United States</li>
        <li>Somewhere in Europe</li>
      </ol>
    </div>
  );
}

export default MainContent;
