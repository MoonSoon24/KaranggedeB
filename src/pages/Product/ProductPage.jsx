import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    Card,
    Typography
} from "@material-tailwind/react";
import JerukwudelLogo from "../../assets/image/jerukwudel.png";
import nasibendrat1 from "../../assets/image/nasibendrat1.jpeg";
import robot1 from "../../assets/image/robot1.jpeg";
import bonzai1 from "../../assets/image/bonzai.jpeg";

const ProductPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="mt-16 flex flex-col items-center w-full">
                <div className="mb-10 flex items-stretch max-w-4xl w-full px-8">
                    <div className="w-28 self-center">
                        <img src={JerukwudelLogo} alt="Jerukwudel Logo" />
                    </div>
                    <div className="mb-10 ml-10 text-justify">
                        <h1 className="font-bold text-3xl">Produk Karanggede B</h1>
                        <hr className="border-t-2 border-black mb-4" />
                    </div>
                </div>
                <DialogWithImage />
            </div>
        </div>
    );
};

export function DialogWithImage() {
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct(null);
    };

    return (
        <>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="h-fit grid gap-4">
                    <Card
                        className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                        onClick={() => handleOpen({ image: nasibendrat1, description: "Nasi bendrat yang terbuat dari daun singkong" })}
                    >
                        <img
                            alt="Nasi Bendrat"
                            className="rounded-lg h-full w-full object-cover object-center"
                            src={nasibendrat1}
                        />
                    </Card>
                </div>
                <div className="h-fit grid gap-4">
                    <Card
                        className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                        onClick={() => handleOpen({ image: robot1, description: "Replika robot dari barang bekas" })}
                    >
                        <img
                            alt="Robot"
                            className="rounded-lg h-full w-full object-cover object-center"
                            src={robot1}
                        />
                    </Card>
                </div>
                <div className="h-fit grid gap-4">
                    <Card
                        className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                        onClick={() => handleOpen({ image: bonzai1, description: "Tanaman bonzai dari kebun lokal" })}
                    >
                        <img
                            alt="Bonzai"
                            className="rounded-lg h-full w-full object-cover object-center"
                            src={bonzai1}
                        />
                    </Card>
                </div>
            </div>
            <Dialog open={open} handler={handleClose} size="auto">
                <DialogBody className="flex flex-col items-center p-4 mx-0 max-h-96">
                    <div className="flex flex-col items-center justify-center flex-1 my-4">
                        {selectedProduct && (
                            <img src={selectedProduct.image} alt="Selected Product" className="max-h-[50vh] w-auto" />
                        )}
                    </div>
                    <Typography className="text-center flex" variant="h6" color="blue-gray">
                        {selectedProduct && selectedProduct.description}
                    </Typography>
                </DialogBody>
                <DialogFooter className="flex">
                    <div className="flex justify-center mb-4">
                        <Button
                            variant="gradient"
                            color="red"
                            onClick={handleClose}
                        >
                            Tutup
                        </Button>
                    </div>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default ProductPage;
