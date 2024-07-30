import React, { useState } from "react";
import { Carousel, Typography, Button, Dialog, DialogBody, Card, CardBody, CardHeader } from "@material-tailwind/react";
import JerukwudelLogo from "../../assets/image/jerukwudel.png";
import PetaKaranggede from '../../assets/image/peta.png';
import Denah from '../../assets/image/denah.jpg';
import Bendrat from '../../assets/image/bendrat2.jpeg'
import Chart from "react-apexcharts";

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Jumlah",
      data: [79, 229, 117, 112],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Jumlah KK",
        "Jumlah Jiwa",
        "Laki-laki",
        "Perempuan",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Carousel className="w-full h-96 overflow-hidden">
        <div className="relative h-96 w-full">
          <img
            src={PetaKaranggede}
            alt="peta"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
            <div className="w-3/4 md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl flex justify-center"
              >
                Peta Karanggede B
              </Typography>
              <div className="mt-52 flex gap-4 justify-center items-center">
                <a href="https://www.google.com/maps/@-8.1401655,110.7710935,17.33z?entry=ttu">
                  <Button size="lg" color="white">
                    Jelajahi
                  </Button>
                </a>
                <Button size="lg" color="white" onClick={handleOpen}>
                  Denah
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-96 w-full">
          <img
            src={Bendrat}
            alt="peta"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 mr-32 text-3xl md:text-4xl lg:text-5xl flex justify-center"
              >
                Khas Karanggede B
              </Typography>
              <div className="mt-52 mr-36 flex gap-4 justify-center">
                <a href="/product">
                  <Button size="lg" color="white">
                    Lihat
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="mt-16 flex flex-col items-center w-full">
        <div className="flex items-stretch max-w-full w-full px-10 pb-10">
          <div className="mb-10 self-start">
            <img src={JerukwudelLogo} alt="" />
          </div>
          <div className="w-full mb-10 ml-10 mr-10 text-justify">
            <h1 className="font-bold text-3xl">Tentang Karanggede B</h1>
            <p className="text-black mt-5">
              Selamat datang di Karanggede B!
              Padukuhan Karanggede B terletak di sebelah tenggara Provinsi Daerah Istimewa Yogyakarta dengan jarak 86 km dari ibu kota Provinsi Daerah Istimewa Yogyakarta. dan dengan ibu kota Kabupaten Gunungkidul sejauh 40 km ke arah tenggara. Padukuhan Karanggede B merupakan salah satu dari dari 8 padukuhan yang ada di kelurahan Jerukwudel , Kapenawon Girisubo, Kabupaten Gunungkidul.
            </p>
          </div>
          <div className="flex flex-col">
            <Card>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row justify-center"
              >
                <Typography className="text-center flex" variant="h6" color="blue-gray">
                  Data Kependudukan Karanggede B
                </Typography>
              </CardHeader>
              <CardBody className="px-2 p-0">
                <Chart {...chartConfig} />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen} size="auto">
        <DialogBody className="flex flex-col items-center p-4 mx-0 max-h-screen overflow-y-auto">
          <div className="flex flex-col items-center justify-center flex-1 my-4">
            <img src={Denah} alt="Denah" className="h-auto max-h-[80vh] w-auto" />
          </div>
          <div className="flex justify-center mb-4">
            <Button
              variant="gradient"
              color="red"
              onClick={handleOpen}
            >
              Tutup
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default HomePage;
