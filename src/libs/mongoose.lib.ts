import mongoose from "mongoose";

interface ConnectionStatus {
  connected?: number;
}

const connection: ConnectionStatus = {};

export const MongooseClient = async (): Promise<void> => {
  try {
    if (connection.connected) return;

    const db = await mongoose.connect(
      process.env.NEXT_PUBLIC_MONGO_URI as string
    );

    connection.connected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};
