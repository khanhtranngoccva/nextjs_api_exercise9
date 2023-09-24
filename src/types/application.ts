export interface PostPreview {
    id: string,
    image?: string,
    likes: number,
    tags: string[],
    text: string,
    publishDate: string,
    owner: UserPreview,
}

export interface Post {
    id: string,
    image?: string,
    likes: number,
    link?: string,
    tags: string[],
    text: string,
    publishDate: string,
    owner: UserPreview,
}

export interface UserPreview {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    picture?: string,
}

export interface User {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    picture?: string,
    gender: string,
    email: string,
    dateOfBirth: string,
    phone: string,
    location: Location,
    registerDate: string,
    updatedDate: string,
}

export interface Location {
    street: string,
    city: string,
    state: string,
    country: string,
    timezone: string,
}

export interface CommentPreview {
    id: string,
    message: string,
    owner: UserPreview,
    post: string,
    publishDate: string,
}