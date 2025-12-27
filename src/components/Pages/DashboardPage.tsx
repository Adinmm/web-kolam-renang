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
  Eye,
  User,
  UserCheck,
  HelpCircle,
  Plus,
  Pencil,
} from "lucide-react";
import { useUpdateContactInformation, useUpdateUser } from "@/hooks/usePatch";
import {
  useGetClasses,
  useGetCoach,
  useGetContactInformation,
  useGetFaqCategories,
  useGetImage,
  useGetUser,
} from "@/hooks/useGet";
import { CoachModel, FaqQuestionModel, ImageModel } from "@/schemas/app.schema";
import {
  useCreateClass,
  useCreateCoach,
  useCreateFaqQuestion,
  useUploadImage,
  useUploadImageUrl,
} from "@/hooks/usePost";
import {
  useDeleteClass,
  useDeleteCoach,
  useDeleteFaq,
  useDeleteFaqCategory,
  useDeleteImage,
} from "@/hooks/useDelete";
import { Alert } from "../others/Alert";
import { formatRupiah } from "@/lib/formatRupiah";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormFaq } from "../others/FormFaq";

export default function DashboardPage() {
  const [idContact, setIdContact] = useState("");
  const [image, setImage] = useState<File>(new File([], ""));
  const [idFaqCategory, setIdFaqCategory] = useState("");

  const idUser = sessionStorage.getItem("id");

  const { form, mutation } = useUpdateContactInformation();

  const { query } = useGetContactInformation();

  // class query
  const { classes } = useGetClasses();
  const { classForm, classMutation } = useCreateClass();
  const { deleteMutation } = useDeleteClass();

  // user query
  const { user } = useGetUser(idUser || "");
  const { form: formUser, mutation: mutationUser } = useUpdateUser(
    idUser || ""
  );

  // gallery query
  const { uploadMutation } = useUploadImage();
  const { imageForm, imageMutation } = useUploadImageUrl();
  const { getImage } = useGetImage();
  const { deleteImageMutation } = useDeleteImage();

  // pelatih query
  const { coachForm, coachMutation } = useCreateCoach();
  const { getCoach } = useGetCoach();
  const { deleteCoachMutation } = useDeleteCoach();

  // faq query

  const { faqForm, faqMutation } = useCreateFaqQuestion();
  const { getFaqCategories } = useGetFaqCategories();
  const { deleteFaqMutation } = useDeleteFaq();
  const { deleteFaqCategoryMutation } = useDeleteFaqCategory();

  const question = getFaqCategories?.data?.data;

  const createFaqHandler = (data: any) => {
    const dataSending = {
      question: data?.question,
      answer: data?.answer,
      categoryId: idFaqCategory,
    };
    faqMutation.mutate(dataSending);
  };

  const deleteFaqHandler = (id: string) => {
    deleteFaqMutation.mutate(id);
  };
  const deleteFaqCategoryHandler = (id: string) => {
    deleteFaqCategoryMutation.mutate(id);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };
  const createCoachHandler = async (data: CoachModel) => {
    const uploadCoachImage = await uploadMutation.mutateAsync(image);
    const dataSending = {
      ...data,
      url: uploadCoachImage?.data?.image_url,
      image_public_id: uploadCoachImage?.data?.public_id,
    };
    await coachMutation.mutateAsync(dataSending);
  };

  const deleteImageHandler = (id: string) => {
    deleteImageMutation.mutate(id);
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

  const deleteCoachHandler = (id: string) => {
    deleteCoachMutation.mutate(id);
  };

  useEffect(() => {
    update(query.data?.data);
    updateUser(user?.data?.data);
  }, [query.data, user.data]);

  const faqs = [
    {
      category: "Pendaftaran",
      questions: [
        {
          q: "Bagaimana cara mendaftar di AquaSwim Club?",
          a: "Anda dapat mendaftar melalui form online di website kami atau datang langsung ke lokasi kolam renang. Setelah mengisi form, tim kami akan menghubungi Anda untuk konfirmasi jadwal dan pembayaran.",
        },
        {
          q: "Apakah ada syarat usia untuk mendaftar?",
          a: "Kami menerima siswa dari usia 4 tahun ke atas. Untuk anak di bawah 6 tahun, wajib didampingi orang tua saat sesi latihan pertama.",
        },
        {
          q: "Dokumen apa saja yang diperlukan untuk pendaftaran?",
          a: "Anda perlu menyiapkan fotokopi KTP/kartu identitas, pas foto 3x4 (2 lembar), dan surat keterangan sehat dari dokter (opsional tapi disarankan).",
        },
      ],
    },
    {
      category: "Jadwal & Kelas",
      questions: [
        {
          q: "Berapa lama durasi setiap sesi latihan?",
          a: "Setiap sesi latihan berlangsung 60 menit untuk kelas reguler dan 90 menit untuk kelas prestasi. Kami menyarankan datang 15 menit lebih awal untuk persiapan.",
        },
        {
          q: "Apakah jadwal kelas bisa diganti jika berhalangan?",
          a: "Ya, Anda dapat mengajukan perubahan jadwal maksimal 1 hari sebelumnya melalui WhatsApp admin. Penggantian jadwal dapat dilakukan maksimal 2 kali per bulan.",
        },
        {
          q: "Berapa jumlah siswa dalam satu kelas?",
          a: "Kelas pemula dan anak maksimal 6 siswa per pelatih. Kelas dewasa maksimal 8 siswa, dan kelas prestasi maksimal 4 siswa untuk memastikan perhatian optimal.",
        },
      ],
    },
    {
      category: "Biaya & Pembayaran",
      questions: [
        {
          q: "Apa saja metode pembayaran yang tersedia?",
          a: "Kami menerima pembayaran via transfer bank (BCA, Mandiri, BNI), e-wallet (GoPay, OVO, DANA), dan tunai di lokasi. Pembayaran bulanan dilakukan di awal bulan.",
        },
        {
          q: "Apakah ada biaya pendaftaran?",
          a: "Ya, biaya pendaftaran sekali bayar sebesar Rp 150.000 yang mencakup kartu member, assessment awal, dan perlengkapan dasar (topi renang).",
        },
        {
          q: "Apakah ada diskon untuk pendaftaran keluarga?",
          a: "Ada! Diskon 10% untuk anggota keluarga kedua dan 15% untuk anggota ketiga dan seterusnya. Kami juga memiliki paket keluarga khusus.",
        },
      ],
    },
    {
      category: "Fasilitas & Keamanan",
      questions: [
        {
          q: "Fasilitas apa saja yang tersedia?",
          a: "Kami memiliki kolam renang standar olimpiade, ruang ganti dengan loker, kamar mandi air hangat, area tunggu ber-AC untuk orang tua, dan kantin.",
        },
        {
          q: "Bagaimana standar keamanan di kolam renang?",
          a: "Keamanan adalah prioritas kami. Setiap sesi ada minimal 2 lifeguard bertugas, CCTV 24 jam, peralatan P3K lengkap, dan semua pelatih tersertifikasi CPR.",
        },
        {
          q: "Apakah orang tua boleh menunggu di area kolam?",
          a: "Ya, kami menyediakan area tunggu dengan pandangan langsung ke kolam renang. Orang tua juga dapat memantau perkembangan anak melalui laporan bulanan.",
        },
      ],
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
          <TabsList className="grid grid-cols-6 w-full mb-6 bg-white border shadow-sm">
            <TabsTrigger
              value="user"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Users className="w-4 h-4 mr-2" />
              <span className={`hidden lg:inline`}>User</span>
            </TabsTrigger>
            <TabsTrigger
              value="kelas"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              <span className={`hidden lg:inline`}>Kelas</span>
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className={`hidden lg:inline`}>Kontak</span>
            </TabsTrigger>
            <TabsTrigger
              value="galery"
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              <Images className="w-4 h-4 mr-2" />
              <span className={`hidden lg:inline`}>Galeri</span>
            </TabsTrigger>
            <TabsTrigger
              value="coach"
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              <UserCheck className="w-4 h-4 mr-2" />
              <span className={`hidden lg:inline`}>Pelatih</span>
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              <span className={`hidden lg:inline`}>FAQ</span>
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
                {/* ================= List Galeri ================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getImage?.data?.data?.map((item, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                    >
                      {/* Image */}
                      <div className="relative">
                        <img
                          src={item?.url}
                          alt={item?.category}
                          className="w-full h-48 object-cover"
                        />

                        {/* Action Buttons */}
                        <div className="absolute top-3 right-3 flex gap-2">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8 bg-white/90 backdrop-blur hover:bg-white"
                            onClick={() =>
                              window.open(
                                item?.url,
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                          >
                            <Eye className="w-4 h-4 text-gray-700" />
                          </Button>

                          <Alert
                            buttonProps={
                              <Button
                                size="icon"
                                variant="destructive"
                                className="h-8 w-8"
                              >
                                <Trash2 className="w-4 h-4 text-white" />
                              </Button>
                            }
                            ondelete={() => deleteImageHandler(item?.id || "")}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-4 space-y-2">
                        <Badge variant="secondary" className="w-fit">
                          {item?.category}
                        </Badge>

                        <p className="text-sm text-gray-600 line-clamp-2">
                          {item?.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ================= Coach TAB ================= */}
          <TabsContent value="coach">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Manajemen Pelatih
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                {/* ================= Form Coach ================= */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-4 text-gray-700">
                    Tambah Pelatih
                  </h3>

                  <form onSubmit={coachForm.handleSubmit(createCoachHandler)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Nama */}
                      <div>
                        <Label>Nama Pelatih</Label>
                        <Input
                          required
                          {...coachForm.register("name")}
                          placeholder="Contoh: Coach Ahmad"
                          className="mt-1"
                        />
                      </div>

                      {/* Upload Foto */}
                      <div>
                        <Label>Foto Pelatih</Label>
                        <Input
                          required
                          onChange={handleImageChange}
                          type="file"
                          accept="image/*"
                          className="mt-1"
                        />
                      </div>

                      {/* Experience */}
                      <div>
                        <Label>Pengalaman</Label>
                        <Input
                          required
                          {...coachForm.register("experience")}
                          placeholder="Contoh: 10 tahun"
                          className="mt-1"
                        />
                      </div>

                      {/* Specialization */}
                      <div>
                        <Label>Spesialisasi</Label>
                        <Input
                          required
                          {...coachForm.register("specialization")}
                          placeholder="Contoh: Gaya Bebas & Dada"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {coachMutation.isPending ||
                          (uploadMutation.isPending && (
                            <Loader2 className="animate-spin" />
                          ))}
                        Simpan Pelatih
                      </Button>
                    </div>
                  </form>
                </div>

                {/* ================= List Coach ================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getCoach?.data?.data?.map((coach, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                    >
                      {/* Image */}
                      <div className="relative">
                        <img
                          src={coach?.url}
                          alt={coach?.name}
                          className="w-full h-56 object-cover"
                        />

                        {/* Action */}
                        <div className="absolute top-3 right-3 flex gap-2">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8 bg-white/90 backdrop-blur hover:bg-white"
                            onClick={() =>
                              window.open(
                                coach?.url,
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                          >
                            <Eye className="w-4 h-4 text-gray-700" />
                          </Button>

                          <Alert
                            buttonProps={
                              <Button
                                size="icon"
                                variant="destructive"
                                className="h-8 w-8"
                              >
                                <Trash2 className="w-4 h-4 text-white" />
                              </Button>
                            }
                            ondelete={() => deleteCoachHandler(coach?.id || "")}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-4 space-y-2">
                        <h4 className="font-semibold">{coach?.name}</h4>

                        <Badge variant="secondary" className="w-fit">
                          {coach?.specialization}
                        </Badge>

                        <p className="text-sm text-gray-600">
                          Pengalaman: {coach?.experience}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ================= FAQ TAB ================= */}
          <TabsContent value="faq">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Manajemen FAQ
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                {/* ================= Form FAQ ================= */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between w-full mb-4">
                    <h3 className="font-semibold  text-gray-700">
                      Tambah / Edit FAQ
                    </h3>
                    <FormFaq buttonProps={<Button>Tambah Category</Button>} />
                  </div>

                  <form onSubmit={faqForm.handleSubmit(createFaqHandler)}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Category */}
                      <div>
                        <Label>Kategori</Label>
                        <Select required onValueChange={setIdFaqCategory}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Pilih kategori" />
                          </SelectTrigger>
                          <SelectContent>
                            {getFaqCategories?.data?.data?.map(
                              (cat: any, index) => (
                                <SelectItem key={index} value={cat?.id}>
                                  {cat?.category}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Question */}
                      <div className="md:col-span-2">
                        <Label>Pertanyaan</Label>
                        <Input
                          {...faqForm.register("question")}
                          required
                          placeholder="Contoh: Bagaimana cara mendaftar?"
                          className="mt-1"
                        />
                      </div>

                      {/* Answer */}
                      <div className="md:col-span-3">
                        <Label>Jawaban</Label>
                        <Textarea
                          {...faqForm.register("answer")}
                          required
                          placeholder="Masukkan jawaban lengkap"
                          className="mt-1 min-h-[120px]"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {faqMutation.isPending && (
                          <Loader2 className="animate-spin " />
                        )}
                        Simpan FAQ
                      </Button>
                    </div>
                  </form>
                </div>

                {/* ================= List FAQ (Grouped by Category) ================= */}

                <div className="space-y-6">
                  {question?.map((group, index) => (
                    <div key={index} className="space-y-3">
                      {/* Category Title */}
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-100 text-blue-700">
                          {group.category}
                        </Badge>
                        <Alert
                          buttonProps={
                            <button className="cursor-pointer">
                              <Trash2 className="text-red-600" size={15} />
                            </button>
                          }
                          ondelete={() => deleteFaqCategoryHandler(group?.id)}
                        />
                      </div>

                      {/* Questions */}
                      {group?.questions?.map((item: any, i: number) => (
                        <Card
                          key={i}
                          className="hover:shadow-md transition-shadow"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                  <HelpCircle className="w-6 h-6 text-blue-600" />
                                </div>

                                <div className="space-y-1">
                                  <p className="font-semibold text-gray-800">
                                    {item.question}
                                  </p>
                                  <p className="text-sm text-gray-600 max-w-2xl">
                                    {item.answer}
                                  </p>
                                </div>
                              </div>

                              {/* Action */}
                              <div className="flex gap-2">
                                <Alert
                                  buttonProps={
                                    <Button
                                      className="text-white"
                                      size="icon"
                                      variant="destructive"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  }
                                  ondelete={() => deleteFaqHandler(item?.id)}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
