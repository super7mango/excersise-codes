const select = document.querySelector('select')
const button = document.querySelector('button')

button.addEventListener('click', function(){
    console.log(select.value)
    let result;
    result = select.value == "foot" ?
    "축구를 선택했네요!" :
    "축구를 선택하지 않았네요!"
    alert(result)
})