function showStatistics(){

    let arr = [12,25,5,30,17,8,40];

    let sum = 0;
    let max = arr[0];
    let min = arr[0];
    let even = 0;
    let odd = 0;

    for(let i=0;i<arr.length;i++){

        sum += arr[i];

        if(arr[i] > max){
            max = arr[i];
        }

        if(arr[i] < min){
            min = arr[i];
        }

        if(arr[i] % 2 === 0){
            even++;
        }else{
            odd++;
        }

    }

    let average = sum / arr.length;

    document.getElementById("result").innerHTML = `
        <b>Array:</b> ${arr}<br><br>

        <b>Total Elements:</b> ${arr.length}<br>

        <b>Sum:</b> ${sum}<br>

        <b>Average:</b> ${average.toFixed(2)}<br>

        <b>Largest:</b> ${max}<br>

        <b>Smallest:</b> ${min}<br>

        <b>Even Count:</b> ${even}<br>

        <b>Odd Count:</b> ${odd}
    `;
}
