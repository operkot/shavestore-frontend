import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '@uidotdev/usehooks'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { PRODUCTS_SEARCH_PARAM } from 'features/catalog-search/lib'

export function SearchForm() {
  const [query, setQuery] = useState('')
  const [_, setSearchParams] = useSearchParams()
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    setSearchParams(prev => {
      !!query
        ? prev.set(PRODUCTS_SEARCH_PARAM, query)
        : prev.delete(PRODUCTS_SEARCH_PARAM)
      return prev
    })
  }, [debouncedQuery])

  return (
    <form className="flex grow items-center gap-2 p-2 rounded-md bg-white">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />

      <input
        type="text"
        placeholder="Поиск"
        className="grow bg-transparent leading-none outline-none placeholder-gray-400 focus:placeholder-opacity-0"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {!!query && (
        <button type="button" onClick={() => setQuery('')}>
          <XMarkIcon className="w-5 h-5 text-gray-400" />
        </button>
      )}
    </form>
  )
}
