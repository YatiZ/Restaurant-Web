import React, { useContext, useState } from "react";
import order from "../images/order.png";
import { menu } from "../Data/menu";
import StarRateIcon from "@mui/icons-material/StarRate";
import BreakfastMenu from "../MiniPages/BreakfastMenu";
import SearchBox from "../Components/Search";
import IntegrationNotistack from "../Components/Alert";
import { SnackbarProvider, useSnackbar } from "notistack";
import { OrderContext } from "../context/useOrderContext";
import MainMenu from "../MiniPages/MainMenu";

const MenuPage = () => {
  const { handleOrderClick } = useContext(OrderContext);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearching = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFood = menu.filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  console.log(filteredFood);
  return (
    <SnackbarProvider>
      <div className="p-10">
        <div className=" flex justify-end items-center">
          <SearchBox handleSearching={handleSearching} />
        </div>

        <MainMenu menu={filteredFood} />
        <BreakfastMenu menu={filteredFood} />
      </div>
    </SnackbarProvider>
  );
};

export default MenuPage;
