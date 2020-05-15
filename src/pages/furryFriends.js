import React from "react";
import "../sass/furryFriends.scss";
import ReactImageAppear from "react-image-appear";
import { getPups } from "../services/pups";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";

class Landscape extends React.Component {
  state = {
    pups: getPups(),
    loading: true,
    currentPage: 1,
    pageSize: 7
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
    const { pageSize, currentPage, loading, pups } = this.state;

    if (loading) {
      return <h1>loading … </h1>;
    }
    let images = paginate(pups, currentPage, pageSize);
    return (
      <React.Fragment>
        {" "}
        <div className="sectionDiv">
          <h1 className="sectionName text-center m-5">furry friends</h1>
        </div>
        <div className="card-columns pups">
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
          itemsCount={pups.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}
export default Landscape;
