const data = [
  {
    day: "1 (Sep 6)",
    place: "Oviedo",
    distance: "Гуляем по Оведо",
    image: "oviedo",
    hotel: {
      name: "Hotel Casa Camila",
      link: "https://www.booking.com/hotel/es/casa-camila-hotel.en-gb.html",
    },
    food: [
      {
        name: "Gloria Oviedo by Nacho Manzano (Астурийское место из гида Мишлен)",
      },
      {
        name: "El Florian (испанская кухня)",
      },
      {
        name: "Asturiana (про это место пишут, что тут лучшая фабада)",
      },
    ],
    routes: [],
    poi: [],
  },
  {
    day: "2",
    place: "Llanes",
    distance: "Едем на электричке",
    image: "llanes",
    hotel: {
      name: "Домике у Бабули",
      link: "https://abnb.me/tDxIG41rrgb",
    },
    food: [
      {
        name: "Готовим на гриле",
      },
    ],
    routes: [],
    poi: [
      {
        name: "Paseo de San Pedro",
        link: "https://www.google.de/maps/place/Paseo+de+San+Pedro/@43.4244598,-4.7599413,16.69z/data=!4m13!1m7!3m6!1s0xd49eb1d91c87825:0x31d111621fce6f8!2sPaseo+San+Pedro,+33500+Llanes,+Asturias,+Spain!3b1!8m2!3d43.4252254!4d-4.759857!3m4!1s0xd49eb1d3547eb37:0xcd94d28e6b07dff3!8m2!3d43.4253002!4d-4.7593405",
      },
    ],
  },
  {
    day: "3",
    place: "Pendueles - Llanes",
    distance:
      "14.2 km (в Pendueles едем на электричке Oviedo - Santander 11:20, и потом возвращаемся в Llanes)",
    image: "pendueles",
    hotel: {
      name: "Домике у Бабули",
      link: "https://abnb.me/tDxIG41rrgb",
    },
    food: [
      {
        name: "Готовим на гриле",
      },
    ],
    routes: [
      {
        name: "Wikilock",
        link: "https://www.wikiloc.com/hiking-trails/20181007-camino-del-norte-etapa-17-colombres-llanes-29485230",
      },
      {
        name: "Wikilock",
        link: "https://www.wikiloc.com/hiking-trails/etapa-15-colombres-llanes-42776000",
      },
    ],
    poi: [],
  },
  {
    day: "4",
    place: "Llanes - Naves",
    distance: "12.8 km",
    image: "naves",
    hotel: {
      name: "Hotel Casafer",
      link: "https://www.booking.com/hotel/es/casafer.es.html",
    },
    food: [
      {
        name: "Sidreria Llagar Cabanon",
        link: "https://www.google.de/maps/place/Sidreria+Llagar+Caba%C3%B1%C3%B3n/@43.4394649,-4.8969462,16z/data=!4m9!1m2!2m1!1sSidreria+Llagar+Cabanon!3m5!1s0xd49e8a087598081:0xac752382ce1f59ac!8m2!3d43.4394801!4d-4.8932461!15sChdTaWRyZXJpYSBMbGFnYXIgQ2FiYW5vbloyChdzaWRyZXJpYSBsbGFnYXIgY2FiYW5vbiIXc2lkcmVyaWEgbGxhZ2FyIGNhYmFub26SAQljaWRlcl9iYXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTjNhV1UzV2sxUkVBRQ",
      },
    ],
    routes: [
      {
        name: "Wikilock",
        link: "https://www.wikiloc.com/hiking-trails/20181008-camino-del-norte-etapa-18-llanes-ribadesella-29486334",
      },
      {
        name: "Wikilock",
        link: "https://www.wikiloc.com/hiking-trails/etapa-20-llanes-ribadesella-22054408",
      },
    ],
    poi: [],
  },
  {
    day: "5",
    place: "Naves - San Pedro de Leces",
    distance: "23.5 km + 1.1 до домика",
    image: "sanpedro",
    hotel: {
      name: "роскошном доме!",
      link: "https://www.airbnb.ru/rooms/34299298?source_impression_id=p3_1601039281_FhfxPYGHlH9hXXm%2B&check_in=2021-03-19&guests=1&adults=1&check_out=2021-03-21 ",
    },
    food: [
      {
        name: "Покупаем еду в Ribadesella",
      },
    ],
    routes: [],
    poi: [],
  },
  {
    day: "6-7",
    place: "San Pedro de Leces",
    distance: "Отдыхаем!",
    image: "sanpedro2",
    hotel: {
      name: "роскошном доме!",
      link: "https://www.airbnb.ru/rooms/34299298?source_impression_id=p3_1601039281_FhfxPYGHlH9hXXm%2B&check_in=2021-03-19&guests=1&adults=1&check_out=2021-03-21 ",
    },
    food: [
      {
        name: "Покупаем еду в Ribadesella",
      },
    ],
    routes: [],
    poi: [
      {
        name: "40-45 мин до пляжа",
      },
    ],
  },
  {
    day: "8",
    place: "San Pedro de Leces - Colunga",
    distance: "17.9 km",
    image: "colunga",
    hotel: {
      name: "Mar Del Sueve",
      link: "https://www.booking.com/hotel/es/mar-del-sueve.es.html",
    },
    food: [],
    routes: [],
    poi: [
      {
        name: "до пляжа 30 минут пешком",
      },
    ],
  },
  {
    day: "9",
    place: "Colunga - Sebrayo",
    distance: "14 km + 2.8 km до отеля",
    image: "sebrallo",
    hotel: {
      name: "астурийскиом домике на ножках Las Casas de Isu",
      link: "https://www.booking.com/hotel/es/las-casas-de-isu.es.html",
    },
    food: [],
    routes: [],
    poi: [],
  },
  {
    day: "10",
    place: "Sebrayo - Amandi",
    distance: "10.7 km",
    image: "amani",
    hotel: {
      name: "домике",
      link: "https://www.airbnb.ru/rooms/8455571?adults=1&previous_page_section_name=1000&guests=1",
    },
    food: [
      {
        name: "Imagina Chigre Gastronómico",
      },
    ],
    routes: [],
    poi: [
      {
        name: "идем на экскурсию в сидрерию",
        link: "https://www.sidraelgaitero.com",
      },
    ],
  },
  {
    day: "11",
    place: "Amandi",
    distance: "Отдыхаем!",
    image: "sidr",
    hotel: {
      name: "домике",
      link: "https://www.airbnb.ru/rooms/8455571?adults=1&previous_page_section_name=1000&guests=1",
    },
    food: [
      {
        name: "Imagina Chigre Gastronómico",
      },
    ],
    routes: [],
    poi: [
      {
        name: "идем на экскурсию в сидрерию еще раз если понравится",
        link: "https://www.sidraelgaitero.com",
      },
    ],
  },
  {
    day: "12",
    place: "Amandi - Oviedo",
    distance: "19.9 km + электричка до Oviedo",
    image: "oviedo2",
    hotel: {
      name: "Hotel Casa Camila",
      link: "https://www.booking.com/hotel/es/casa-camila-hotel.es.html",
    },
    food: [],
    routes: [],
    poi: [],
  },
];

export default data;
