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
            authorization: {
                params: {
                    access_type: "offline",
                    response_type: "code",
                    prompt: "consent",
                }
            },
        }),    
    ],
    callbacks: {
        async signIn({ account, profile }) {
          return true // Do different verification for other providers that don't have `email_verified`
        },
    },
    secret: process.env.SECRET,
};
// T
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};