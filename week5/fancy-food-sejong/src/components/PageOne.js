import React from "react";
import Header from "./Header";
import KakaoMapContainer from "../containers/KakaoMapContainer";
import FilterContainer from "../containers/FilterContainer";
import ResultListContainer from "../containers/ResultListContainer";
import Footer from "./Footer";

function PageOne() {
  return (
    <div>
      <Header />
      <KakaoMapContainer />
      <FilterContainer />
      <ResultListContainer />
      <Footer />
    </div>
  );
}

export default PageOne;
