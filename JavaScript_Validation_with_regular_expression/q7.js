function find(value) {
    var ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return ipRegex.test(value);
}
console.log(find('172.15.10.0.2'));
console.log(find('198.16.23.5')); 