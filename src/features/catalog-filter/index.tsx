import { Fragment } from 'react'
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { Dialog, useDialog } from 'shared/ui'
import { FilterForm } from './ui/filter-form'

export function CatalogFilter() {
  const { isOpen, onOpen, onClose } = useDialog()

  return (
    <Fragment>
      <button type="button" onClick={onOpen}>
        <AdjustmentsHorizontalIcon className="w-5 h-5" />
      </button>

      <Dialog isOpen={isOpen} onClose={onClose}>
        <header className="flex items-center justify-between gap-2 mb-4">
          <h2 className="text-xl font-bold">Фильтры</h2>

          <button type="button" onClick={onClose}>
            <XMarkIcon className="w-5 h-5" />
          </button>
        </header>

        <FilterForm />
      </Dialog>
    </Fragment>
  )
}
