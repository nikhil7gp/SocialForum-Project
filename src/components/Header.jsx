import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { LiaSearchSolid } from "react-icons/lia";

const Header = ({ selectedTab, setSelectedTab }) => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li onClick={() => setSelectedTab("Home")}>
              <Link
                to="/"
                className={`nav-link  ${
                  selectedTab === "Home" ? "text-danger" : "text-white"
                }
                }`}
              >
                Home
              </Link>
            </li>
            <li onClick={() => setSelectedTab("Explore")}>
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "Explore" ? "text-danger" : "text-white"
                }
                }`}
              >
                Explore
              </a>
            </li>
            <li onClick={() => setSelectedTab("Trending")}>
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "Trending" ? "text-danger" : "text-white"
                }
                }`}
              >
                Trending
              </a>
            </li>
            <li onClick={() => setSelectedTab("Create Post")}>
              <Link
                to="/create-post"
                className={`nav-link ${
                  selectedTab === "Create Post" ? "text-danger" : "text-white"
                }
                }`}
              >
                Create Post
              </Link>
            </li>
            <li onClick={() => setSelectedTab("About")}>
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "About" ? "text-danger" : "text-white"
                }
                }`}
              >
                About
              </a>
            </li>
          </ul>

          <form
            className={`${
              style[`searchContainer`]
            } col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3`}
            role="search"
          >
            <LiaSearchSolid className={style.searchIcon} />
            <input
              type="search"
              className={`form-control form-control-dark text-bg-dark ${
                style[`searchBar`]
              }`}
              placeholder="Search for post..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button
              type="button"
              className={`btn ${style["login"]} btn-outline-light me-2`}
            >
              Login
            </button>
            <button
              type="button"
              className={`btn ${style["signup"]} btn-danger`}
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
