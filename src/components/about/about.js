import React from "react";
import { Grid, Image } from "semantic-ui-react";
import RevealImage from "../gallery/SubGalleryLink";
const About = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <RevealImage />
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <RevealImage />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Grid.Column>
      <Grid.Column width={3}>
        <RevealImage />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default About;
