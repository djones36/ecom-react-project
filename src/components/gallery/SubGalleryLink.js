import React from "react";
import { Image, Reveal } from "semantic-ui-react";

const RevealImage = () => (
  <Reveal animated="small fade">
    <Reveal.Content visible>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/ade.jpg"
        size="med"
      />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        size="med"
      />
    </Reveal.Content>
  </Reveal>
);

export default RevealImage;
