function greet(name){
    return `hello, {name}!`;

}

module.export=greet

if(require.main=== module){
    console.log(greet("world"))
}