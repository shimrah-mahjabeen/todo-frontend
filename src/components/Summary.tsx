interface SummaryProps {
  total: number;
  completed: number;
}

export default function Summary({ total, completed }: SummaryProps) {
  return (
    <div className="flex flex-row justify-between p-2 font-bold  text-center w-1/2 border-b-2 border-zinc-700 pb-4">
      <p className="text-[#4EA8DE]">
        Tasks{" "}
        <span className="rounded-full bg-zinc-700 text-white px-2">
          {total}
        </span>
      </p>
      <p className="text-[#5E60CE]">
        Completed{" "}
        <span className="rounded-full bg-zinc-700 text-white px-2">
          {total === 0 ? 0 : `${completed} of ${total}`}
        </span>
      </p>
    </div>
  );
}
