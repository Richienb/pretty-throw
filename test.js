const test = require("ava")
const prettyThrow = require(".")

test("main", (t) => {
	console.log = t.snapshot
	prettyThrow(new Error("Test error."), { exit: false })
})
