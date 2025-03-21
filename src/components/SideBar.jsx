import style from "./SideBar.module.css";

const SideBar = ({ sideSelectedTab, setSideSelectedTab }) => {
  const sideItems = [
    "All",
    "Standup",
    "Anime",
    "Sports",
    "eSports",
    "Amazon Prime shows",
    "Netflix show",
    "eSports Wc",
  ];

  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${style["sideBar"]}`}
      style={{ width: "250px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Social Forum</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {sideItems.map((item) => (
          <li key={item} className="nav-item">
            <a
              href="#"
              className={`nav-link text-white ${
                sideSelectedTab === item ? style["active-tab"] : ""
              }`}
              onClick={() => setSideSelectedTab(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default SideBar;
