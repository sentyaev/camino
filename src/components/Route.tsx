import React from "react";
import Card from "./Card";
import data from "../data";
import oviedo from "../images/oviedo.jpeg";
import amani from "../images/amani.jpg";
import colunga from "../images/colunga.jpg";
import sebrallo from "../images/sebrallo.jpg";
import sidr from "../images/sidr.jpg";
import llanes from "../images/llanes.jpeg";
import pendueles from "../images/pendueles.jpg";
import naves from "../images/naves.jpg";
import sanpedro from "../images/sanpedro.jpg";
import sanpedro2 from "../images/sanpedro2.jpeg";
import oviedo2 from "../images/oviedo2.jpeg";

const images: any = {
  oviedo: oviedo,
  llanes: llanes,
  colunga: colunga,
  amani: amani,
  sebrallo: sebrallo,
  sidr: sidr,
  pendueles: pendueles,
  naves: naves,
  sanpedro: sanpedro,
  sanpedro2: sanpedro2,
  oviedo2: oviedo2,
};

const Route = () => {
  return (
    <ul className="divide-y-2 divide-gray-200">
      {data.map((x) => {
        return (
          <li className="pr-6 pl-6 pb-6">
            <Card image={images[x.image]} data={x} day="Day 1" />
          </li>
        );
      })}
    </ul>
  );
};
export default Route;
