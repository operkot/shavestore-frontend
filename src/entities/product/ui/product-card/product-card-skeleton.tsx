export function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl p-3 overflow-hidden bg-white animate-pulse">
      <div className="w-full mb-3 aspect-square rounded-lg bg-slate-200" />

      <div className="w-full h-3 mb-1 rounded bg-slate-200" />
      <div className="w-4/5 h-3 mb-4 rounded bg-slate-200" />

      <div className="w-12 h-4 rounded bg-slate-200" />
    </div>
  )
}
