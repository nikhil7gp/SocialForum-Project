import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "./App.css";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { itemsAction } from "../store/itemSlice";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [sideSelectedTab, setSideSelectedTab] = useState("All");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch("https://dummyjson.com/posts");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       dispatch(itemsAction.setItems(data.posts));
  //     } catch (error) {
  //       console.error("Error loading posts:", error);
  //     }
  //   };

  //   fetchPosts();
  // }, [dispatch]);

  const showConstructionPage = () => {
    const validRoutes = ["Home", "Create Post"];
    return !validRoutes.includes(selectedTab) || sideSelectedTab !== "All";
  };

  return (
    <div className="app-container">
      <SideBar
        sideSelectedTab={sideSelectedTab}
        setSideSelectedTab={setSideSelectedTab}
      />

      <div className="content">
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        {showConstructionPage() ? (
          <div className="container text-center mt-5">
            <div className="alert alert-success" role="alert">
              <h2>🚧 Page Under Construction 🚧</h2>
              <p className="lead mt-3">
                Kaam chal raha hai! We are working on the "{selectedTab}" in the
                "{sideSelectedTab}" section.
              </p>
              <hr />
              <p className="mb-0">Thodi derr se aao!</p>
            </div>
          </div>
        ) : (
          <Outlet />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
