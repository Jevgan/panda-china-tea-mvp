// import { PrismaClient } from "@prisma/client";
//
// const db = new PrismaClient();
import { db } from "@/lib/db";

async function main() {
    console.log("Start seeding");
    const blackTea = await db.category.upsert({
        where: { name: 'Tea' },
        update: {},
        create: { name: 'Tea' }
    });
    const greenTea = await db.category.upsert({
        where: { name: 'Green Tea' },
        update: {},
        create: {
            name: 'Green Tea',
            parentId: blackTea.id
        }
    });

    const matchaDetails = {
        origin: "Japan, Uji",
        ingredients: ["100% Organic Matcha"],
        weight: 50,
        quantity:1,
        dimensions:{length:12, width:8},
        steepTime: 3,
        steepTemperature: 80,
        caffeine: 'High'
    }

    await db.product.upsert({
        where: { name: 'Japanese Matcha' },
        update: {},
        create: {
            name: 'Japanese Matcha',
            price: 45.00,
            imageUrl: "../public/green_tea.jpg",
            inStock: true,
            categoryId: greenTea.id,
            description: matchaDetails as any

        }
    })
    console.log("DB filled succesfully");

}

    main()
    .then(async()=> await db?.$disconnect())
    .catch(async(e) => {
        console.error(e);
        await db?.$disconnect();
        process.exit(1);
    })
