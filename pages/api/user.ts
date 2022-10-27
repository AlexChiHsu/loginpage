import { createRandomKey, createPasswordHash } from "./createRandomKey";

export async function saveSignUpData(userName: string, email: any, password: string) {
    const saltKey = await createRandomKey(8);
    const PasswordSalt = await createPasswordHash(password, saltKey);
    const data = { userName, email, password, PasswordSalt };
    const response = await fetch('/api/signUpAPI', {
        method: 'POST',
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}

export async function login(email: any, password: string) {
    const data = { email, password };
    const response = await fetch('/api/loginAPI', {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}

export async function user(id: number) {
    const response = await fetch(`/api/${id}`, {
        method: 'GET',
    });

    return response.json();
}