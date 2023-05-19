import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@next-auth/prisma-adapter"; 
import { prisma } from "@/libs/prismaDB";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ], 
    pages: {
        signIn: "/",
    }, 
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    }
        
    
        
    
}

const handler = NextAuth(authOptions); 

export {handler as GET, handler as POST }