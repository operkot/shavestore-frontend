type QuantifierProps = {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function Quantifier({
  quantity,
  onIncrease,
  onDecrease,
}: QuantifierProps) {
  return (
    <div className="inline-flex items-center px-2.5 rounded-lg bg-sky-50">
      <button
        type="button"
        className="text-xl font-semibold leading-none text-cyan-500 h-[34px] px-1"
        onClick={onDecrease}
      >
        -
      </button>
      <input
        type="number"
        className="w-6 h-6 text-center bg-transparent"
        value={quantity}
        readOnly
      />
      <button
        type="button"
        className="text-xl font-semibold leading-none text-cyan-500 h-[34px] px-1"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  )
}
