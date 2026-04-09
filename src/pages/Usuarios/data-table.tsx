"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs'
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getUsers } from "@/services/userService"
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
}


export function DataTable<TData, TValue>({
    columns,
}: DataTableProps<TData, TValue>) {
    const [_, setColumnFilters] = useState<ColumnFiltersState>([])
    const [filters, setFilters] = useQueryStates({
        email: parseAsString.withDefault(''),
        page: parseAsInteger.withDefault(1),
    })

    const { error, data } = useQuery({
        queryKey: ['usersData', filters.page, filters.email],
        queryFn: () => getUsers(filters.page),
        placeholderData: keepPreviousData,
    })

    const rowCount = data?.items ?? 0

    const table = useReactTable({
        data: data?.data ?? [],
        columns,
        manualPagination: true,
        rowCount,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {

            columnFilters: filters.email ? [{ id: 'email', value: filters.email }] : [],

        }
    })
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <Input
                placeholder="Buscar email..."
                value={filters.email}
                onChange={(event) => {
                    const value = event.target.value

                    setFilters({
                        email: value,
                        page: 1
                    })
                    table.getColumn("email")?.setFilterValue(value)
                }}
                className="max-w-sm mb-4"
            />
            <div>
                <div className="overflow-hidden rounded-md border-2">

                    <Table>
                        <TableHeader >
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        className="border-b-0 shadow"
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (

                                <TableRow>
                                    <TableCell colSpan={columns.length} className="">
                                        No results.
                                    </TableCell>
                                </TableRow>

                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            table.previousPage()
                            setFilters({ page: filters.page - 1 })
                        }}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Anterior
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            table.nextPage()
                            setFilters({ page: filters.page + 1 })
                        }}
                        disabled={!table.getCanNextPage()}
                    >
                        Próximo
                    </Button>
                </div>
            </div>

        </div>
    )
}
