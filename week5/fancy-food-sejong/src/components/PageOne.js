import React from "react";
import KakaoMapContainer from "../containers/KakaoMapContainer";
import FilterContainer from "../containers/FilterContainer";
import ResultListContainer from "../containers/ResultListContainer";
import Footer from "./Footer";

function PageOne() {
  return (
    <div>
      <KakaoMapContainer />
      <FilterContainer />
      <ResultListContainer />
      <Footer />
    </div>
  );
}

export default PageOne;
