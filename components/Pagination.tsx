type PaginationProps = {
  currentPage: number;
  lastPage: number;
  total: number;
  from: number | null;
  to: number | null;
  onPageChange: (page: number) => void;
};

// Contoh hasil: 1 … 4 5 6 … 20
const getPages = (current: number, last: number): (number | "...")[] => {
  const base = [1, last, current - 1, current, current + 1].filter(
    (p) => p >= 1 && p <= last,
  );
  const sorted = [...new Set(base)].sort((a, b) => a - b);

  const pages: (number | "...")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) pages.push("...");
    pages.push(p);
  });
  return pages;
};

const btn =
  "inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm transition disabled:cursor-not-allowed disabled:opacity-40";

export default function Pagination({
  currentPage,
  lastPage,
  total,
  from,
  to,
  onPageChange,
}: PaginationProps) {
  if (total === 0) return null;

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row">
      <p className="text-sm text-slate-500">
        Menampilkan <span className="font-medium text-slate-700">{from}</span>–
        <span className="font-medium text-slate-700">{to}</span> dari{" "}
        <span className="font-medium text-slate-700">{total}</span> data
      </p>

      {lastPage > 1 && (
        <nav className="flex items-center gap-1" aria-label="Pagination">
          <button
            className={`${btn} text-slate-600 hover:bg-slate-100`}
            disabled={currentPage <= 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Sebelumnya
          </button>

          <div className="hidden items-center gap-1 sm:flex">
            {getPages(currentPage, lastPage).map((p, i) =>
              p === "..." ? (
                <span key={`gap-${i}`} className="px-1 text-slate-400">
                  …
                </span>
              ) : (
                <button
                  key={p}
                  aria-current={p === currentPage ? "page" : undefined}
                  className={`${btn} ${
                    p === currentPage
                      ? "bg-[#4C5BD4] font-medium text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                  onClick={() => onPageChange(p)}
                >
                  {p}
                </button>
              ),
            )}
          </div>

          <button
            className={`${btn} text-slate-600 hover:bg-slate-100`}
            disabled={currentPage >= lastPage}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Berikutnya
          </button>
        </nav>
      )}
    </div>
  );
}
