
let table = document.querySelector("table")
let cells = table.querySelectorAll('td')

let schetX = document.querySelector(".xxx")
let schetO = document.querySelector(".ooo")

let restart = document.querySelector(".restart")

// console.log(cells)

restart.onclick=()=>{
    location.reload() 
}


function go(cells){

    let count = 0;
    for (let i of cells) {
        i.innerHTML=''
    }
	
	for (let i of cells) {
		i.addEventListener('click', function addZnach() {
            if (count % 2 == 0) {
                console.log(count)
				i.innerHTML = 'X';
                    i.style='color:rgba(101, 164, 235, 0.897);'
			} else {
				i.innerHTML = '0';
                i.style='color:rgb(150, 69, 187);'
			}
            i.removeEventListener('click', addZnach)


            setTimeout(() =>  {if(countingСells(cells)){
                alert('Победа ' +  i.textContent)
                if(i.textContent=='X'){
                    schetX.textContent++
                }
                else{
                    schetO.textContent++
                }
                go(cells)
            }else if(count==9){
                alert('ничья')
                go(cells)
            }}, 200);
			
			count++;
		});
	}



}

go(cells)





function countingСells(){
    let victorys = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let line of victorys) {
        // console.log(cells[5])
        // console.log(line[0])

		if (
			cells[line[0]].textContent == cells[line[1]].textContent &&
			cells[line[1]].textContent == cells[line[2]].textContent &&
			cells[line[0]].textContent != ''
		) {

			return true;
		}
	}
	
	return false;
}


