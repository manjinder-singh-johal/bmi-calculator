let height;
let weight;

const calculate = () => {
    height = parseFloat(document.getElementById('height').value);
    weight = parseFloat(document.getElementById('weight').value);

    const result = weight / (height * height);
    document.getElementById('output').innerHTML = `Your BMI Score is: ${result.toFixed(2)}`;
}

const reset = () => {
    document.getElementById('weight').value = '0';
    document.getElementById('height').value = '0';
    document.getElementById('output').innerHTML = '';
}