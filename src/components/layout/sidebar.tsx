import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar({ href }: any) {
  const router = useRouter();

  return (
    <nav className="w-96 h-full p-6 fixed left-0 top-16 bg-slate-600 overflow-hidden lg:block">
      <div className="text-3xl font-bold text-yellow-500">
        <h2>Sidebar</h2>
      </div>
      <ul className="list-none space-y-0">
        <li className="w-full p-1 font-medium ">
          <Link className="flex items-center space-x-2" href="/dashboard">
            Link 1
          </Link>
        </li>
        <li className="w-full p-1 font-medium">
          <Link className="flex items-center space-x-2" href="/dashboard">
            Link 2
          </Link>
        </li>
      </ul>
    </nav>
  );
}
