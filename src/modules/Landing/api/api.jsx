import axios from "axios";

export async function listCar(name, category, minPrice, maxPrice, status) {
  const response = await axios.get(
    `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&isRented=${status}`
  );

  return response;
}

export async function detailCar(id, config) {
  const response = await axios.get(
    `https://api-car-rental.binaracademy.org/customer/car/${id}`,
    config
  );
  return response;
}
