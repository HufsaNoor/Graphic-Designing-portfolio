const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle,#theme-toggle1');
//state 
    const theme =localStorage.getItem('theme');
//one mount
    theme && document.body.classList.add(theme);
    //handlers
const handleThemeToggle =() => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme','light-mode');
    }
    else {
        localStorage.removeItem('theme');
        document.body.removeAttribute('class');
    }
    
}

//events
    themeToggleBtns.forEach(btn => 
        btn.addEventListener('click',() => handleThemeToggle()));
};

export default darkMode;