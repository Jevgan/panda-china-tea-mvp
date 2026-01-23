# 🐼 Panda China Tea Shop

A full-stack e-commerce application built to create eady user interaction with interface and provide a robust, modern and pretty-looking platform for making a purchases.

## Tech Stack (The "Why")
* **Framework:** Next.js 14 (App Router & Server Components)
* **Database:** PostgreSQL (Supabase)
* **ORM:** Prisma(with complex Recursive Relations for categories)
* **Architecture:** Connection Pooling (PgBouncer) for serverless scalability
* **Styling:** Tailwind CSS

## Key Features Implemented
* **Robust Schema:** Designed  a recursive category tree (Oolong -> White Oolong -> Te Guan Yin) using self-relations.
* **Type-Safe JSON:** Engineered a custom TypeScript interface to safely store and validate rich-text product descriptions in a relational database.
* **Performance:** Utilized  the Singleton Pattern for DB connections to prevent hot-reload exhaustion during development.

##  Status
* [x] Database connection 
* [x] Product Schema & Relations
* [ ] Define interfaces to handle JSON data (In Progress)
* [ ] Implement JWT 
* [ ] Shopping Cart Logic 
* [ ] Payment Integration 
