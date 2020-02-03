import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'reactstrap';
import NewsCard from '../components/NewsCard';

class Allnews extends Component {
    constructor() {
        super();
        this.state = {
            allNewsData : [
                {
                    title:"Australia on Fire",
                    img:"./images/leaf.jpg",
                    text:"This is the end of the world and leaf",
                    author: "John"
                           
                },
                {
                    title:"Australia on Fire",
                    img:"./images/sunset.jpg",
                    text:"This is the end of the world and sunset",
                    author: "John"
                           
                },
                {
                    title:"Australia on Fire",
                    img:"./images/sky.jpg",
                    text:"This is the end of the world and sky",
                    author: "John"
                           
                },
                {
                    title:"Australia on Fire",
                    img:"images/leaf.jpg",
                    text:"This is the end of the world and sky",
                    author: "John"
                           
                },
                {
                    title:"Australia on Fire",
                    img:"./images/sunset.jpg",
                    text:"This is the end of the world and leaf",
                    author: "John"
                           
                },
                {
                    title:"Australia on Fire",
                    img:"./images/sky.jpg",
                    text:"This is the end of the world and sunset",
                    author: "John"
                           
                }
            ]
        }
    }

render (){
    const NewsCards = this.state.allNewsData.map(news =>{
        return (
            <Col sm="4">
                <NewsCard news = {news} />
            </Col>
        )
    })
    return(
        <Container fluid>
         <Navbar/>
            <Row>
            { NewsCards}
            </Row>
        </Container>
    )
}
}


export default Allnews;


    // render() {

            
    //     return(

             // sample

            //  <Container fluid>
            //             <Navbar />
            //                 <Row>
                
            //                     <Col>

            //                 <NewsCard/>
                                        
            //                     </Col>
                        
            //                 </Row>
            //             <Footer/>
            //     </Container>

                // ---------------

            // <Container fluid>
            //     <Navbar />
            //     <Row>
            //             <div>
            //             <Col sm="4">

            //            {this.state.allNewsData.map((samachahttp://localhost:3000/AllNewsr,i) => 
            //                 <NewsCard allNewsData={samachar} />)
            //                     }
            //             </Col>
            //     </div>

            //     </Row>
            //     <Footer/>
            //  </Container>

             
//         )
//     }
// }

// export default Allnews;

// class Allnews extends Component {
//     render(){
//         return(
//             <div>
//                 <Navbar/>
//                 <div className = "container">
//                 <h2>All News</h2>
//                 <div className = "row">
//                     <div className = "col-md-3 col-sm-6 cardlen">
//                         <div className="card text-center">
//                         <div className = "card-block">
//                             <img src="img/flower1.jpg" alt="" class="img-fluid"/>
//                            <div class="card-title">
//                                <h4>Title 1</h4>
//                            </div>
//                         <div class="card-text">
//                             This is some simple text.
//                                             This is the simple text.
//                                              This is some sample text.
//                                              This is some sample text.
//                                              This is some sample text.
//                                              This is some sample text.

//                                              </div>
//                         <div>Author</div>                     
//                         {/* <a style = "margin-top:10px;" href="#" className="btn btn-success">Click here</a> */}
//                         </div>
//                         </div>
//                     </div>

//                     {/* /////////////////////// */}
//                     <div className = "col-md-3 col-sm-6 cardlen">
//                         <div className="card text-center">
//                         <div className = "card-block">
//                             <img src="img/flower1.jpg" alt="" class="img-fluid"/>
//                            <div class="card-title">
//                                <h4>Title 1</h4>
//                            </div>
//                         <div class="card-text">This is some simple text.
//                         This is the simple text. This is some sample text.
//                         This is some sample text.
//                         This is some sample text.
//                         This is some sample text.

//                         </div>
//                         <div>Author</div> 
//                         {/* <a style = "margin-top:10px;" href="#" className="btn btn-success">Click here</a> */}
//                         </div>
//                         </div>
//                     </div>

//                       {/* //////// */}

//                     <div className = "col-md-3 col-sm-6">
//                         <div className="card text-center">
//                         <div className = "card-block">
//                             <img src="img/flower1.jpg" alt="" class="img-fluid"/>
//                            <div class="card-title">
//                                <h4>Title 1</h4>
//                            </div>
//                         <div class="card-text">This is some simple text.
//                         This is the simple text. This is some sample text.
//                         This is some sample text.
//                         This is some sample text.
//                         This is some sample text.

//                         </div>
//                         <div>Author</div> 
//                         {/* <a style = "margin-top:10px;" href="#" className="btn btn-success">Click here</a> */}
//                         </div>
//                         </div>
//                     </div>

//                     {/* //////////// */}

//                     <div className = "col-md-3 col-sm-6">
//                         <div className="card text-center">
//                         <div className = "card-block">
//                             <img src="img/flower1.jpg" alt="" class="img-fluid"/>
//                            <div class="card-title">
//                                <h4>Title 1</h4>
//                            </div>
//                         <div class="card-text">This is some simple text.
//                         This is the simple text. This is some sample text.
//                         This is some sample text.
//                         This is some sample text.
//                         This is some sample text.

//                         </div>
//                         <div>Author</div> 
//                         {/* <a style = "margin-top:10px;" href="#" className="btn btn-success">Click here</a> */}
//                         </div>
//                         </div>
//                     </div>
//                     {/* /////// */}
//                        </div>
//                        </div>    
//                 <Footer/> 
//             </div>
//         )
//     }
// }

// export default Allnews;