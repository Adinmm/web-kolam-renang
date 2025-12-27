"use client"
import { axiosInstance } from "@/lib/axiosInstance";
import {
  ClassModel,
  CoachModel,
  ContactInformationModel,
  GlobalType,
  ImageModel,
  UserModel,
} from "@/schemas/app.schema";
import { useQuery } from "@tanstack/react-query";

const getContactInformation = async () => {
  const response = await axiosInstance.get("/contact_informations");
  return response.data;
};

export const useGetContactInformation = () => {
  const query = useQuery<GlobalType<ContactInformationModel>>({
    queryKey: ["contact_information"],
    queryFn: getContactInformation,
  });
  return {
    query,
  };
};

const getClasses = async () => {
  const response = await axiosInstance.get("/classes");
  return response.data;
};
export const useGetClasses = () => {
  const query = useQuery<GlobalType<ClassModel[]>>({
    queryKey: ["classes"],
    queryFn: getClasses,
  });
  return {
    classes: query,
  };
};

const getUser = async (id: string) => {
  const response = await axiosInstance.get(`/user/${id}`);
  return response.data;
};

export const useGetUser = (id: string) => {
  const query = useQuery<GlobalType<UserModel>>({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });
  return {
    user: query,
  };
};

const getImageUrl = async () => {
  const response = await axiosInstance.get("/images");
  return response.data;
};
export const useGetImage = () => {
  const query = useQuery<GlobalType<ImageModel[]>>({
    queryKey: ["images"],
    queryFn: getImageUrl,
  });
  return {
    getImage: query,
  };
};

const getCoach = async () => {
  const response = await axiosInstance.get("/coaches");
  return response.data;
};
export const useGetCoach = () => {
  const query = useQuery<GlobalType<CoachModel[]>>({
    queryKey: ["coaches"],
    queryFn: getCoach,
  });
  return {
    getCoach: query,
  };
};

const getFaqCategories = async () => {
  const response = await axiosInstance.get("/faq_categories");
  return response.data;
};

export const useGetFaqCategories = () => {
  const query = useQuery<GlobalType<any[]>>({
    queryKey: ["faq_categories"],
    queryFn: getFaqCategories,
  });
  return {
    getFaqCategories: query,
  };
};