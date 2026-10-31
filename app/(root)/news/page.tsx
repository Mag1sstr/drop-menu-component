function NewsPage() {
  return (
    <>
      <section className="py-12 bg-zinc-600">
        <div className="container">
          <div className="flex flex-col max-w-100 gap-3">
            <p className="text-[40px]">
              Затрудняетесь с выбором <br /> нужного товара?
            </p>
            <input
              type="text"
              className="bg-white border border-gray-300 outline-none p-4"
              placeholder="Имя"
            />
            <input
              type="text"
              className="bg-white border border-gray-300 outline-none p-4"
              placeholder="Имя"
            />
            <button className="w-full bg-amber-600 font-semibold py-4">
              Подписка
            </button>
            <div>
              Нажимая на кнопку «Получить консультацию» я принимаю{" "}
              <a href="#">условия на обработку персональных данных</a>.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsPage;
