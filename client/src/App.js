import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Header from "./components/headers/Header";
import MainPages from "./components/mainpages/Pages";

function App() {
	const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <DataProvider>
      <Router>
        <div id="header" style={{ display: "inline" }}>
          <div class="header_top">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 ">
                  <div class="contactinfo">
                    <ul class="nav nav-pills">
                      <li>
                        <a href="">
                          <i class="fa fa-phone"></i> +234 903 755 9176
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fa fa-envelope"></i> paragon@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 ">
                  <div class="social-icons pull-right">
                    <ul class="nav navbar-nav">
                      <li>
                        <a href="">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fa fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="App">
          <Header />
          <MainPages />
        </div>
        <div class="footer-widget">
			<div class="container">
				<div class="row">
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>Service</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><a href="#">Online Help</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Order Status</a></li>
								<li><a href="#">Change Location</a></li>
								<li><a href="#">FAQ???s</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>Quock Shop</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><a href="#">T-Shirt</a></li>
								<li><a href="#">Mens</a></li>
								<li><a href="#">Womens</a></li>
								<li><a href="#">Gift Cards</a></li>
								<li><a href="#">Shoes</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>Policies</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><a href="#">Terms of Use</a></li>
								<li><a href="#">Privecy Policy</a></li>
								<li><a href="#">Refund Policy</a></li>
								<li><a href="#">Billing System</a></li>
								<li><a href="#">Ticket System</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>About Shopper</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><a href="#">Company Information</a></li>
								<li><a href="#">Careers</a></li>
								<li><a href="#">Store Location</a></li>
								<li><a href="#">Affillate Program</a></li>
								<li><a href="#">Copyright</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-3 col-sm-offset-1">
						<div class="single-widget">
							<h2>About Shopper</h2>
							<form action="#" class="searchform">
								<input type="text" placeholder="Your email address" />
								<button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>
								<p>Get the most recent updates from <br />our site and be updated your self...</p>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
    <div class="footer-bottom">
			<div class="container">
				<div class="row">
					<p class="pull-left">Copyright ??  {date} PARAGON Inc. All rights reserved.</p>
					<p class="pull-right">Designed by <span><a target="_blank" href="http://www.uicsoft.herokuapp.com">UicSoft</a></span></p>
				</div>
			</div>
		</div>
      </Router>
    </DataProvider>
  );
}

export default App;
