const themeSelect =()=>{

   const theme = document.querySelectorAll('#theme');

   const themelist =localStorage.getItem('theme');
   //on mount 
   themelist &&  document.body.classList.add(themelist);

   const handleTheme = () =>{
    document.body.classList.toggle('lighttheme');
    if(document.body.classList.contains('lighttheme')){
        localStorage.setItem('theme', 'lighttheme');
    }else{
        localStorage.removeItem('theme');
        document.body.removeAttribute('class')
    }

   };

    theme.forEach(btn => {
    btn.addEventListener('click', handleTheme   
    );
   });

   
};


export default themeSelect();