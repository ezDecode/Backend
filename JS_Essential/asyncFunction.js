// Async Function


// var blob = await fetch(`https://randomuser.me/api/`)
// var res = await blob.json();

// console.log(res);



async function test() {
    const blob = await fetch(`https://randomuser.me/api/`)
    const res = await blob.json()

    console.log(res.results[0]);
}

test()
