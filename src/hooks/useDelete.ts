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

const deleteCoach = async (id: string) => {
  const response = await axiosInstance.delete(`/coach/${id}`);
  return response.data;
};

export const useDeleteCoach = () => {
  const query = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["delete_coach"],
    mutationFn: (id: string) => deleteCoach(id),
    onSuccess: () => {
      alert("delete successfully");
      query.invalidateQueries({
        queryKey: ["coaches"],
      })
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    deleteCoachMutation: mutation,
  };
};

const deleteFaq = async(id: string)=>{
  const response = await axiosInstance.delete(`/faq_question/${id}`);
  return response.data
}

export const useDeleteFaq = () => {
  const query = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["delete_faq"],
    mutationFn: (id: string) => deleteFaq(id),
    onSuccess: () => {
      alert("delete successfully");
      query.invalidateQueries({
        queryKey: ["faq_categories"],
      })
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    deleteFaqMutation: mutation,
  };
};

const deleteFaqCategory = async (id: string) => {
  const response = await axiosInstance.delete(`/faq_category/${id}`);
  return response.data;
};

export const useDeleteFaqCategory = ()=>{
  const query = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["delete_faq_category"],
    mutationFn: (id: string) => deleteFaqCategory(id),
    onSuccess: () => {
      alert("delete successfully");
      query.invalidateQueries({
        queryKey: ["faq_categories"],
      })
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    deleteFaqCategoryMutation: mutation,
  };
}
