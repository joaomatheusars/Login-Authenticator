import NextAuth, {AuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter} from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
//import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";


export const authOptions: AuthOptions = {
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
};
        /*
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
             },
            async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
            
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
                }
        })*/


const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};