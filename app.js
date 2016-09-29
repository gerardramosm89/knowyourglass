
function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
    console.log("Did not get a user or greeting");
} else {
    console.log(`Welcome ${user}, ${greeting}`);
}
