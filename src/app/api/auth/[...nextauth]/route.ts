
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";


const clientIdText = process.env.GOOGLE_ID!
const clientSecretText = process.env.GOOGLE_SECRATE!


// console.log(
//     {
//         clientIdText,
//         clientSecretText
//     }
// )


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: clientIdText,
            clientSecret: clientSecretText
        })
    ],

    // async session({session} : any){

    // },


    callbacks: {



        async session({ session }: any) {

            // console.log({ session })

            const sessionUserData = await User.findOne({ email: session.user.email })

            // console.log(sessionUserData)

            session.user.id = sessionUserData._id.toString();
            // session.expires = Date.now() + ( 3600 * 1000 * 24)

            return session;
        },



        async signIn({ profile }: any) {
            try {

                await connect()

                let { email, name, picture } = profile

                const getUser = await User.findOne({ email })

                // console.log(getUser)

                if (!getUser) {

                    let newUserData = {
                        username: name,
                        email: email,
                        password: "LOG_IN_BY_GOOGLE",
                        profilePic: picture
                    }


                    let createUser = new User(newUserData)

                    createUser = await createUser.save()

                }


                return true

            } catch (err: any) {

                console.log(err)
                return false

            }
        }

    }


})




export { handler as GET, handler as POST }


