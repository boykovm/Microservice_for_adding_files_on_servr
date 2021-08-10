import { getModelForClass, prop } from '@typegoose/typegoose';

class File {
  @prop()
  public name?: string;

  @prop()
  public path?: string;
}

export const fileModel = getModelForClass(File);