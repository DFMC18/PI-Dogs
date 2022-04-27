import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs, getTemperament } from "../Actions/index";

import Card from "./Card";
import Pagination from "./Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  console.log(allDogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(16);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const length = allDogs?.length;
  const pagination = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getTemperament());
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div>
      <h1>Hello from Home</h1>
      <Pagination
        dogsPerPage={dogsPerPage}
        pagination={pagination}
        allDogs={length}
      />

      {currentDogs?.map((e) => {
        return (
          <Card
            key={e.id}
            id={e.id}
            image={e.image}
            name={e.name}
            temperament={
              e.temperament ? (
                e.temperament
              ) : e.temperaments ? (
                e.temperaments.map((t) => t.name + " ")
              ) : (
                <></>
              )
            }
            weight={e.weight ? e.weight[0] : e.weight_min}
          />
        );
      })}
    </div>
  );
}
