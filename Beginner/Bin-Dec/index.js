function Converter(){
    const bin = document.getElementById('bin').value;

    const res = parseInt(bin, 2);

    document.getElementById('out').innerHTML = "O decimal é: "+res;
}