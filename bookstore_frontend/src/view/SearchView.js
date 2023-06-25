import React from 'react';
import {Layout} from 'antd';
import "../css/BookPage.css"
import SearchResult from "../components/SearchPage/SearchResult";
import HeadWrap from "../components/HeadWrap";
import SideBar from "../components/SideBar";


class SearchView extends React.Component {
  constructor(props) {
    super(props);
    let search=props.location.search;
    let params=new URLSearchParams(search);
    this.state={
      name: params.get('name'),
    }
    console.log("get name:",this.state.name);
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
                  <SearchResult name={this.state.name}/>
              </Layout>
            </div>
          </div>
        </div>
    )
  }
};

export default (SearchView);