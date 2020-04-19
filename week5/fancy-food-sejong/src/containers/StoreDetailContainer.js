import React from "react";
import StoreDetail from "../components/StoreDetail";
import { useSelector } from "react-redux";

function StoreDetailContainer() {
  const { id } = useSelector((state) => state.centerposition);

  return (
    <div>
      <StoreDetail id={id} />
    </div>
  );
}

export default StoreDetailContainer;
