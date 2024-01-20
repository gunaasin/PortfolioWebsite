
const mobileNav = () => {

    const navbarBtn = document.querySelector('.navbars');
    const navlinks = document.querySelector('.mobnavication');
    const mobilelinks = document.querySelectorAll('.mob-nav-links');

    let mobileNavOpen = false;
    console.log(mobileNavOpen);

    navbarBtn.addEventListener('click', () => {
        mobileNavOpen = !mobileNavOpen;

        if (mobileNavOpen) {
            navlinks.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            navlinks.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobilelinks.forEach( link => {
        link.addEventListener('click', () => {
            mobileNavOpen = false;
            navlinks.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
        
    });
    console.log(mobilelinks)

};


export default mobileNav; 
