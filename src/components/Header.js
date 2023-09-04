/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <>
        <header className="header-top-strip py-3">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                <p className="text-white mb-0">
                  Free shipping Over $100 & Free return
                </p>
              </div>
              <div className="col-6">
                <p className="text-end text-white mb-0">
                  Hotline:{" "}
                  <a className="text-white" href="tel:+84 915820814">
                    +84 68686868{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </header>
        <header className="header-upper py-3">
          <div className="container-xxl">
            <div className="row align-items-center ">
              <div className="col-2">
                <h1>
                  <Link className="text-white" to="/">
                    TMTN
                  </Link>
                </h1>
              </div>
              <div className="col-5">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Search Product Here..."
                    aria-label="Search Product Here..."
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text p-3" id="basic-addon2">
                    <BsSearch className="fs-20" />
                  </span>
                </div>
              </div>
              <div className="col-5">
                <div className="header-upper-links d-flex align-items-center justify-content-between">
                  <div>
                    <Link className="d-flex align-items-center gap-10 text-white">
                      <img src="images/compare.svg" alt="compare" />
                      <p className="mb-0">
                        Compare <br /> Product
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link className="d-flex align-items-center gap-10 text-white">
                      <img src="images/wishlist.svg" alt="wishlist" />
                      <p className="mb-0">
                        Favourrite <br /> Wishlist
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link className="d-flex align-items-center gap-10 text-white">
                      <img src="images/user.svg" alt="user" />
                      <p className="mb-0">
                        Login <br /> MyAccout
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link className="d-flex align-items-center gap-10 text-white">
                      <img src="images/cart.svg" alt="cart" />
                      <div className="d-flex flex-column gap-10">
                        <span className="badge bg-white text-dark">0</span>
                        <p className="mb-0">$ 500</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header className="header-bottom py-3">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-30">
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src="/images/menu.svg" />
                        <span className="d-flex me-5 inline-block">
                          Shop Categories
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link className="dropdown-item  text-white " to="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white " to="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white " to="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-links">
                    <div className="d-flex align-items-center gap-15">
                      <NavLink className="text-white" to="/">
                        home
                      </NavLink>
                      <NavLink className="text-white" to="/store">
                        our store
                      </NavLink>
                      <NavLink className="text-white" to="/">
                        blogs
                      </NavLink>
                      <NavLink className="text-white" to="/contact">
                        contact
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    </div>
  );
};

export default Header;
