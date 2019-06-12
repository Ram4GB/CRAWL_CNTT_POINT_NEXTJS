import React, { Component } from "react";
import { Icon } from "antd";
export default class CardAbout extends Component {
  render() {
    const { member } = this.props;
    return (
      <React.Fragment>
        <div className="col-xs-12 col-sm-6 col-md-6">
          <div className="image-flip">
            <div className="mainflip">
              <div className="frontside">
                <div className="card">
                  <div className="card-body text-center">
                    <p>
                      <img
                        style={{ border: "1px solid black" }}
                        className=" img-fluid"
                        src={member.img}
                        alt="card image"
                      />
                    </p>
                    <h4 className="card-title">{member.name}</h4>
                    <p className="card-text">
                      This is basic card with image on top, title, description
                      and button.
                    </p>
                  </div>
                </div>
              </div>
              <div className="backside">
                <div className="card">
                  <div className="card-body text-center mt-4">
                    <h4 className="card-title">Sunlimetech</h4>
                    <p className="card-text">
                      This is basic card with image on top, title, description
                      and button.This is basic card with image on top, title,
                      description and button.This is basic card with image on
                      top, title, description and button.
                    </p>
                    <ul className="list-inline">
                      <li>
                        <a target="_blank" href={member.facebook}>
                          <button className="btn btn-primary">
                            <Icon style={{ fontSize: "2em" }} type="facebook" />
                          </button>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            /* FontAwesome for working BootSnippet :> */
            #team {
              background: #eee !important;
            }

            .btn-primary:hover,
            .btn-primary:focus {
              background-color: #108d6f;
              border-color: #108d6f;
              box-shadow: none;
              outline: none;
            }

            .btn-primary {
              color: #fff;
              background-color: #007b5e;
              border-color: #007b5e;
            }

            section {
              padding: 60px 0;
            }

            section .section-title {
              text-align: center;
              color: #007b5e;
              margin-bottom: 50px;
              text-transform: uppercase;
            }

            #team .card {
              border: none;
              background: #ffffff;
            }

            .image-flip:hover .backside,
            .image-flip.hover .backside {
              -webkit-transform: rotateY(0deg);
              -moz-transform: rotateY(0deg);
              -o-transform: rotateY(0deg);
              -ms-transform: rotateY(0deg);
              transform: rotateY(0deg);
              border-radius: 0.25rem;
            }

            .image-flip:hover .frontside,
            .image-flip.hover .frontside {
              -webkit-transform: rotateY(180deg);
              -moz-transform: rotateY(180deg);
              -o-transform: rotateY(180deg);
              transform: rotateY(180deg);
            }

            .mainflip {
              -webkit-transition: 1s;
              -webkit-transform-style: preserve-3d;
              -ms-transition: 1s;
              -moz-transition: 1s;
              -moz-transform: perspective(1000px);
              -moz-transform-style: preserve-3d;
              -ms-transform-style: preserve-3d;
              transition: 1s;
              transform-style: preserve-3d;
              position: relative;
            }

            .frontside {
              position: relative;
              -webkit-transform: rotateY(0deg);
              -ms-transform: rotateY(0deg);
              z-index: 2;
              margin-bottom: 30px;
            }

            .backside {
              position: absolute;
              top: 0;
              left: 0;
              background: white;
              -webkit-transform: rotateY(-180deg);
              -moz-transform: rotateY(-180deg);
              -o-transform: rotateY(-180deg);
              -ms-transform: rotateY(-180deg);
              transform: rotateY(-180deg);
              -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
              -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
              box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
            }

            .frontside,
            .backside {
              -webkit-backface-visibility: hidden;
              -moz-backface-visibility: hidden;
              -ms-backface-visibility: hidden;
              backface-visibility: hidden;
              -webkit-transition: 1s;
              -webkit-transform-style: preserve-3d;
              -moz-transition: 1s;
              -moz-transform-style: preserve-3d;
              -o-transition: 1s;
              -o-transform-style: preserve-3d;
              -ms-transition: 1s;
              -ms-transform-style: preserve-3d;
              transition: 1s;
              transform-style: preserve-3d;
            }

            .frontside .card,
            .backside .card {
              min-height: 312px;
            }

            .backside .card a {
              font-size: 18px;
              color: #007b5e !important;
            }

            .frontside .card .card-title,
            .backside .card .card-title {
              color: #007b5e !important;
            }

            .frontside .card .card-body img {
              width: 120px;
              height: 120px;
              border-radius: 50%;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
