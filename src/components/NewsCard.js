import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
class NewsCard extends Component {
  constructor(props){
    super(props);
  }
    render() {
        return(
            <div>
                <Card>
                  <CardImg top width="100%" src={this.props.news.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.news.title}</CardTitle>
                        <CardSubtitle>{ this.props.news.author}</CardSubtitle>
                    <CardText>{ this.props.news.text}.</CardText>
                      <Button>Button</Button>
                  </CardBody>
                </Card>
          </div>


          // ======>   sample console
    //       <div>
    //   <Card>
    //     <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle>Card title</CardTitle>
    //       <CardSubtitle>Card subtitle</CardSubtitle>
    //       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //       <Button>Button</Button>
    //     </CardBody>
    //   </Card>
    // </div>

        )
    }
}

export default NewsCard;