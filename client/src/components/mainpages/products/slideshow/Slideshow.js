import React from "react";
export default function Slideshow() {
  return (
    <div>
      {" "}
      <section id="slider">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div
                id="slider-carousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#slider-carousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#slider-carousel" data-slide-to="1"></li>
                  <li data-target="#slider-carousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                  <div class="item active">
                    <div class="col-sm-6">
                      <h1>
                        <span>P</span>ARAGON{" "}
                      </h1>
                      <h2> New In- Just For You </h2>
                      <p>Stock Up Without Breaking The Bank</p>
                      <button type="button" class="btn btn-default get">
                        Get it now
                      </button>
                    </div>
                    <div class="col-sm-6">
                      <img
                        src="assets2/images/home/girl1.png"
                        class="girl img-responsive"
                        alt=""
                      />
                      <img
                        width={100}
                        src="assets2/images/home/pricing.png"
                        class="pricing"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="item">
                    <div class="col-sm-6">
                      <h1>
                        <span>P</span>ARAGON{" "}
                      </h1>

                      <h2>Your - Shopping Destination</h2>
                      <p>100% Quality</p>
                      <button type="button" class="btn btn-default get">
                        Get it now
                      </button>
                    </div>
                    <div class="col-sm-6">
                      <img
                        src="assets2/images/home/girl2.png"
                        class="girl img-responsive"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="item">
                    <div class="col-sm-6">
                      <h1>
                        <span>P</span>ARAGON{" "}
                      </h1>
                      <h2> New In- Just For You </h2>
                      <button type="button" class="btn btn-default get">
                        Get it now
                      </button>
                    </div>
                    <div class="col-sm-6">
                      <img
                        src="assets2/images/home/girl3.png"
                        class="girl img-responsive"
                        alt=""
                      />
                      <img
                        width={100}
                        src="assets2/images/home/pricing.png"
                        class="pricing"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <a
                  href="#slider-carousel"
                  class="left control-carousel hidden-xs"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
                <a
                  href="#slider-carousel"
                  class="right control-carousel hidden-xs"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
