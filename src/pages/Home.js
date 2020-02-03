import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import './Home.css'
import { Container, Row, Col } from 'reactstrap';
// import AllnewsData from './AllnewsData';
// import Allnews from './Allnews';


class Home extends Component {

    // constructor(){
    //     super()

    //     const newsDatas = AllnewsData.map(data => <newsData key = {data.id }  data = {data}/> )
    
    render(){
        return(
           
        <div>
            <Navbar/>
                <h2 className="container">Welcome to Todays news</h2>
                    <div className="imageContainer">
                        <img src='./images/forest.jpg' alt="postImage"/> 
                    </div>

                    <div className="wrapper"> 
                        <h2> Daily dose </h2>
                
                        <div className="leftContainer">
                        
                            <span>Featured News</span>
                              <h1 className="postTitle">The risks of global warming</h1>
                                <span>posted on july 21, 2016 </span>
                                <p className="homeText">
                                    What is Lorem Ipsum?

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                <b>Article by Peter Parker</b>
                        </div>
                    </div>
        
 {/* right container starts here */}
     
                    <div className="rightContainer">
                        <div className="cardHeader">
                            <span>Featured News</span>
                            <h1 className="postTitle">The risks of global warming</h1>
                            <span>posted on july 21, 2018</span>
                           
                        </div>    
                        
                         
                    </div>
 {/* right container ends here         */}
                     
        </div>
      
       )
    }}

export default Home;