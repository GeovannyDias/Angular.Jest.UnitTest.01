export interface MarvelI {
    _id?: string;
    title: string;
    body: string;
    image: string;
    category: string;
    idAuthor: string;
    createdAt: Date | string;
    updatedAt: Date | string;
}

export interface DataButtonI {
    action: string,
    data: MarvelI,
}

