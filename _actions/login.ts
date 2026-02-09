'use server';

import { redirect } from "next/navigation";

export default async function login(prevState: any, formData: FormData){
    return redirect('/');
}
