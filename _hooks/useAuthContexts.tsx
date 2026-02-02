import { create } from "zustand";

type AuthContext = {
    authenticated: boolean
};

export const useAuthContext = create<AuthContext>((set) => ({
    authenticated: false
}));
