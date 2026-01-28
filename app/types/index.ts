

export interface User{
    id: string,
    username?: string,
    email: string,
    passwordHash:string,
    role: string,
    registered: Date,

    orders?: Order[],
    supportTickets?: SupportTicket[]
}


export interface Product {
    id: string,
    name: string,
    description: TeaDetails,
    price: number,
    imageUrl: string,
    inStock: boolean,
    createdAt: Date,

    categoryId?: string,
    orderItem?: OrderItem[],
    category?: Category
}

export interface Category {
    id: string,
    name: string,

    parent?: Category,
    subCategories?: Category[],
    products: Product[]
}

export interface Order{
    id: string,
    totalAmount: number,
    status: string,
    createdAt: Date,
    user: User,
    items: OrderItem[]
}

export interface OrderItem {
   id: string,
   price: number,
   quantity: number,
   discount?: number,
   product?: Product,
   order?: Order
}

export interface SupportTicket{
    id: string,
    subject:string,
    createdAt: Date,
    issuer: User
    messages: TicketMessage[]
}

export interface TicketMessage{
    id:string,
    text: string,
    ticket: SupportTicket
}

export interface TeaDetails{
    origin: string,
    ingredients: string[],
    weight: number,
    quantity: number,
    dimensions: {
        length: number,
        width: number
    }
    steepTime: number,
    steepTemperature: number,
    caffeine: "None" | "Low" | "Medium" | "High"
}
