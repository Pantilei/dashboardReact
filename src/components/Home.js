import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../history";

import WeatherMin from "./minComponents/WeatherMin";
import NewsMin from "./minComponents/NewsMin";
import SportMin from "./minComponents/SportMin";
import TasksMin from "./minComponents/TasksMin";
import PhotosMin from "./minComponents/PhotosMin";
import ChlotesMin from "./minComponents/ChlotesMin";

class Home extends React.Component {
  render() {
    if (!this.props.user.username) {
      history.push("/login");
    }
    return (
      <>
        <div className="welcome">
          <h1>Good day {this.props.user.username}</h1>
        </div>
        <div className="dashboard">
          <div className="dashboardItem">
            <WeatherMin />
          </div>
          <Link to="/news">
            <div className="dashboardItem">
              <NewsMin />
            </div>
          </Link>
          <Link to="/sport">
            <div className="dashboardItem">
              <SportMin />
            </div>
          </Link>
          <Link to="/photos">
            <div className="dashboardItem">
              <PhotosMin />
            </div>
          </Link>
          <Link to="/tasks">
            <div className="dashboardItem">
              <TasksMin />
            </div>
          </Link>
          <div className="dashboardItem">
            <ChlotesMin />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Home);
