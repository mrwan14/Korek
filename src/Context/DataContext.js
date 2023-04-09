import { createContext, useEffect, useState } from "react";
import { getData } from "../api";
import Pagination from "../Component/Pantigation/pantigation";

export let DataContext = createContext(0);

export default function DataContextProvider(props) {
  const [Data, setData] = useState(null);
  useEffect(() => {
    // Immediately Invoked Functionx
    (async () => {
      // Get items from storage and sync with state
      // Get data from API
      setData(await getData());
    })();
  }, []);

  /// filter data 
  const CarBrand = [
    "Toyota",
    "Hyundai",
    "Kia",
    "Chevrolet",
    "Nissan",
    "Mitsubishi",
    "Mercedes",
    "BMW",
    "Peugeot",
    "Renault",
  ];
  const carModel = [
    "Corolla",
    "Camry",
    "Yaris",
    "Fortuner",
    "RAV4",
    "Land Cruiser",
  ];
  const ManufactureYear = [
    "2013",
    "2014",
    "2015",
    "2017",
    "2018",
    " 2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleBrandChange = (Car_Brand) => {
    if (selectedCategories.includes(Car_Brand)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== Car_Brand));
    } else {
      setSelectedCategories([...selectedCategories, Car_Brand]);
    }
  };

  // pantigation

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return (
    <DataContext.Provider
      value={{
        Data,
        CarBrand,
        carModel,
        ManufactureYear,
        handleBrandChange,
        selectedCategories,
        indexOfFirstItem,
        indexOfLastItem,
        itemsPerPage,
        paginate,
      }}
    >
      {Data == null ? <div>Loading... just wait</div> : props.children}{" "}
    </DataContext.Provider>
  );
}
