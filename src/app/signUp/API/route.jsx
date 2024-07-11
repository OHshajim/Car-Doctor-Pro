import { ConnectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await ConnectDB();
    const userCollection = db.collection("Users");
    const check = await userCollection.find({ email: newUser.email });
    if(check){
      return Response.json({ message: "User Already exist" }, { status: 304 });
    }
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: "User Created" }, { status: 200 });

  }
   catch (error) {
    // return Response.json(
    //   { message: "Something going wrong , try again !!!" }
    //   // { status: 500 }
    // );
  }
};
