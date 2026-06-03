"use client";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import useMutation from "@/hooks/useMutation";
import { FormEvent, useState } from "react";

function AdminPage() {
  const [form, setForm] = useState({
    name: "",
    image: "https://placeimg.com/640/480/any",
  });
  const [createCategory, { data }] = useMutation<
    { name: string; image: string },
    { name: string; image: string }
  >({
    url: "https://api.escuelajs.co/api/v1/categories/",
    method: "POST",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    createCategory(form);
  };

  console.log(data);

  return (
    <section className="py-10">
      <div className="container">
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <InputField
            label="Название"
            value={form.name}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, name: value as string }))
            }
          />

          <Button className="text-black!">Создать категорию</Button>
        </form>
      </div>
    </section>
  );
}

export default AdminPage;
