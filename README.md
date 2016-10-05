# js-based-test-language
Successor of PBTL.

Will be written in itself in the end, but for now I'll write it in JS because it's faster than Python but about as easy. It will build upon C and be completely compatible. (So you can use this compiler to compile C files, but no use really since this compiler will only compile to C first and then use the C compiler to compile to executable code)

### Usage
`node jtl *<file>* *<options>*`

Options
--------
[*] `-h` or `--help`: Show this.
[*] `-l *<language>*` or `--lang *<language>*`: Specify explicitly the *language* for the following input file (rather than letting the compiler choose a default based on the file name suffix).
[*] `-o *<file>*` or `--output *<file>*`: Place output in file *file*. If not specified the compiler copies the name of the input and changes the extension.
[*] `-c`: Only compile to C, not to executable code.
[*] `-v` or `--version`: Display the version number.
[*] `--nogc`: Disable the GC (= Garbage Collector).

**Note:** Currently option `-c` is default because I have not yet found a way to compile directly to machine code or somehow include the C compiler in this compiler.