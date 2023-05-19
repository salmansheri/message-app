import { getServerSession } from "next-auth";
import { prisma } from "./prismaDB";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getCurrentUser() {
    const  session = await getServerSession(authOptions); 

    if(!session?.user?.email) {
        return null; 
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session?.user?.email, 
        }
    })

    if(!currentUser) {
        return null; 
    }

    return currentUser;
}