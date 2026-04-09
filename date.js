import { compareAsc, format, formatDistance, formatRelative, setDefaultOptions, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
setDefaultOptions({ locale: ptBR })
console.log(format(new Date(), "PPPP"))
const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
];
console.log('compare asc:', dates.sort(compareAsc));
console.log('sort:', dates.sort())