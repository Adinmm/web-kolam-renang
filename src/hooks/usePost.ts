"use client";
import { authInstance, axiosInstance } from "@/lib/axiosInstance";
import {
  ClassModel,
  ClassSchema,
  CoachModel,
  CoachSchema,
  FaqQuestionModel,
  FaqQuestionSchema,
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
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    uploadMutation: mutation,
  };
};

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
      window.location.reload();
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

const createCoach = async (data: CoachModel) => {
  const response = await axiosInstance.post("/coach", data);
  return response.data;
};

export const useCreateCoach = () => {
  const form = useForm({
    resolver: zodResolver(CoachSchema),
  });
  const mutation = useMutation({
    mutationKey: ["create_coach"],
    mutationFn: (data: CoachModel) => createCoach(data),
    onSuccess: () => {
      alert("create successfully");
      window.location.reload();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    coachForm: form,
    coachMutation: mutation,
  };
};

const createFaqCategory = async (data: { category: string }) => {
  const response = await axiosInstance.post("/faq_category", data);
  return response.data;
};

export const useCreateFaqCategory = () => {
  const mutation = useMutation({
    mutationKey: ["create_coach"],
    mutationFn: (data: { category: string }) => createFaqCategory(data),
    onSuccess: () => {
      alert("create faq category successfully");
      window.location.reload();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    faqCategory: mutation,
  };
};

const createFaqQuestion = async (data: FaqQuestionModel) => {
  const response = await axiosInstance.post("/faq_question", data);
  return response.data;
};

export const useCreateFaqQuestion = () => {
  const query = useQueryClient();
  const form = useForm({
    resolver: zodResolver(FaqQuestionSchema),
  });
  const mutation = useMutation({
    mutationKey: ["create_coach"],
    mutationFn: (data: any) => createFaqQuestion(data),
    onSuccess: () => {
      alert("create successfully");
      query.invalidateQueries({
        queryKey: ["faq_categories"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    faqForm: form,
    faqMutation: mutation,
  };
};
