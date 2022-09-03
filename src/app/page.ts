import { City } from "./city"

export interface Page {
    content: City[ ],
    pageable: {
        sort: {
            empty: boolean,
            unsorted: boolean,
            sorted: boolean
        },
        offset: number,
        pageNumber: number,
        pageSize: number,
        paged: boolean,
        unpaged: boolean
    },
    last: boolean,
    totalElements: number,
    totalPages: number,
    size: number,
    number: number,
    sort: {
        empty: boolean,
        unsorted: boolean,
        sorted: boolean
    },
    first: boolean,
    numberOfElements: number,
    empty: boolean
}
