import WishCard from "./components/WishCard";

export default function Home() {
  return (
    <div className="container px-5">
      <div>
        <h1>Мой Вишлист</h1>
        <p>Привет! Я Наталья и мой день рождения совсем скоро</p>
        <p>Выбери подарок, так никто не подарит одно и тоже дважды</p>
      </div>
      <div className="flex gap-5">
        <div>4 желаний</div>
        <div>0 забронировано</div>
        <div>4 свободно</div>
      </div>
      <div className="flex flex-col items-center">
        <h3>До дня рождения осталось</h3>
        <div className="flex gap-5">
          <div>00 дней</div>
          <div>00 часов</div>
          <div>00 минут</div>
          <div>00 секунд</div>
        </div>
      </div>
      <WishCard />
    </div>
  );
}
