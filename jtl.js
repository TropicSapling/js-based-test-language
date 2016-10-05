var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

if(Object.keys(argv).length < 2) {
	console.log("-------- Usage --------");
	console.log("`node jtl <file> <options>`");
} else if(argv.h || argv.help) {
	console.log("-------- Usage --------");
	console.log("`node jtl <file> <options>`\n");
	console.log("-------- Options --------");
	console.log("[*] `-h` or `--help`: Show this.\n");
	console.log("[*] `-l <language>` or `--lang <language>`: Specify explicitly the <language> for the following input file (rather than letting the compiler choose a default based on the file name suffix).\n");
	console.log("[*] `-o <file>` or `--output <file>`: Place output in file <file>. If not specified the compiler copies the name of the input and changes the extension.\n");
	console.log("[*] `-c`: Only compile to C, not to executable code.\n");
	console.log("[*] `-v` or `--version`: Display the version number.\n");
	console.log("[*] `--nogc`: Disable the GC (= Garbage Collector).\n");
	console.log("NOTE: Currently option `-c` is default because I have not yet found a way to compile directly to machine code or somehow include the C compiler in this compiler.");
}