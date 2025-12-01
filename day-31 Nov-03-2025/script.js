const head = document.querySelector(".head");
const details = document.querySelector(".details");
const headArr = Array.from(head.children); 
const detailsArr = Array.from(details.children); 

headArr.forEach((hd, ind) => {
    hd.addEventListener('click', () => {
        headArr.forEach((h, i) => {
            if(ind === i) {
                if(headArr.length - 1 > i){
                    h.classList = "w-full text-center text-xl cursor-pointer py-2 border-r font-bold bg-gray-300";
                }else{
                    h.classList = "w-full text-center text-xl cursor-pointer py-2 font-bold bg-gray-300";
                }
                detailsArr[i].classList = "p-4 italic bg-gray-300 transition-opacity duration-500 opacity-100 pointer-events-auto";
            }else{
                if(headArr.length - 1 > i){
                    h.classList = "w-full text-center text-xl hover:bg-gray-200 cursor-pointer py-2 border-b border-r";
                }else{
                    h.classList = "w-full text-center text-xl hover:bg-gray-200 cursor-pointer py-2 border-b";
                }
                detailsArr[i].classList = "-4 italic transition-opacity duration-500 opacity-0 pointer-events-none absolute inset-0";
            }
        })
    })
})