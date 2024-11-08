const SERVER_URL = import.meta.env.VITE_SERVER_URL
interface basicUserProps {
    email: string
    password: string
}
export async function login({ email, password}: basicUserProps): Promise<number | undefined> {
  try {
    const url = `${SERVER_URL}/login`
    const data = {
      email,
      password,
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const result = res.json()
   
    return result
  } catch (error) {
    console.log(error)
  }
}


export async function register ({email,password}:basicUserProps): Promise<number | undefined> {
  try{
    const url = `${SERVER_URL}/register`
    const data = {
      email,password
    }
    const res = await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })

    const result = res.json()
    return result
  }catch(error){
    console.log(error)
  }
}