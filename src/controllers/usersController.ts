import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';
import { Iuser } from '../modules/user'

export const getUsers = async (req: Request, res:Response): Promise<Response> => {
    try {
        const results: QueryResult<Iuser[]> = await pool.query('SELECT * FROM users');
        return res.status(200).json(results.rows);
    } catch(e) {
        console.log(e)
        return res.status(500).json('Internal server Error');
    }
}

export const getUserById = async (req: Request, res:Response): Promise<Response> => {
    try {
        const ID: Number = parseInt(req.params.id)
        const results: QueryResult<Iuser> = await pool.query('SELECT * FROM users WHERE id = $1', [ID]);
        return res.status(200).json(results.rows);
    } catch(e) {
        console.log(e)
        return res.status(500).json('Internal server Error');
    }
}

export const createUser = async (req: Request, res:Response): Promise<Response> => {
    const { name, email } = req.body
    if (name == "" || email == "") {
        return res.status(400).json('Invalid data');
    }
    const user: Iuser = {
        name,
        email
    }

    try {
        const results: QueryResult = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [user.name, user.email]);
        return res.status(201).json({
            message: 'User created',
            user
        });
    } catch(e) {
        console.log(e)
        return res.status(500).json('Internal server Error');
    }
}

export const updateUser = async (req: Request, res:Response): Promise<Response> => {
    try {
        const ID: Number = parseInt(req.params.id)
        const { name, email } = req.body
        const user: Iuser = {
            name,
            email
        }
        if (user.name == "" || user.email == "") {
            return res.status(400).json('Invalid data');
        }
        const results: QueryResult = await pool.query('UPDATE users set name = $1, email = $2 WHERE id = $3', [user.name, user.email, ID]);
        return res.status(200).json({
            message: `user deleted ${ID}`,
            user
        });
    } catch(e) {
        console.log(e)
        return res.status(500).json('Internal server Error');
    }
}

export const deleteUser = async (req: Request, res:Response): Promise<Response> => {
    try {
        const ID: Number = parseInt(req.params.id)
        const results: QueryResult = await pool.query('DELETE FROM users WHERE id = $1', [ID]);
        return res.status(200).json(`user deleted ${ID}`);
    } catch(e) {
        console.log(e)
        return res.status(500).json('Internal server Error');
    }
}
