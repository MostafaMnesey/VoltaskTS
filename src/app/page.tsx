import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className={`min-h-screen bg-side flex flex-col justify-center items-center `}
      >
        <div className="space-x-4">
          <Link href="/signin">
            <button className="bg-subColor hover:bg-hoverSubColor text-white font-bold py-2 px-4 rounded-lg transition-all">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-subColor hover:bg-hoverSubColor text-white font-bold py-2 px-4 rounded-lg transition-all">
              signup
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
