import React, { Component } from "react";

class PageBanner extends Component {
  render() {
    let { pageTitle, BGImage, ServiceTag } = this.props;

    return (
      // <div className="page-title-area bg-one">
      <div className={`page-title-area ${BGImage}`}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h2>{pageTitle}</h2>
              <h5 style={{ color: "white", paddingTop: "15px" }}>
                {ServiceTag}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageBanner;
