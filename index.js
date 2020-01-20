"use strict"

const PrettyError = require("pretty-error")
const MaterialTheme = require("pretty-error-themes/material")
const crossExit = require("cross-exit")

module.exports = (error, { exit = true } = {}) => {
	const pe = new PrettyError()
	pe.appendStyle(MaterialTheme)
	const rendered = pe.render(error)
	console.log(rendered)
	if (exit) crossExit(1)
}
