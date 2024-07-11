import { ConnectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await ConnectDB();
    const userCollection = db.collection("Users");
    const check = await userCollection.findOne({ email: newUser.email });
    if (check) {
      console.log("to", check, "from");
      return Response.json({ message: "User Already exist" }, { status: 200 });
    }
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Something going wrong , try again !!!", error },
      { status: 500 }
    );
  }
};
