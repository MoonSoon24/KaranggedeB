import React from "react";
import {
    Typography, Card, CardBody, CardHeader, CardFooter, Tooltip
} from "@material-tailwind/react";
import JerukwudelLogo from "../../assets/image/jerukwudel.png";
import Dukuh from "../../assets/image/iduksudiyanto.jpeg";
import Profil from "../../assets/image/profilepicture.png";

const AboutUsPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="mt-16 flex flex-col items-center w-full">
                <div className="flex items-stretch max-w-full w-full px-10 pb-10">
                    <div className="mb-10 self-start">
                        <img src={JerukwudelLogo} alt="Jerukwudel Logo" />
                    </div>
                    <div className="w-full mb-10 ml-10 mr-10 text-justify">
                        <h1 className="font-bold text-3xl pt-5 mb-5">Sekilas Karanggede B</h1>
                        <p className="text-black mb-5">
                            Karanggede pada awalnya merupakan satu padukuhan yang dipimpin oleh bapak Siswowiharjo sebelum dipecah menjadi dua padukuhan, yaitu Karanggede A dan Karanggede B. Saat ini, Padukuhan Karanggede B dipimpin oleh bapak Dukuh Iduk Sudiyanto sejak tahun 2001, menggantikan bapak Martojo yang sebelumnya menjabat.
                        </p>
                        <p className="text-black mb-5">
                            Karanggede B memiliki beberapa fasilitas penting, antara lain menara tower internet dari Telkomsel, masjid, gedung Kalurahan Budaya, dan gedung TK dan PAUD Jerukwudel. Meskipun TK dan PAUD ini terletak di wilayah Karanggede B, sebenarnya termasuk ke dalam dompol.
                        </p>
                        <p className="text-black mb-5">
                            Mata pencarian utama penduduk Karanggede B adalah pertanian, yang menghasilkan padi, kacang, jagung, dan ketela. Selain itu, peternakan juga menjadi salah satu mata pencarian penting dengan menghasilkan hewan seperti sapi, kambing, dan ayam.
                        </p>
                        <p className="text-black mb-5">
                            Di samping itu, terdapat mata pencarian lain seperti toko kelontong, produksi makanan khas "Bendrat", budidaya tanaman bonsai dan hidroponik, serta kreativitas dalam membuat replika robot dari barang bekas.
                        </p>
                        <h1 className="font-bold text-3xl pt-5 mb-5">Petilasan Gedong</h1>
                        <p className="text-black mb-5">
                            Petilasan gedong adalah sebuah adat istiadat yang dimiliki oleh Karanggede,Bendo dan Dompol, adat ini dilakukan sekali setahun pada hari senin paing, dan memiliki beberapa runtutan kegiatan yang harus dilakukan secara berurutan dalam hari itu. Kegiatan ini dilakukan dengan cara Merti Dusun atau Rasul Dusun, ada beberapa prosesi dalam pelaksanaan Merti Dusun ini, yang pertama adalah pemasangan bobok (karya masyarakat yang terbuat dari lempengan kayu dan dibentuk menyerupai aksesoris) yang dilakukan di petilasan gedong yang berada di arah selatan Karanggede B, prosesi yang kedua adalah penyembelihan wedus (kambing) di Rasul Dusun yang lokasinya di gilir antara Karanggede A, Karanggede B, Bendo dan Dompol.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <Card className="w-80">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="flex flex-col gap-4 rounded-none md:flex-row justify-center"
                            >
                                <Typography className="text-center flex" variant="h5" color="blue-gray">
                                    Data Kependudukan Karanggede B
                                </Typography>
                            </CardHeader>
                            <CardBody className="text-center">
                                <div className="flex justify-center">
                                    <img className="h-40 max-w-full rounded-lg object-cover object-center flex justify-center" src={Dukuh} alt="Profile-picture-dukuh" />
                                </div>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Iduk Sudiyanto
                                </Typography>
                                <Typography color="blue-gray" className="font-black" textGradient>
                                    Dukuh
                                </Typography>
                            </CardBody>
                            <CardBody className="text-center">
                                <div className="flex justify-center">
                                    <img className="h-40 max-w-full rounded-lg object-cover object-center flex justify-center" src={Profil} alt="Profile-picture-rt1" />
                                </div>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Sarino
                                </Typography>
                                <Typography color="blue-gray" className="font-bold" textGradient>
                                    RT 1
                                </Typography>
                            </CardBody>
                            <CardBody className="text-center">
                                <div className="flex justify-center">
                                    <img className="h-40 max-w-full rounded-lg object-cover object-center flex justify-center" src={Profil} alt="Profile-picture-rt2" />
                                </div>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Katino
                                </Typography>
                                <Typography color="blue-gray" className="font-bold" textGradient>
                                    RT 2
                                </Typography>
                            </CardBody>
                            <CardBody className="text-center">
                                <div className="flex justify-center">
                                    <img className="h-40 max-w-full rounded-lg object-cover object-center flex justify-center" src={Profil} alt="Profile-picture-rw" />
                                </div>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Sukirno
                                </Typography>
                                <Typography color="blue-gray" className="font-bold" textGradient>
                                    RW
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
