
// let schetX = document.querySelector(".xxx")
// let schetO = document.querySelector(".ooo")
// let restart = document.querySelector(".restart")

let cells=[
    ['','',''],
    ['','X',''],
    ['','','']
]

// restart.onclick=()=>{
//     location.reload() 
// }


function go(cells){

    let count = 0
    let count_pusto =0

    let table = document.querySelector("table")


for(let i in cells){
    let tr = document.createElement("tr")
    for(let j in cells[i]){
        let td = document.createElement('td')
        td.textContent=cells[i][j]
        td.classList.add("td")
        tr.append(td)
        // console.log(td.innerHTML)

        if(td.innerHTML !=''){
            count_pusto+=1
        }
        console.log(count_pusto)
    }
    table.append(tr)
}

let div = document.querySelector('.app')
div.append(table)
let yacheiki = document.querySelectorAll('.td')

	
	for (let i of yacheiki) {
		i.addEventListener('click', function addZnach() {
            if (count % 2 == 0) {
                console.log(1)
				i.innerHTML = 'X';
                    i.style='color:rgba(101, 164, 235, 0.897);'
			} else {
				i.innerHTML = '0';
                i.style='color:rgb(150, 69, 187);'
			}
            i.removeEventListener('click', addZnach)


            setTimeout(() =>  {if(countingСells(yacheiki)){
                alert('Победа ' +  i.textContent)
                let table = document.querySelector("table")
                table.innerHTML=''
                // if(i.textContent=='X'){
                //     schetX.textContent++
                // }
                // else{
                //     schetO.textContent++
                // }
                go(cells)
            }else if(count==9){
                alert('ничья')
                go(cells)
            }}, 200);
            // console.log(count)
			
			count++;
		});
	}



}

go(cells)





function countingСells(yacheiki){
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

		if (
			yacheiki[line[0]].textContent == yacheiki[line[1]].textContent &&
			yacheiki[line[1]].textContent == yacheiki[line[2]].textContent &&
			yacheiki[line[0]].textContent != ''
		) {

			return true;
		}
	}
	
	return false;
}


