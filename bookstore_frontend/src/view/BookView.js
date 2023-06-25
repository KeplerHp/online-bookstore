import React from 'react';
import MyFooter from "../components/footer";
import {Layout} from 'antd';
import "@babel/plugin-proposal-class-properties";
import "../css/BookPage.css"
import BookDetail from "../components/BookPage/BookDetail";
import HeadWrap from "../components/HeadWrap";
import SideBar from "../components/SideBar";


class BookView extends React.Component {
  constructor(props) {
    super(props);
    let search=props.location.search;
    let params=new URLSearchParams(search);
    this.state={
      bookId: params.get('id'),
    }
    console.log("getid:",this.state.bookId);
  }

  onChange_input = () => {
    console.log('book detail view changed', this);
  }

  render() {
    return (
        <div className="book-page">
          <div className="book-container">
            <div className="head-container">
              <HeadWrap/>
            </div>
            <div className="detail-container">
              <Layout className="bookview-layout">
                <SideBar/>
                <div>
                  <BookDetail bookId={this.state.bookId} style={{height:'100%'}}/>
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

export default (BookView);