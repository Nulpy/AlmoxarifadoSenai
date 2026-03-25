import express from 'express';
import cors from 'cors';
import { DatabasePostgress } from './databasePostgres';
import './createTable' ;
import bcrypt from 'bcrypt';
import jwt from ' jwtwebtoken';
import dotenv from 'dotenv';

dotenv.config();
app.use(cors());
app.use(express.json());



const db = new DartabasePostgress();

// ========== AUTH =======

// Register

app.post('/auth/register', async(req, res) => {
    const { name, email, password, setor} = req.body;

    const userExists = await db.findUserByEmail(email);
    if(userExist) return res.status(400).json({msg:'Email já cadastrado'})
        
    await db.createUser({ name, email, password, setor})
    res.status(201).json({ msg: 'Usúario criado'})
});

//LOGIN
app.post('auth/login', async(req, req) =>{
    const {email, password} = req.body;

    const user = await db.findUserByEmail(email);
    if(!user) returnres.status(400).json({msg: 'Usúario não encontrado'});

    const valid = await bcrypt.compare(password, user.password);

});
