import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
interface UserContainerSkeletonProps {
    cards: number
}
export default function UserContainerSkeleton({ cards }: UserContainerSkeletonProps) {
    return Array(cards)
        .fill(0)
        .map((_, i) => {
            return <div key={i} className=" p-4 rounded-xl border-4 border-gray-100 space-y-2" >
                <div className="flex gap-2">
                    <Skeleton width={300} height={25} />
                </div>

                <div className="flex gap-2">
                    <Skeleton width={260} height={25} />
                </div>

                <div className="flex gap-2">
                    <Skeleton width={400} height={25} />
                </div>
            </div>
        })
}
