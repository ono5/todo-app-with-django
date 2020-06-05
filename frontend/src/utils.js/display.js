const display = () => {
      // ログイン画面非表示
      const loginArea = document.getElementById('Login-area')
      loginArea.style.display = "none"
      // Todo画面表示
      const todoArea = document.getElementById('Todo-area')
      todoArea.style.display = "block"
}

export default display
