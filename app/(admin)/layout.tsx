function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col h-screen">
      <header className="px-20 py-4 bg-zinc-800 text-white text-2xl">
        Админ-панель
      </header>
      <div className="flex-1 bg-white">{children}</div>
    </main>
  );
}

export default AdminLayout;
