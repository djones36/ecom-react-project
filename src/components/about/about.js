import React from "react";
import { Grid, Image } from "semantic-ui-react";

const About = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src="/images/wireframe/media-paragraph.png" />
        <p>test</p>
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src="/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default About;
