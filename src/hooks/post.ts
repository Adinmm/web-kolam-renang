import { axiosInstance } from "@/lib/axiosInstance";
import { FaqSchema, TestimoniSchema } from "@/schemas/app.schema";
import { FaqType, TestimoniType } from "@/types/app.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

export const createNewTestimoni = async (data: TestimoniType) => {
  const response = await axiosInstance.post("/testimoni", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const useCreateNewTestimoni = () => {
  const form = useForm({
    resolver: zodResolver(TestimoniSchema),
  });
  const mutation = useMutation({
    mutationKey: ["create_testimoni"],
    mutationFn: (data: TestimoniType) => createNewTestimoni(data),
    onSuccess: () => {
      form.reset();
      alert("create testimoni success");
    },
    onError(err) {
      console.log(err);
    },
  });
  return {
    form,
    mutation,
  };
};

export const createFaq = async (data: FaqType) => {
  const response = await axiosInstance.post("/faq", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const useCreateFaq = () => {
  const form = useForm({
    resolver: zodResolver(FaqSchema),
  });
  const mutation = useMutation({
    mutationKey: ["create_faq"],
    mutationFn: (data: FaqType) => createFaq(data),
    onSuccess: () => {
      form.reset();
      alert("create faq success");
    },
    onError(err) {
      console.log(err);
    },
  });
  return {
    form,
    mutation,
  };
};