import { connectToDb } from "@/lib/connextToDb";
import User from "@/model/UserModel";

export async function POST(req: Request) {
  try {
    await connectToDb();

    // Get the data from the request body
    const { email } = await req.json();
    console.log("Email - ", email);

    // Check if email is provided
    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: "Email is required" }),
        { status: 400 },
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ success: false, error: "Email already exists" }),
        { status: 400 },
      );
    }

    // Create a new user
    const newUser = new User({ email });

    // Save the user to the database
    await newUser.save();

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully added to the waitlist",
      }),
      { status: 201 },
    );
  } catch (error) {
    console.error("Error in submitting waitlist:", (error as Error).message);

    // Return error response
    return new Response(
      JSON.stringify({ success: false, error: "Something went wrong" }),
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectToDb();
    const users = await User.find({});

    return new Response(
      JSON.stringify({
        success: true,
        user: users,
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: "Something went wrong" }),
      { status: 500 },
    );
  }
}
