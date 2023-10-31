let pattern = '';

for (let i = 19; i >= 0; i--) {
    let asterisk = '';
    for (let j = 0; j <= i; j++) {
        asterisk += '* ';
    }
    console.log(asterisk);
    pattern += asterisk + '<br>';
}


document.getElementById('output').innerHTML = pattern;