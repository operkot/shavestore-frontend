import { TProductAttribute } from 'entities/product'

type ProductAttributesProps = {
  attributes: TProductAttribute[]
}

export function ProductAttributes({ attributes }: ProductAttributesProps) {
  if (!attributes || !attributes.length) return null

  return (
    <table className="w-full">
      <tbody>
        {attributes.map((attr: TProductAttribute, _i) => (
          <tr key={_i} className="odd:bg-slate-100">
            <td className="px-4 py-1">{attr.name}</td>
            <td className="px-4 py-1 text-end">{attr.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
