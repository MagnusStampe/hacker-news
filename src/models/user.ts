export interface UserResponse {
    id: string,
    created: number,
    karma: number,
    about: string, // HTML
    submitted: number[]
}

export interface User extends Omit<UserResponse, "created"> {
    createdAt: Date
};
