const animation = () => {


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('right-ani-element');

            }   else {
                // entry.target.classList.remove('right-ani-element');
            }
        });
    });
    const hiddenElement = document.querySelectorAll(" .rightlazy");
    hiddenElement.forEach((el) => observer.observe(el));
///
    const observers = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('left-ani-element');
            } else {
                // entry.target.classList.remove('left-ani-element');
            }
        });
});
const hiddenElements = document.querySelectorAll(" .lefttlazy");
hiddenElements.forEach((al) => observers.observe(al));
}
export default animation();