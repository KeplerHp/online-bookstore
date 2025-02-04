import React from 'react';
import SideBar from '../components/AdminPage/SideBar.js';
import {Layout} from "antd";
import MyFooter from "../components/footer";
import BookTableAdmin from "../components/AdminPage/BookTable";
import "../css/AdminPage.css";
import HeadWrapHomePage from "../components/HeadWrap";
import UserTableAdmin from "../components/AdminPage/UserTable";
import UserOrderTable from "../components/UserPage/UserOrderTable";
import BookStats from "../components/UserPage/BookStats";
import UserStats from "../components/UserPage/UserStats";
import AddBook from "../components/AdminPage/AddBook";
import ModifyBook from "../components/AdminPage/ModifyBook";

class AdminView extends React.Component {

  render() {
    const renderContent = () => {
      if(parseInt(this.props.match.params.id,10) === 1) {
        return (
            <Layout className="adminview-layout" >
              <SideBar selected={"1"}/>
              <div className="booktable-wrapper">
                <div className="booktable-container" >
                  <UserTableAdmin className="booktable-admin" />
                </div>
              </div>
            </Layout>
        );
      }
      else if(parseInt(this.props.match.params.id,10)===2) {
        return (
            <Layout className="adminview-layout" >
              <SideBar selected={"2"}/>
              <div className="booktable-wrapper">
                <div className="booktable-container" >
                  <BookTableAdmin className="booktable-admin" />
                </div>
              </div>
            </Layout>
        );
      }
      else if(parseInt(this.props.match.params.id,10)===3) {
        return (
            <Layout className="adminview-layout" >
              <SideBar selected={"2"}/>
              <div className="addbook-wrapper">
                <div className="booktable-container" style={{paddingTop:30}}>
                  <AddBook className="booktable-admin" />
                </div>
              </div>
            </Layout>
        );
      }
      else if(parseInt(this.props.match.params.id,10)===4) {
        return (
            <Layout className="adminview-layout" >
            <div className="user-container">
          <Layout className="bookview-layout">
            <SideBar selected={"4"}/>
            <div className="userorder-container">
              <UserOrderTable isadmin={"1"}/>
            </div>
          </Layout>
        </div>
            </Layout>
        );
      }
      else if(parseInt(this.props.match.params.id,10)===5) {
        return (
            <Layout className="adminview-layout" >
              <div className="user-container">
                <Layout className="bookview-layout">
                  <SideBar selected={"5"}/>
                  <div className="userorder-container">
                    <BookStats isadmin={"1"}/>
                  </div>
                </Layout>
              </div>
            </Layout>
        );
      }
      else if(parseInt(this.props.match.params.id,10)===6) {
        return (
            <Layout className="adminview-layout" >
              <div className="user-container">
                <Layout className="bookview-layout">
                  <SideBar selected={"6"}/>
                  <div className="userorder-container">
                    <UserStats/>
                  </div>
                </Layout>
              </div>
            </Layout>
        );
      }
      else if(parseInt(this.props.match.params.id,10)===7) {
        console.log("print..");
        console.log(this.props.match.params);
        let params=new URLSearchParams(this.props.location.search);
        let bookId=params.get('bookId');
        return (
            <Layout className="adminview-layout" >
              <SideBar selected={"2"}/>
              <div className="addbook-wrapper">
                <div className="booktable-container" style={{paddingTop:30}}>
                  <ModifyBook className="booktable-admin" id={bookId} />
                </div>
              </div>
            </Layout>
        );
      }
      else {
        return null;
      }
    }
    return (
        <div className="admin-page">
          <HeadWrapHomePage/>
          {renderContent()}
          <MyFooter/>
        </div>
    );
  }
};

export default AdminView;
