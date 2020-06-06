const display = (noneAreaID, blockAreaID) => {
      // ログイン画面非表示
      const noneArea = document.getElementById(noneAreaID)
      noneArea.style.display = "none"
      // Todo画面表示
      const blockArea = document.getElementById(blockAreaID)
      blockArea.style.display = "block"
}

export default display
