import { connectMongoDB } from "@/../../lib/mongodb";
import User from "@/../../models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Function to handle the authorization logic
const authorize = async (credentials) => {
  const { email, password } = credentials;

  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return null;
    }

    // Compare passwords
    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      return null;
    }

    return user;
  } catch (error) {
    console.error("Error: ", error);
    return null;
  }
};

// Define authentication options
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.error("Error: ", error);
          return null;
        }
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
