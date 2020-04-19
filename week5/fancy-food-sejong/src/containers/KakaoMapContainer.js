import React from "react";
import { useSelector } from "react-redux";

import KakaoMap from "../components/KakaoMap";

function KakaoMapContainer() {
  const { id } = useSelector((state) => state.centerposition);

  return <KakaoMap id={id} />;
}

export default KakaoMapContainer;
