import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/userService';
import { Spinner } from '@/components/ui/spinner';
import { DataTable } from './data-table';
import { columns } from './columns';
import { useState } from 'react';
import { PaginationState } from '@tanstack/react-table';

export default function Users() {

    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })
    const { isPending, error, data } = useQuery({
        queryKey: ['usersData', pagination.pageIndex],
        queryFn: () => getUsers(pagination.pageIndex),
    })


    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            {isPending ? (
                <div><Spinner /></div>
            ) : (
                <div>
                    <h1 className='flex my-1 mx-5 text-4xl'>Usuários</h1>
                    <div className='container mx-auto p-4'>
                        <DataTable
                            columns={columns}
                            data={data.data}
                            rowCount={data.items}
                            pagination={pagination}
                            onPaginationChange={setPagination}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
