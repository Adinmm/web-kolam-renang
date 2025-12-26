import { axiosInstance } from "@/lib/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteClass = async (id: string) => {
  const response = await axiosInstance.delete(`/class/${id}`);
  return response.data;
};

export const useDeleteClass = () => {
  const query = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["delete_class"],
    mutationFn: (id: string) => deleteClass(id),
    onSuccess: () => {
      alert("delete successfully");
      query.invalidateQueries({
        queryKey: ["classes"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    deleteMutation: mutation,
  };
};

const deleteImage = async (id: string) => {
  const response = await axiosInstance.delete(`/image/${id}`);
  return response.data;
};

export const useDeleteImage = () => {
  const query = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["delete_image"],
    mutationFn: (id: string) => deleteImage(id),
    onSuccess: () => {
      alert("delete successfully");
      query.invalidateQueries({
        queryKey: ["images"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    deleteImageMutation: mutation,
  };
};