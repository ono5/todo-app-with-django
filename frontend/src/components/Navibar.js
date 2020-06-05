import React, {
    useContext,
} from 'react'
import AppContext from '../contexts/AppContext';
import { Nav } from 'react-bootstrap'

const Navibar = () => {
    const { state, dispatch } = useContext(AppContext)
    const signOut = () => {
      const result = window.confirm('ログアウトしますか？')
      if (result) {
        // セッションストレージ内の情報を破棄
        sessionStorage.clear()
        window.location.href = '/'
      }
    }
    return (
        <Nav className="Nav-area">
          <a onClick={signOut} className="Signout">
            <i className="fas fa-user-circle fa-lg text-warning">{state.user.username}</i>
          </a>
        </Nav>
    )
}

export default Navibar
