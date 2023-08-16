import NextAuth, {AuthOptions, NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter} from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { prisma } from "@/lib/prisma";

const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            /*authorization: {
                params: {
                    access_type: "offline",
                    response_type: "code",
                    prompt: "consent",
                }
            },*/
        }),    
    ],
    secret: process.env.SECRET || 'asdsad',
};
// T
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};