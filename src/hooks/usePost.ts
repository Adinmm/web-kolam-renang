"use client";
import { authInstance, axiosInstance } from "@/lib/axiosInstance";
import {
  ClassModel,
  ClassSchema,
  GalerySchema,
  ImageModel,
  LoginModel,
  LoginSchema,
} from "@/schemas/app.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const createClass = async (data: ClassModel) => {
  const response = await axiosInstance.post("/class", data);
  return response.data;
};
export const useCreateClass = () => {
  const form = useForm({
    resolver: zodResolver(ClassSchema),
  });
  const query = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["create_class"],
    mutationFn: (data: ClassModel) => createClass(data),
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["classes"],
      });
      alert("create successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    classForm: form,
    classMutation: mutation,
  };
};

const login = async (data: LoginModel) => {
  const response = await authInstance.post("/login", data);
  return response.data;
};

export const useLogin = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginModel) => login(data),
    onSuccess: (data) => {
      sessionStorage.setItem("id", data.data.id);
      sessionStorage.setItem("role", data.data.role);
      alert("Login Berhasil");
      window.location.href = "/dashboard";
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return {
    form,
    mutation,
  };
};

const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axiosInstance.post("/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const useUploadImage = () => {
  const mutation = useMutation({
    mutationKey: ["upload_image"],
    mutationFn: (file: File) => uploadImage(file),
    onSuccess: () => {
      alert("upload gambar berhasil");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    uploadMutation: mutation,
  };
}

const uploadImageUrl = async (data: ImageModel) => {
  const response = await axiosInstance.post("/image_url", data);
  return response.data;
};

export const useUploadImageUrl = () => {
  const form = useForm({
    resolver: zodResolver(GalerySchema),
  });
  const mutation = useMutation({
    mutationKey: ["upload_image_url"],
    mutationFn: (data: ImageModel) => uploadImageUrl(data),
    onSuccess: () => {
      alert("upload gambar url berhasil");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    imageMutation: mutation,
    imageForm: form,
  };
};
