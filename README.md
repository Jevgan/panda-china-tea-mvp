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
* [x] Define interfaces to handle JSON data (In Progress)
* [ ] Implement JWT 
* [ ] Shopping Cart Logic 
* [ ] Payment Integration 


## 🔮 Planned Architecture (Phase 2)

### Authentication (JWT)
* **Goal:** Secure stateless authentication for user accounts and order history.
* **Strategy:** Implementing **NextAuth.js (Auth.js)** with the Prisma Adapter.
* **Flow:** 1. User logs in (Credentials or OAuth).
  2. Server issues a signed **JWT** containing the `userId` and `role` (Admin/User).
  3. JWT is stored in an HTTP-Only cookie for security.
  4. Middleware validates the token before allowing access to `/admin` or `/profile` routes.

### Caching Strategy (Redis)
* **Goal:** Minimize database load for high-traffic pages (Product Catalog).
* **Problem:** The tea menu rarely changes, but is read frequently.
* **Solution:** Implementing **Redis (Upstash/Vercel KV)** to cache database query results.
* **Logic:** * Check Cache -> If Hit: Return Data (10ms).
  * If Miss: Query Postgres (300ms) -> Write to Cache -> Return Data.
  * **Revalidation:** Trigger cache purge only when an Admin updates a product.


## React / Next.js agenda

### Day 1(22.01.26):

1. [x] Initialize the project on Next.js 14, Tailwind, React, Supabase, Prisma, PostgreSQL.
2. [x] Start this project and see "Hello world".

### Day 2(23.01.26)

1. [x] Added the favicon.

### Day 3(24.01.26)

1. [x] Define the interfaces for enities.
2. [x] Learn the basic concepts of Next.js and React.

### Day 4(25.01.26)

1. [x] Product card(almost).
2. [x] Part of Header.
3. [x] Search UI.

### Day 5(26.01.26)

1. [x] Theme Toggler, Header.
    1. [x] Create the animation on toggle: sun goes down and dask sun comes from bottom and vice versa.
    2. [x] Header UI ready.


### Day 6(27.01.26)

* [ ] About page.
* [ ] Footer.
* [ ] Contacts page.

### Day 7(28.01.26)

1. [] Mobile Menu.
2. [] AI Search.

### Day 8(29.01.26)

1. [] Profile.
2. [] Shopping cart.
3. [] Login page.
