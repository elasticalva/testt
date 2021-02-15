  const btnDarkLight = (btn) => {
    const btnElem = document.querySelector(btn);
  
    const setText = () => {
      const text = document.body.classList.contains('oscuro') ? '🌙' : '☀️';
      btnElem.textContent = text;
    }
  
    document.addEventListener("click", (e) => {
      if (e.target.matches(btn)) {
        document.body.classList.toggle('oscuro');
        setText();
      }
    });
  
    setText();
  
  }
  
  btnDarkLight("#btn-light-dark");