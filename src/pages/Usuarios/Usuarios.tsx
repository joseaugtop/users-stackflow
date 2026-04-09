import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/userService';
import { Spinner } from '@/components/ui/spinner';
import { DataTable } from './data-table';
import { columns } from './columns';
import { parseAsInteger, useQueryState } from 'nuqs';
import { OnChangeFn, PaginationState } from '@tanstack/react-table';

export default function Users() {



    return (
        <div>
            <h1 className='flex my-1 mx-5 text-4xl'>Usuários</h1>
            <div className='container mx-auto p-4'>
                <DataTable
                    columns={columns}
                />
            </div>
        </div>

    )
}
