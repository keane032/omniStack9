import React, {useState} from 'react';
import api from '../../service/api';


export default function Login({ history }){
    
    const [email, setEmail] = useState('');

    async function handleSubmit(event){
        // event.preventDefault();
        // var respose = await api.post('/users',{email});
        // var {id} = respose;
        // localStorage.setItem('user', id);
        history.push("/dashboard");
    }

  var enable = email.length === 0;

  return (
    <>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL*</label>
          <input 
            id="email" 
            type="email" 
            placeholder="seu email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <button disabled={enable} class={enable ? "disabled" : "enabled"} type="submit">Entrar</button>
        </form>
    </>
  );
} 