/**
 * Throw formatted errors.
 * @param error The error to be thrown.
 * @param options Options.
 * @example
 * ```
 * const prettyThrow = require("pretty-throw");
 * prettyThrow(new Error("Test error."));
 * //=>
 *   Error: Test error.
 *
 *   repl:1
 *   └─ repl:1:14
 *
 *   vm.js:120 Script.runInThisContext
 *   └─ vm.js:120:20
 *
 *   repl.js:423 REPLServer.defaultEval
 *   └─ repl.js:423:29
 *
 *   domain.js:427 bound
 *   └─ domain.js:427:14
 *
 *   domain.js:440 REPLServer.runBound [as eval]
 *   └─ domain.js:440:12
 *
 *   repl.js:750 REPLServer.onLine
 *   └─ repl.js:750:10
 *
 *   events.js:317 REPLServer.emit
 *   └─ events.js:317:22
 *
 *   domain.js:483 REPLServer.EventEmitter.emit
 *   └─ domain.js:483:12
 *
 *   readline.js:323 REPLServer.Interface._onLine
 *   └─ readline.js:323:10
 *
 *   readline.js:688 REPLServer.Interface._line
 *   └─ readline.js:688:8
 * ```
*/
declare function prettyThrow(error: Error, options?: {
	/**
	 * Exit the process after displaying the error.
	 * @default true
	*/
	exit?: boolean
}): void;

export = prettyThrow;
