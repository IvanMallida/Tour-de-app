import React from "react";
import GeneralLayout from "../../components/layout/GeneralLayout";
import CardTour from "./components/CardTour";
import image from "../../assets/images/img01.jpg";
import image2 from "../../assets/images/img02.jpg";

const data = [
  {
    title: "Free tour nocturno por Madrid",
    calification: 9.5,
    opinions: 1.316,
    travelers: 12.681,
    description:
      "En este free tour nocturno por Madrid **contemplaremos la iluminación de las principales plazas  monumentos de la capital española**. ¡Una ruta inolvidable por el centro de la ciudad!",
    price: 0,
    discount: 0,
    img: image,
  },
  {
    title: "Excursión a Toledo y Segovia",
    calification: 9.2,
    opinions: 2.215,
    travelers: 20.611,
    description:
      "En este tour visitaremos en un día **las dos ciudades más populares desde Madrid: Toledo y Segovia**. Si lo deseáis, podréis ampliar el recorrido hasta **Ávila**, famosa por sus murullas",
    price: 55,
    discount: 30,
    img: image2,
  },
];

const TourHome = () => (
  <GeneralLayout>
    {data.map((item, i) => {
      return <CardTour data={item} />;
    })}
  </GeneralLayout>
);

export default TourHome;
