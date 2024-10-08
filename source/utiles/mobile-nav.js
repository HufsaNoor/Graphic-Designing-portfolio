const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobilelinks = document.querySelectorAll('.mobile-nav__link');
    //state
    let isMobileNavOpen =false;

    

    headerBtn.addEventListener('click',()=>{
        isMobileNavOpen = !isMobileNavOpen;
        if (!isMobileNavOpen) {

        mobileNav.style.display ='flex';
        document.body.style.overflowY = 'hidden';
        }
        else {
            mobileNav.style.display ='none';
            document.body.style.overflowY = 'auto';
        }
        
    
    });
mobilelinks.forEach(link => {
    link.addEventListener('click',() => {

        isMobileNavOpen=false;
        mobileNav.style.display ='none'
        document.body.style.overflow='auto';
    });
});
};  


export default mobileNav;