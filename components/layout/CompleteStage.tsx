interface IProps {
  orderNum: number | undefined;
}
function CompleteStage({ orderNum }: IProps) {
  return (
    <div
      className={`flex items-center gap-17.5 border-4 border-(--green) py-12 px-18`}
    >
      <img
        src="/complete.png"
        alt="complete-img"
        width={242}
        height={242}
        loading="lazy"
      />

      <div className="flex flex-col justify-between font-medium ">
        <h2 className="text-[24px]">Ваш заказ №{orderNum} успешно оформлен</h2>
        <p className="text-[16px] ">
          Благодарим за выбор нашей компании. В ближайшее время наши менеджеры
          свяжуться с вами, ответят на любые вопросы и подготовят счет на
          оплату.
        </p>
      </div>
    </div>
  );
}

export default CompleteStage;
