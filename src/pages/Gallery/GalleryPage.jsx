import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import JerukwudelLogo from "../../assets/image/jerukwudel.png";

// jika ingin menambahkan gambar baru, masukkan kedalam file src/assets/image
// lalu gunakan template ini [import (namagambar) from "../../assets/image/(namagambar)]
import robot1 from "../../assets/image/robot1.jpeg";
import bendrat from "../../assets/image/bendrat.jpeg";
import bendrat1 from "../../assets/image/bendrat1.jpeg";
import bendrat2 from "../../assets/image/bendrat2.jpeg";
import bendrat3 from "../../assets/image/bendrat3.jpeg";
import bendrat4 from "../../assets/image/bendrat4.jpeg";
import bendrat5 from "../../assets/image/bendrat5.jpeg";
import bendrat6 from "../../assets/image/bendrat6.jpeg";
import bendrat7 from "../../assets/image/bendrat7.jpeg";
import mieoseng from "../../assets/image/mieoseng.jpeg";
import nasibendrat1 from "../../assets/image/nasibendrat1.jpeg"
import nasibendrat2 from "../../assets/image/nasibendrat2.jpeg"

const images = [robot1, bendrat5, bendrat4, bendrat3, bendrat2, bendrat1, bendrat];

const GalleryPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="mt-16 flex flex-col items-center w-full">
                <div className="mb-10 flex items-stretch max-w-4xl w-full px-8">
                    <div className="w-28 self-center">
                        <img src={JerukwudelLogo} alt="" />
                    </div>
                    <div className="mb-10 ml-10 text-justify">
                        <h1 className="font-bold text-3xl">Galeri Karanggede B</h1>
                        <hr className="border-t-2 border-black mb-4" />
                    </div>
                </div>
                <MasonryGridGallery></MasonryGridGallery>
            </div>
        </div>
    );
};

export default GalleryPage;

export function MasonryGridGallery() {
    return (
        <div className="pl-20 pr-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="h-fit grid gap-4">
                <div className="h-auto">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={bendrat6}
                        alt="gallery-photo"
                    />
                </div>
                <div className="h-auto">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src={bendrat7}
                        alt="gallery-photo"
                    />
                </div>
                <div className="h-auto">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={mieoseng}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="h-fit grid gap-4">
                <div className="h-auto">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={robot1}
                        alt="gallery-photo"
                    />
                </div>
                <div className="h-auto">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={bendrat4}
                        alt="gallery-photo"
                    />
                </div>
                <div className="h-auto">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src={bendrat3}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="h-fit grid gap-4">
                <div className="h-auto">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={bendrat1}
                        alt="gallery-photo"
                    />
                </div>
                <div className="h-auto">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src={bendrat5}
                        alt="gallery-photo"
                    />
                </div>
                <div className="h-auto">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={bendrat}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="h-fit grid gap-4">
                <div className="h-fit">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={bendrat2}
                        alt="gallery-photo"
                    />
                </div>
                <div className="h-fit">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={nasibendrat1}
                        alt="gallery-photo"
                    />
                </div>
                <div className="h-fit">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={nasibendrat2}
                        alt="gallery-photo"
                    />
                </div>
            </div>
        </div>
    );
}
