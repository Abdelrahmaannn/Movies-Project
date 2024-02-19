import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoadingPage from "./Components/LoadingPage/LoadingPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Popular from "./Components/Popular/Popular";
import TopRated from "./Components/TopRated/TopRated";
import TvShows from "./Components/TvShows/TVShows";
import Layout from "./Components/Layout/Layout";

const browswrRouter = createBrowserRouter( [ { path:"/", element: <Layout/> , children:[ { index : true , element : <Popular/>  },  { path:"popular", element : <Popular/>  },
  { path: "toprated" , element: <TopRated/> },
  { path : "tvshows" , element : <TvShows/> },
  { path :"*" , element : <ErrorPage/> }
  
 ]  } ]  )

function App() {
  return (
    <>
      <RouterProvider router={browswrRouter} />
    </>
  );
}

export default App;
