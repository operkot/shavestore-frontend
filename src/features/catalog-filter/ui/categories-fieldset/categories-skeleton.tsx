export function CategoriesSkeleton() {
  return (
    <div className="flex flex-wrap gap-2 animate-pulse">
      <div className="grow w-36 h-10 rounded-xl bg-slate-200" />
      <div className="grow w-44 h-10 rounded-xl bg-slate-200" />

      <div className="grow w-48 h-10 rounded-xl bg-slate-200" />
      <div className="grow w-24 h-10 rounded-xl bg-slate-200" />

      <div className="grow w-full h-10 rounded-xl bg-slate-200" />
      <div className="grow w-full h-10 rounded-xl bg-slate-200" />
    </div>
  )
}
