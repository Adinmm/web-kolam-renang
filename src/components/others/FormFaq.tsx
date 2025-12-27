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
import { useCreateFaqCategory } from "@/hooks/usePost";
import { Loader2 } from "lucide-react";
import { useState } from "react";

type FaqProps = {
  buttonProps: React.ReactNode;
};

export function FormFaq({ buttonProps }: FaqProps) {
  const [category, setCategory] = useState("");

  const { faqCategory } = useCreateFaqCategory();

  const createFaqCategoryHandler = () => {
    faqCategory.mutate({ category });
    // console.log({
    //   category,
    // });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{buttonProps}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Kategori</DialogTitle>
          <DialogDescription>
            Tambahkan Kategori untuk pertanyaan dan jawaban
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label>Kategori</Label>
            <Input required onChange={(e) => setCategory(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={createFaqCategoryHandler} type="submit">
            {faqCategory.isPending && <Loader2 className="animate-spin" />}
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
