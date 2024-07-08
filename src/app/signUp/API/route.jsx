import { ConnectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await ConnectDB();
    const userCollection = db.collection("Users");
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
