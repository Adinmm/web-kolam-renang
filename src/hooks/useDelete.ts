import { axiosInstance } from "@/lib/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteClass = async (id: string) => {
  const response = await axiosInstance.delete(`/class/${id}`);
  return response.data;
};

export const useDeleteClass = ()=>{
    const query = useQueryClient()
    const mutation = useMutation({
        mutationKey: ["delete_class"],
        mutationFn: (id: string) => deleteClass(id),
        onSuccess: () => {
            alert("delete successfully");
            query.invalidateQueries({
                queryKey:['classes']
            })
        },
        onError: (error) => {
            console.log(error);
        },
    });
    return{
        deleteMutation: mutation
    }
}
