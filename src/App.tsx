import React from "react";

import GlobalStyles from "./components/styles/GlobalStyles";

//components
import Header from "./components/pages/header";
import Science from "./components/pages/science";
import TokenFeatures from "./components/pages/tokenFeatures";
import Roadmap from "./components/pages/roadmap";
import Topbar from "./components/navbar/topbar";
import Footer from "./components/footer/footer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Topbar />
      <Header />
      <Science />
      <TokenFeatures />
      <Roadmap />
      <Footer />
    </>
  );
};

export default App;
