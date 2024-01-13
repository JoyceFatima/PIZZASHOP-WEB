import { ChevronsLeft, ChevronsRight } from 'lucide-react'

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <PaginationRoot className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} items(s)
      </span>

      <PaginationContent>
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="text-sm font-medium">
            Página {pageIndex + 1} de {pages}
          </div>
          <div className="flex items-center gap-2">
            <PaginationLink className="h-8 w-8 p-0">
              <ChevronsLeft className="h-4 w-4" />
              <span className="sr-only">Primeira página</span>
            </PaginationLink>
            <PaginationPrevious className="h-8 w-8 p-0" />
            <PaginationNext className="h-8 w-8 p-0" />
            <PaginationLink className="h-8 w-8 p-0">
              <ChevronsRight className="h-4 w-4" />
              <span className="sr-only">Última página</span>
            </PaginationLink>
          </div>
        </div>
      </PaginationContent>
    </PaginationRoot>
  )
}
