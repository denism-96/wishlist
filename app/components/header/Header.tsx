import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between px-5 py-4">
        <div>
          <span>WISHLIST</span>
        </div>
        <nav className="flex gap-5">
          <Link href={"/"}>Подарки</Link>
          <Link href={"/"}>О сервисе</Link>
        </nav>
        <div className="flex gap-5">
          <button>Поделиться</button>
          <button>Войти</button>
        </div>
      </div>
    </header>
  );
}
