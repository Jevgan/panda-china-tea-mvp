import { db } from "@/lib/db";
import { JsonValue } from "@prisma/client/runtime/library";
import Link from "next/link";

interface OrderItem {

}

interface Category {

}

interface Product {
    id: string,
    name: string,
    description: JsonValue,
    price: number,
    imageUrl: string,
    inStock: boolean,
    createdAt: Date,
    orderItem: OrderItem[],
    category: Category
}

export default async function Page({ }) {
    const users = await db.user.findMany({
    })
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Tea Menu</h1>

            <div className="grid gap-4">
                {users.map((user) => (
                    <div key={user.id} className="border p-4 rounded shadow">
                        {/* 4. Now type 'product.' here and see the magic autocomplete */}
                        <h2 className="font-bold">{user.role}</h2>
                        <p className="text-sm text-gray-500">{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
