'use server';

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

export default async function signInWithGoogle() {
    const supabase = await createClient();
    const origin = (await headers()).get('origin');

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${origin}/callback`,
        }
    });

    if (error) {
        console.error(error);
        redirect('/error');
    }

    if (data.url) redirect(data.url);

}
