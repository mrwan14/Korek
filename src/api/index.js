export const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          Product_Name: "Alternator",
          Product_Details:
            "electrical generator that converts mechanical energy into electrical energy. It is a key component of a car's charging..",
          Price: 526,
          ImgSrc: require("../images/product.png"),
          countInStock: 32,
          Car_Year: "2022",
          Car_Brand: "Toyota",
          Car_Model: "Land Cruiser",
        },
        {
          id: 2,
          Product_Name: "Alternator",
          Product_Details:
            "electrical generator that converts mechanical energy into electrical energy. It is a key component of a car's charging..",
          Price: 526,
          ImgSrc: require("../images/product.png"),
          countInStock: 32,
          Car_Year: "2023",
          Car_Brand: "Hyundai",
          Car_Model: "Camry",
        },
        {
          id: 3,
          Product_Name: "Alternator",
          Product_Details:
            "electrical generator that converts mechanical energy into electrical energy. It is a key component of a car's charging..",
          Price: 526,
          ImgSrc: require("../images/product.png"),
          countInStock: 32,
          Car_Year: "2023",
          Car_Brand: "Kia",
          Car_Model: "Land Cruiser",
        },
        {
          id: 4,
          Product_Name: "Alternator",
          Product_Details:
            "electrical generator that converts mechanical energy into electrical energy. It is a key component of a car's charging..",
          Price: 526,
          ImgSrc: require("../images/product.png"),
          countInStock: 32,
          Car_Year: "2021",
          Car_Brand: "Chevrolet",
          Car_Model: "RAV4",
        },
        {
          id: 5,
          Product_Name: "Alternator",
          Product_Details:
            "electrical generator that converts mechanical energy into electrical energy. It is a key component of a car's charging..",
          Price: 526,
          ImgSrc: require("../images/product.png"),
          countInStock: 32,
          Car_Year: "2021",
          Car_Brand: "Nissan",
          Car_Model: "Camry",
        },
        {
          id: 6,
          Product_Name: "Alternator",
          Product_Details:
            "electrical generator that converts mechanical energy into electrical energy. It is a key component of a car's charging..",
          Price: 526,
          ImgSrc: require("../images/product.png"),
          countInStock: 32,
          Car_Year: "2017",
          Car_Brand: "Mitsubishi",
          Car_Model: "Fortuner",
        },
        {
          id: 6,
          Product_Name: "Alternator",
          Product_Details:
            "electrical generator that converts mechanical energy into electrical energy. It is a key component of a car's charging..",
          Price: 526,
          ImgSrc: require("../images/product.png"),
          countInStock: 32,
          Car_Year: "2015",
          Car_Brand: "Mercedes",
          Car_Model: "Yaris",
        },
        {
          id: 6,
          Product_Name: "Alternator",
          Product_Details:
            "electrical generator that converts mechanical energy into electrical energy. It is a key component of a car's charging..",
          Price: 526,
          ImgSrc: require("../images/product.png"),
          countInStock: 32,
          Car_Year: "2014",
          Car_Brand: "BMW",
          Car_Model: "Camry",
        },
        {
          id: 1,
          Product_Name: "Alternator",
          Product_Details:
            "electrical generator that converts mechanical energy into electrical energy. It is a key component of a car's charging..",
          Price: 526,
          ImgSrc: require("../images/product.png"),
          countInStock: 32,
          Car_Year: "2013",
          Car_Brand: "Peugeot",
          Car_Model: "Corolla",
        },
      ]);
    }, 1000);
  });
};
