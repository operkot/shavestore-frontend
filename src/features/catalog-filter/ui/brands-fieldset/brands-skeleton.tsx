export function BrandsSkeleton() {
  return (
    <div className="flex flex-col gap-3 animate-pulse">
      {[...new Array(6)].map((_, i) => (
        <div className="flex items-center gap-2" key={i}>
          <div className="w-6 h-6 rounded-full bg-slate-200" />
          <div className="w-56 h-6 rounded-xl bg-slate-200" />
        </div>
      ))}
    </div>
  )
}
