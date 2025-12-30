import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateClass } from "@/hooks/usePatch";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

import { Textarea } from "../ui/textarea";

type ClassEditProps = {
  buttonProps: React.ReactNode;
  value: any;
  idClass: string;
};

export function ClassEdit({ buttonProps, value, idClass }: ClassEditProps) {
  const { updateClassForm, updateClassMutation } = useUpdateClass();

  const inputArray = (data: string) => {
    const result = data.split(",").map((item) => item.trim());
    return result;
  };
  const update = (data: any) => {
    updateClassForm.reset({
      schedule: data?.schedule,
      price: data?.price,
      class_name: data?.class_name,
      description: data?.description,
      class_items: data?.class_items?.join(","),
    });
  };

  const updateClassHandler = (data: any) => {
    const dataSending = {
      id: idClass,
      class_name: data?.class_name,
      description: data?.description,
      schedule: data?.schedule,
      price: data?.price,
      class_items: inputArray(data?.class_items),
    };
    updateClassMutation.mutate(dataSending);
    // console.log(dataSending);
  };

  useEffect(() => {
    update(value);
  }, [idClass]);
  return (
    <Dialog>
      <DialogTrigger asChild>{buttonProps}</DialogTrigger>

      <DialogContent
        className="
    sm:max-w-[425px]
    max-h-[90vh]
    overflow-y-auto
  "
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateClassForm.handleSubmit(updateClassHandler)(e);
          }}
          className="space-y-4"
        >
          <DialogHeader>
            <DialogTitle>Edit Kelas</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Nama Kelas</Label>
              <Input {...updateClassForm.register("class_name")} />
            </div>

            <div className="grid gap-2">
              <Label>Harga</Label>
              <Input type="number" {...updateClassForm.register("price")} />
            </div>

            <div className="grid gap-2">
              <Label>Jadwal</Label>
              <Input {...updateClassForm.register("schedule")} />
            </div>

            <div className="grid gap-2">
              <Label>Item Kelas</Label>
              <Textarea {...updateClassForm.register("class_items")} rows={3} />
            </div>

            <div className="grid gap-2">
              <Label>Deskripsi</Label>
              <Textarea {...updateClassForm.register("description")} rows={3} />
            </div>
          </div>

          <DialogFooter className="sticky bottom-0 bg-background pt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" disabled={updateClassMutation.isPending}>
              {updateClassMutation.isPending && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )}
              Simpan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
