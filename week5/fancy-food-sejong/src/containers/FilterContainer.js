import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleKorean,
  toggleJapanese,
  toggleChinese,
  toggleWestern,
  toggleCafe,
  toggleAlcohol,
} from "../modules/filter";
import Filter from "../components/Filter";

function FilterContainer() {
  const dispatch = useDispatch();

  const onToggleKorean = () => dispatch(toggleKorean());
  const onToggleJapanese = () => dispatch(toggleJapanese());
  const onToggleChinese = () => dispatch(toggleChinese());
  const onToggleWestern = () => dispatch(toggleWestern());
  const onToggleCafe = () => dispatch(toggleCafe());
  const onToggleAlcohol = () => dispatch(toggleAlcohol());

  return (
    <div>
      <Filter
        onToggleKorean={onToggleKorean}
        onToggleJapanese={onToggleJapanese}
        onToggleChinese={onToggleChinese}
        onToggleWestern={onToggleWestern}
        onToggleCafe={onToggleCafe}
        onToggleAlcohol={onToggleAlcohol}
      />
    </div>
  );
}

export default FilterContainer;
