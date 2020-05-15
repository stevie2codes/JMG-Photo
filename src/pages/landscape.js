import React from "react";
import "../sass/landscapes.scss";
import ReactImageAppear from "react-image-appear";
import { getLandscapes } from "../services/scapes";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";

class Landscape extends React.Component {
  state = {
    landscapes: getLandscapes(),
    loading: true,
    currentPage: 1,
    pageSize: 12
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
    const { pageSize, currentPage, loading, landscapes } = this.state;

    if (loading) {
      return <h1>loading … </h1>;
    }
    let images = paginate(landscapes, currentPage, pageSize);
    return (
      <React.Fragment>
        {" "}
        <div className="sectionDiv">
          <h1 className="sectionName text-center m-5">landscapes</h1>
        </div>
        <div className="card-columns landscapes">
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
                alt="Landscapes"
              />
            </div>
          ))}
        </div>
        <Pagination
          itemsCount={landscapes.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}
export default Landscape;
