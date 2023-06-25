import React from 'react';
import CarouselHomePage from '../components/HomePage/Carousel.js'
import MyFooter from "../components/footer";
import {Layout} from 'antd';
import {withRouter} from 'react-router-dom';
import "../css/HomePage.css";
import HeadWrap from "../components/HeadWrap";
import SideBar from "../components/SideBar";
import BarImg from "../resources/bar.jpg";
import Book from "../components/HomePage/Book";

class HomeView extends React.Component {

  render() {
    return (
        <div className="book-page">
          <div className="book-container">
            <div className="head-container">
              <HeadWrap/>
            </div>
            <div className="detail-container">
              <Layout className="bookview-layout">
                <SideBar selected={"1"}/>
                <div className="home-layout">
                  <CarouselHomePage/>
                  <div className="barimg-container">
                    <img className="home-bar" src={BarImg} alt=''/>
                  </div>
                  <div className="book1-container">
                    <Book className="book-wrapper"/>
                  </div>
                  <div className="foot-container" style={{display: "block"}}>
                    <MyFooter/>
                  </div>
                </div>
              </Layout>
            </div>
          </div>
        </div>
    )
  }
};

export default withRouter(HomeView);