import { axiosInstance } from "@/lib/axiosInstance";
import {
  ClassModel,
  ClassSchema,
  ContactInformationModel,
  contactInformationSchema,
  UserModel,
  UserSchema,
} from "@/schemas/app.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateContactInformation = async (
  data: ContactInformationModel,
  id: string
) => {
  const response = await axiosInstance.patch(
    `/contact_information/${id}`,
    data
  );
  return response.data;
};

export const useUpdateContactInformation = () => {
  const query = useQueryClient();
  const form = useForm({
    resolver: zodResolver(contactInformationSchema),
  });
  const mutation = useMutation({
    mutationKey: ["update_contact_information"],
    mutationFn: (data: any) => updateContactInformation(data, data.id),
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["contact_information"],
      });
      alert("update succesfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    form,
    mutation,
  };
};

const updateUser = async (id: string, data: UserModel) => {
  const response = await axiosInstance.patch(`/user/${id}`, data);
  return response.data;
};

export const useUpdateUser = (id: string) => {
  const query = useQueryClient();
  const form = useForm({
    resolver: zodResolver(UserSchema),
  });
  const mutation = useMutation({
    mutationKey: ["update_user"],
    mutationFn: (data: UserModel) => updateUser(id, data),
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["user"],
      });
      alert("update succesfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    form,
    mutation,
  };
};

const updateClass = async (idClass: string, data: ClassModel) => {
  const { id, ...rest } = data;
  const response = await axiosInstance.patch(`/class/${idClass}`, rest, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export const useUpdateClass = () => {
  const form = useForm({
    resolver: zodResolver(ClassSchema),
  });
  const mutation = useMutation({
    mutationKey: ["update_class"],
    mutationFn: (data: any) => updateClass(data.id, data),
    onSuccess: () => {
      alert("update successfully");
      window.location.reload();
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return {
    updateClassForm: form,
    updateClassMutation: mutation,
  };
};
