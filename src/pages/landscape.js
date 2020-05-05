// import React, { Component } from "react";

import "../sass/landscapes.scss";

//

// class Landscape extends Component {
//   state = { landscapes: [], loading: true };

//   componentDidMount() {
//     this.setState({
//       landscapes: getLandscapes(),
//       loading: false
//     });
//   }

//   render() {
//     if (!this.state.landscapes) {
//       return <h1>loading … </h1>;
//     }
//     return (
//       <React.Fragment>
//         <div className="sectionDiv">
//           <h1 className="sectionName text-center m-5">LANDSCAPES</h1>
//         </div>
//         <div
//           className="grid"
//           data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'
//         >
//           <div className="imagesDiv">
//             {this.state.landscapes.map(img => (
//               <div className=" grid-item" key={img.id}>
//                 <img className="" src={img.image} alt="landscape orentation" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Landscape;

import React from "react";
import MasonryLayout from "react-masonry-layout";
import { getLandscapes } from "../services/scapes";

class Landscape extends React.Component {
  state = {
    perPage: 10,
    landscapes: []
  };

  componentDidMount() {
    this.setState({
      landscapes: getLandscapes()
    });
  }

  render() {
    if (!this.state.landscapes) {
      return <h1>loading … </h1>;
    }
    return (
      <React.Fragment>
        {" "}
        <div className="sectionDiv">
          <h1 className="sectionName text-center m-5">LANDSCAPES</h1>
        </div>
        <div className="landscapeContainer">
          <MasonryLayout
            id="masonry-layout"
            className="mx-auto"
            sizes={[
              { columns: 1, gutter: 20 },
              { mq: "768px", columns: 3, gutter: 20 },
              { mq: "1024px", columns: 3, gutter: 20 }
            ]}
          >
            {this.state.landscapes.map((v, i) => {
              let height = v.type === "portrait" ? `auto ` : `300`;

              return (
                <img
                  src={v.image}
                  key={i}
                  alt="landscapes"
                  style={{
                    width: `500px`,
                    height: `${height}px`,
                    lineHeight: `${height}px`,
                    display: "flex",
                    flexWrap: "wrap",

                    background: "rgba(0,0,0,0.7)"
                  }}
                ></img>
              );
            })}
          </MasonryLayout>
        </div>
      </React.Fragment>
    );
  }
}
export default Landscape;
