import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Feedback,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Box, TextField, Button } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Orders
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Invoices
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        {/* // vendor sidebar */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Vendor</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Orders
              </li>
            </Link>

            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Support
            </li>
          </ul>
          <div className="supportButton">
            <Button
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                minWidth: "120px",
                minHeight: "30px",
                fontSize: "10px",
                color: "black",
                margin: "0",
                padding: "0",
                // backgroundColor: '#0069d9'
                
              }}
              // variant="contained"
              color="primary"
            >
            Support: +965 99155017

            </Button>
          </div>

          <div className="totalButton">
            <Button
              style={{
                maxWidth: "80px",
                maxHeight: "30px",
                minWidth: "120px",
                minHeight: "30px",
                textTransform: "lowercase",
                color: "black",
                LineStyle: "none",
               
              }}
              // variant="contained"
              color="primary"
              
            >
              Log out
            </Button>
          </div>
{/* Admin login Button */}
<Link to="/AdminLogin" className="btn btn-primary">hello</Link>

            
            <Button
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                minWidth: "120px",
                minHeight: "30px",
                fontSize: "10px",
                color: "black",
                margin: "0",
                padding: "0",
                // backgroundColor: '#0069d9'
                
              }}
              // variant="contained"
              color="primary"
            >
            Admin Log in

            </Button>
    


        </div>

        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div> */}
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
