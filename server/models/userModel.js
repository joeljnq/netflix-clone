import connection from "../config/db.js";
import bcrypt from 'bcrypt'
class User {
    static async findAll() {
        try{

            const [rows] = await connection.query('SELECT * FROM user');
        }catch (error){
            console.log('Error fetching users: ', error);
            return null
            
        }
        return rows;
    }

    static async createUser({email,password}){

        try{
            const hashedPassword = await bcrypt.hash(password,10)
            const [result] = await connection.query('INSERT INTO user (email, password) values (?, ?)',[email,hashedPassword])
            
            return {id: result.insertId}
        }catch (error){
            console.log('Error creating user: ', error);
            return null;
        }
    }

    static async findUser({email, password}){
        try{
            const [rows] = await connection.query('SELECT * FROM user WHERE email = ?',[email])
            if(!rows.length) return null
           
            const user = rows[0]
            const isMatch = await bcrypt.compare(password,user.password)
            
            if(!isMatch) return null
            return {id: user.id}
        }catch (error){
            console.log('Error fetching user: ', error);
            return null;
        }
    }

    static async isEmailTaken({email}){
        try{
            const [rows] = await connection.query('SELECT * FROM user where email = ?',[email])
            
            if (rows.length > 0){
            return true

            }else return false
        }catch(error){
            console.log('error Checkign email', error);
            return null
            
        }

    }
}

export default User;