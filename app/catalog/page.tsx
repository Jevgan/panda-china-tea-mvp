import { db } from "@/lib/db";
import { Product, TeaDetails } from "@/app/types/index";
import Image from "next/image";
import ProductDesctiption from "./ProductDescription.server";
import greenTeaImage from "@/public/green_tea.jpg"

export default async function Page({ }) {
    const products = await db.product.findMany({})

    return (
        <div className="p-10 w-5xl">
            <h1 className="text-2xl font-bold mb-4">Tea Menu</h1>

            {products.map((product) => {
                const details = product.description as unknown as TeaDetails;
                return (

                    <div key={product.id} className="rounded-lg shadow-md p-6 border dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">

                        <Image className="w-full h-48 object-cover rounded-lg" src={greenTeaImage} alt="Product" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                            <ProductDesctiption data={details} />
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}
