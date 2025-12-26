"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Trash2,
  Users,
  BookOpen,
  Phone,
  Loader2,
  Images,
  ImageIcon,
} from "lucide-react";
import { useUpdateContactInformation, useUpdateUser } from "@/hooks/usePatch";
import {
  useGetClasses,
  useGetContactInformation,
  useGetUser,
} from "@/hooks/useGet";
import {
  ClassModel,
  ContactInformationModel,
  ImageModel,
} from "@/schemas/app.schema";
import {
  useCreateClass,
  useUploadImage,
  useUploadImageUrl,
} from "@/hooks/usePost";
import { useDeleteClass } from "@/hooks/useDelete";
import { Alert } from "../others/Alert";
import { formatRupiah } from "@/lib/formatRupiah";

export default function DashboardPage() {
  const [idContact, setIdContact] = useState("");
  const [image, setImage] = useState<File>(new File([], ""));

  const idUser = "6c65e7fb-2e4f-4270-a31f-255c8f6cac33";

  const { form, mutation } = useUpdateContactInformation();

  const { query } = useGetContactInformation();

  // class query
  const { classes } = useGetClasses();
  const { classForm, classMutation } = useCreateClass();
  const { deleteMutation } = useDeleteClass();

  // user query
  const { user } = useGetUser(idUser);
  const { form: formUser, mutation: mutationUser } = useUpdateUser(idUser);

  // gallery query
  const { uploadMutation } = useUploadImage();
  const { imageForm, imageMutation } = useUploadImageUrl();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const uploadImageHandler = async (data: ImageModel) => {
    const upload = await uploadMutation.mutateAsync(image);
    const dataSending = {
      url: upload?.data?.image_url,
      image_public_id: upload?.data?.public_id,
      category: data?.category,
      description: data?.description,
    };
    await imageMutation.mutateAsync(dataSending);
  };

  const inputArray = (data: string) => {
    const result = data.split(",").map((item) => item.trim());
    return result;
  };

  const update = (data: any) => {
    form.reset({
      address: data?.address,
      email: data?.email,
      phone: data?.phone,
      operational_time: data?.operational_time,
    });
  };

  const updateHandler = (data: any) => {
    const dataSending = {
      id: idContact,
      address: data?.address,
      email: data?.email,
      phone: data?.phone,
      operational_time: inputArray(data?.operational_time),
    };
    mutation.mutate(dataSending);
  };

  const updateUser = (data: any) => {
    formUser.reset({
      username: data?.username,
      role: data?.role,
    });
  };

  const updateUserHandler = (data: any) => {
    mutationUser.mutate(data);
  };
  const createClassHandler = (data: any) => {
    const dataSending = {
      class_name: data?.class_name,
      description: data?.description,
      schedule: data?.schedule,
      price: data?.price,
      class_items: inputArray(data?.class_items),
    };
    classMutation.mutate(dataSending);
  };

  const deleteClassHandler = (id: string) => {
    deleteMutation.mutate(id);
  };

  useEffect(() => {
    update(query.data?.data);
    updateUser(user?.data?.data);
  }, [query.data, user.data]);

  const galeryDummy = [
    {
      id: "1",
      image_url: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
      category: "Latihan",
      description:
        "Sesi latihan rutin untuk meningkatkan teknik dan stamina renang.",
      created_at: "2025-01-10",
    },
    {
      id: "2",
      image_url: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
      category: "Event",
      description:
        "Kejuaraan renang tingkat regional dengan atlet-atlet terbaik.",
      created_at: "2025-01-15",
    },
    {
      id: "3",
      image_url: "https://images.unsplash.com/photo-1509223197845-458d87318791",
      category: "Prestasi",
      description: "Atlet berhasil meraih medali emas pada ajang nasional.",
      created_at: "2025-01-20",
    },
    {
      id: "4",
      image_url: "https://images.unsplash.com/photo-1546484959-fd96d8e52c06",
      category: "Latihan",
      description: "Latihan teknik start dan turn untuk perenang pemula.",
      created_at: "2025-01-25",
    },
    {
      id: "5",
      image_url: "https://images.unsplash.com/photo-1526676034484-07f3e94b8f8c",
      category: "Event",
      description: "Fun swimming dan gathering bersama orang tua atlet.",
      created_at: "2025-02-01",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h1 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard Admin
          </h1>
          <p className="text-gray-600 mt-2">
            Kelola user, kelas, dan informasi kontak dengan mudah
          </p>
        </div>
        {/* Main Tabs */}
        <Tabs defaultValue="user" className="w-full">
          <TabsList className="grid grid-cols-4 w-full mb-6 bg-white border shadow-sm">
            <TabsTrigger
              value="user"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Users className="w-4 h-4 mr-2" />
              User
            </TabsTrigger>
            <TabsTrigger
              value="kelas"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Kelas
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Kontak
            </TabsTrigger>
            <TabsTrigger
              value="galery"
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              <Images className="w-4 h-4 mr-2" />
              Galeri
            </TabsTrigger>
          </TabsList>

          {/* ================= USER TAB ================= */}
          <TabsContent value="user">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Manajemen User
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Form */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-4 text-gray-700">
                    Edit User
                  </h3>
                  <form onSubmit={formUser.handleSubmit(updateUserHandler)}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label className="text-gray-700">Username</Label>
                        <Input
                          placeholder="username"
                          {...formUser.register("username")}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700">Password</Label>
                        <Input
                          type="password"
                          placeholder="password"
                          {...formUser.register("password")}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700">Role</Label>
                        <Input
                          {...formUser.register("role")}
                          disabled
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {mutationUser.isPending && (
                          <Loader2 className="animate-spin" />
                        )}
                        Update User
                      </Button>
                    </div>
                  </form>
                </div>

                {/* User List */}
                <div className="space-y-3">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {user?.data?.data?.username}
                            </p>
                            <Badge
                              variant={
                                user?.data?.data?.role === "ADMIN"
                                  ? "default"
                                  : "secondary"
                              }
                              className="mt-1"
                            >
                              {user?.data?.data?.role}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ================= KELAS TAB ================= */}
          <TabsContent value="kelas">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-linear-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Manajemen Kelas
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Form */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-4 text-gray-700">
                    Edit User
                  </h3>
                  <form onSubmit={classForm.handleSubmit(createClassHandler)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-gray-700">Nama Kelas</Label>
                        <Input
                          placeholder="Nama kelas"
                          {...classForm.register("class_name")}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700">Harga (Rp)</Label>
                        <Input
                          placeholder="500000"
                          {...classForm.register("price")}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700">Jadwal</Label>
                        <Input
                          placeholder="Senin & Rabu, 19:00 - 21:00"
                          {...classForm.register("schedule")}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700">
                          Item Kelas (pisahkan dengan koma)
                        </Label>
                        <Input
                          placeholder="JSX, Hooks, State"
                          {...classForm.register("class_items")}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label className="text-gray-700">Deskripsi</Label>
                        <Textarea
                          {...classForm.register("description")}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        {classMutation.isPending && (
                          <Loader2 className="animate-spin" />
                        )}
                        Tambah Kelas
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Kelas Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {classes?.data?.data?.map((k, i) => (
                    <Card
                      key={i}
                      className="hover:shadow-lg transition-shadow border-2"
                    >
                      <CardHeader className="bg-linear-to-r from-purple-50 to-blue-50 rounded-t-xl">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">
                              {k.class_name}
                            </CardTitle>
                            <p className="text-sm text-gray-600 mt-1">
                              {k.schedule}
                            </p>
                          </div>
                          <Badge className="bg-purple-600">
                            {formatRupiah(k.price)}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-3 w-full whitespace-normal">
                          {k.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {k.class_items?.map((item, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Alert
                            ondelete={() => deleteClassHandler(k.id || "")}
                            buttonProps={
                              <Button size="sm" className="flex-1 ">
                                {deleteMutation.isPending ? (
                                  <Loader2 className="animate-spin" />
                                ) : (
                                  <Trash2 className="w-4 h-4 mr-2" />
                                )}
                                Hapus
                              </Button>
                            }
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ================= CONTACT TAB ================= */}
          <TabsContent value="contact">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-linear-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Informasi Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <form onSubmit={form.handleSubmit(updateHandler)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-700">Alamat</Label>
                      <Textarea
                        {...form.register("address")}
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-gray-700">Telepon</Label>
                        <Input {...form.register("phone")} className="mt-1" />
                      </div>
                      <div>
                        <Label className="text-gray-700">Email</Label>
                        <Input {...form.register("email")} className="mt-1" />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-gray-700">
                        Jam Operasional (pisahkan dengan koma)
                      </Label>
                      <Input
                        {...form.register("operational_time")}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={() => setIdContact(query.data?.data?.id || "")}
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 mt-3"
                  >
                    {mutation.isPending && <Loader2 className="animate-spin" />}
                    Simpan Perubahan
                  </Button>
                </form>

                {/* Preview Card */}
                <Card className="mt-6 bg-linear-to-br from-green-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Preview Informasi Kontak
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-600">
                        Alamat:
                      </p>
                      <p className="text-gray-800">
                        {query.data?.data.address}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">
                        Telepon:
                      </p>
                      <p className="text-gray-800">{query.data?.data.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">
                        Email:
                      </p>
                      <p className="text-gray-800">{query.data?.data.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">
                        Jam Operasional:
                      </p>
                      {query.data?.data?.operational_time?.map((time, idx) => (
                        <p key={idx} className="text-gray-800">
                          • {time}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ================= Galeri TAB ================= */}
          <TabsContent value="galery">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Manajemen Galeri
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                {/* Form Upload Galeri */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-4 text-gray-700">
                    Upload Galeri
                  </h3>
                  <form onSubmit={imageForm.handleSubmit(uploadImageHandler)}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Upload File */}
                      <div>
                        <Label className="text-gray-700">Gambar</Label>
                        <Input
                          onChange={handleImageChange}
                          type="file"
                          accept="image/*"
                          className="mt-1"
                        />
                      </div>

                      {/* Category */}
                      <div>
                        <Label className="text-gray-700">Kategori</Label>
                        <Input
                          {...imageForm.register("category")}
                          required
                          placeholder="Contoh: Latihan, Event, Prestasi"
                          className="mt-1"
                        />
                      </div>

                      {/* Description */}
                      <div className="md:col-span-3">
                        <Label className="text-gray-700">Deskripsi</Label>
                        <Textarea
                          {...imageForm.register("description")}
                          required
                          placeholder="Deskripsi singkat galeri..."
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {(imageMutation.isPending ||
                          uploadMutation.isPending) && (
                          <Loader2 className="animate-spin" />
                        )}
                        Simpan Galeri
                      </Button>
                    </div>
                  </form>
                </div>

                {/* List Galeri (contoh item) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {galeryDummy?.map((item: any, index: number) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-3">
                        <img
                          src={item.image_url}
                          alt={item.category}
                          className="w-full h-40 object-cover rounded-md mb-2"
                        />
                        <p className="font-semibold text-gray-800">
                          {item.category}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Delete Confirmation Dialog */}
    </div>
  );
}
