/*import NextAuth, {AuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter} from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
//import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                  prompt: "consent",
                }
            },
        }),    
    ],
};*/