import Image from "next/image";
export default function WishCard() {
  return (
    <article>
      <div>
        <Image
          width={315}
          height={192}
          src="/image/test_image.jpg"
          alt="Изображение карточки подарка"
        />
      </div>
      <div>
        <span>книги</span>
        <h3>Стопка любимых книг</h3>
        <p>Мастер и Маргарита, Маленький принц,Алхимик - в красивом издании.</p>
        <div>
          <span>1500 Р</span>
          <a href="#">Перейти в магазин</a>
        </div>
      </div>
    </article>
  );
}
