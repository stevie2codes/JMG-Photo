import React from "react";
import "../sass/furryFriends.scss";
import ReactImageAppear from "react-image-appear";
import { getPorts } from "../services/ports";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";

class Portraits extends React.Component {
  state = {
    ports: getPorts(),
    loading: true,
    currentPage: 1,
    pageSize: 9
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
    const { pageSize, currentPage, loading, ports } = this.state;

    if (loading) {
      return <h1>loading … </h1>;
    }
    let images = paginate(ports, currentPage, pageSize);
    return (
      <React.Fragment>
        {" "}
        <div className="sectionDiv">
          <h1 className="sectionName text-center m-5">Portraits</h1>
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
                alt="Portraitss"
              />
            </div>
          ))}
        </div>
        <Pagination
          itemsCount={ports.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}
export default Portraits;
