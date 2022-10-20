import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './features/User'
export default function Login() {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(login({
            email: "aziz@gmail.com",
            nom: "guennichi",
            prenom: "aziz",
            adress: "mourouj",
        })
        )
        }
        >
            se connecter ! {" "}
        </button>
        <button onClick={()=>dispatch(logout())}>
        se deconnecter !{" "}

        </button>
    </div>
  )
}
