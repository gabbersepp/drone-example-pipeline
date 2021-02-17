function sleep(s) {
    return new Promise(resolve => {
        setTimeout(resolve, s * 1000)
    })
}

async function run() {
    console.log("start")
    await sleep(20)
    console.log("ready")
}

run();