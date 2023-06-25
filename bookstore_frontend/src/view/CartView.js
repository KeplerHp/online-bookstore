import React from 'react';
import MyFooter from "../components/footer";
import HeadWrapCartPage from "../components/CartPage/HeadWrap";
import CartTable from "../components/CartPage/CartTable";
import SideBar from "../components/SideBar";
import {Layout} from "antd";

class CartView extends React.Component {


  render() {
    return (
        <div>
          <HeadWrapCartPage/>
          <Layout className="bookview-layout">
            <SideBar selected={"3"}/>
            <div>
              <CartTable/>
              <div className="foot-container" style={{display: "block"}}>
                <MyFooter/>
              </div>
            </div>
          </Layout>
        </div>
    );
  }
}

export default (CartView);
