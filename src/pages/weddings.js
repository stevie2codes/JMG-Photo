import React from "react";
import "../sass/weddings.scss";
import ReactImageAppear from "react-image-appear";
import { getWeddings } from "../services/wedPics";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";

class Weddings extends React.Component {
  state = {
    weddings: getWeddings(),
    loading: true,
    currentPage: 1,
    pageSize: 15
  };

  componentDidMount() {
    this.setState({
      loading: false
    });
  }
  addDefaultSrc = ev => {
    ev.target.src = "https://www.stevensegallery.com/640/360";
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { pageSize, currentPage, loading, weddings } = this.state;

    if (loading) {
      return <h1>loading … </h1>;
    }
    let images = paginate(weddings, currentPage, pageSize);
    return (
      <React.Fragment>
        {" "}
        <div className="sectionDiv">
          <h1 className="sectionName text-center m-5">Weddings</h1>
        </div>
        <div className="card-columns weddings">
          {images.map(img => (
            <div className="card" key={img.id}>
              <ReactImageAppear
                showLoader={false}
                easing="ease-in"
                src={img.image}
                animationDuration="1s"
                placeholder
                className="card-img-top"
                onError={this.addDefaultSrc}
                alt="weddings"
              />
            </div>
          ))}
        </div>
        <Pagination
          itemsCount={weddings.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}
export default Weddings;
