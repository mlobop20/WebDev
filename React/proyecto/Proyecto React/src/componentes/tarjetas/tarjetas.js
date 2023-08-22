import React, { Component } from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';

export default class Tarjetas extends Component {
  render() {
    const { imageSrc, title, subtitle, content} = this.props;

    return (
      <Card
        color="light"
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="Sample"
          src={imageSrc || "https://picsum.photos/300/200"}
        />
        <CardBody>
          <CardTitle tag="h5">
            {title || "Card title"}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {subtitle || "Card subtitle"}
          </CardSubtitle>
          <CardText>
            {content || "Some quick example text to build on the card title and make up the bulk of the card‘s content."}
          </CardText>

        </CardBody>
      </Card>
    );
  }
}

