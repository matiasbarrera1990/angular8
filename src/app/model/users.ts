export class User  {
    title: string
    description: string
    movies: [ DetalleUser]
    
}

export class DetalleUser{
    id: string
    title:string
    releaseYear: string
}