let pattern = '';
for (let i = 8; i >= 1; i--) {
    let ast = '';
    for (let j = 1; j <= i; j++) {
        ast += '* ';
}
console.log(ast);
pattern +=ast + '<br>';
}

document.getElementById('output').innerHTML = pattern;