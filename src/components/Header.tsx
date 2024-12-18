import { LogoIcon } from "@/icons";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-center text-white p-4 m-6 h-16 gap-4">
      <span className="">
        <LogoIcon />
      </span>
      <h1 className="text-4xl font-[900] text-[#5E60CE]">
        <span className="text-[#4EA8DE]">Todo</span> App
      </h1>
    </header>
  );
}
