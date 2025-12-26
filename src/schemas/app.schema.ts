import z from "zod";

export const contactInformationSchema = z.object({
  id: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  operational_time: z.string().optional(),
});

export type ContactInformationModel = {
  id?: string;
  address: string;
  phone: string;
  email: string;
  operational_time: string[];
};

export const ClassSchema = z.object({
  class_name: z.string().optional(),
  description: z.string().optional(),
  schedule: z.string().optional(),
  price: z.string().optional(),
  class_items: z.string().optional(),
});
export type ClassModel = {
  id?: string;
  class_name: string;
  description: string;
  schedule: string;
  price: string;
  class_items: string[];
};

export const UserSchema = z.object({
  username: z.string().optional(),
  password: z.string().optional(),
  role: z.string().optional(),
});

export type UserModel = {
  id?: string;
  username: string;
  role: string;
};

export const LoginSchema = z.object({
  username: z.string().optional(),
  password: z.string().optional(),
});
export type LoginModel = z.infer<typeof LoginSchema>;

export const GalerySchema = z.object({
  id: z.string().optional(),
  url: z.string().optional(),
  image_public_id: z.string().optional(),
  category: z.string().optional(),
  description: z.string().optional(),
});

export type ImageModel = z.infer<typeof GalerySchema>;

export type GlobalType<T> = {
  data: T;
};


