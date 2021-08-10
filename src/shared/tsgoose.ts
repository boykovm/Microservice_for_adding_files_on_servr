import mongoose from 'mongoose';

export const connection = async (uri: string) => {
  // @ts-ignore
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'files' });
};
