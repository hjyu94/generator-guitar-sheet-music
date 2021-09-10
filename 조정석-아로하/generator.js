function generate() {
    clear()
    var input = document.getElementById("code").value;
    var lines = input.split('\n');
    lines.forEach(line => {
        var div = document.createElement('div');
        var codes = line.split(",")
        codes.forEach(code => {
            div.appendChild(getImage(code))
        });
        document.getElementById('container').appendChild(div)
    });
};

function clear() {
    const container = document.getElementById("container");
    container.innerHTML = '';
}

function getImage(code) {
    var img = document.createElement('img');
    img.src = code + '.png'
    img.height = '100'
    return img
}