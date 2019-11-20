---
layout: post
title: Emacs Tips and Tricks
date: '2017-09-23 22:09:43'
tags:
- programming
- tools
---

Emacs Tips and Tricks
=====================

To Learn About
--------------

-   ☒ Company-mode (completion framework for lots of stuff)
-   ☒ YASnippets (templates)
-   ☒ Auto-YASnippets (something like that—I installed it for temporary
    templates)
-   ☒ Alchemist mode (integrates with company mode—tooling for Elixir)
-   ☐ What do `M-.` and `M-,` do?
-   ☐ `font-lock-add-keywords` would let me add new keywords to a
    language
-   ☐ hi-lock
-   ☐ highlight-phrase, unhighlight-regex
-   ☒ [Registers](https://www.emacswiki.org/emacs/Registers)
-   ☐ Auto-loading packages to make startup time shorter

Things that make me happy
-------------------------

-   Undo in region (just highlight something and hit undo)
-   Generate Backus-Nauer Forms with a slightly modified syntax with
    `ebnf-eps-buffer`

Helm
----

You can filter buffers by pattern with Helm. Type: `@pattern` to find
buffers matching `pattern`. If you want to have spaces in the pattern,
you must escape them with a backslash.

### Searching with the Silver Searcher

You’ll need `helm-ag`. After searching, you get the following
keybindings:

##### Key Bindings

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr class="header">
<th>Key</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><code>C-c o</code></td>
<td>Open other window</td>
</tr>
<tr class="even">
<td><code>C-l</code></td>
<td>Search in parent directory</td>
</tr>
<tr class="odd">
<td><code>C-c C-e</code></td>
<td>Switch to edit mode</td>
</tr>
<tr class="even">
<td><code>C-x C-s</code></td>
<td>Save ag results to buffer(Ask save buffer name if prefix key is specified)</td>
</tr>
<tr class="odd">
<td><code>C-c C-f</code></td>
<td>Enable helm-follow-mode</td>
</tr>
<tr class="even">
<td><code>C-c &gt;</code>, <code>right</code></td>
<td>Move to next file</td>
</tr>
<tr class="odd">
<td><code>C-c &lt;</code>, <code>left</code></td>
<td>Move to previous file</td>
</tr>
<tr class="even">
<td><code>C-c ?</code></td>
<td>Show help message</td>
</tr>
</tbody>
</table>

##### Edit mode keymap

<table>
<thead>
<tr class="header">
<th>Key</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><code>C-c C-c</code></td>
<td>Commit changes</td>
</tr>
<tr class="even">
<td><code>C-c C-k</code></td>
<td>Abort</td>
</tr>
<tr class="odd">
<td><code>C-c C-d</code></td>
<td>Mark delete line</td>
</tr>
<tr class="even">
<td><code>C-c C-u</code></td>
<td>Unmark</td>
</tr>
</tbody>
</table>

##### Saved buffer keymap

<table>
<thead>
<tr class="header">
<th>Key</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><code>RET</code></td>
<td>Jump to current line posion</td>
</tr>
<tr class="even">
<td><code>C-o</code></td>
<td>Jump to current line posion in other window</td>
</tr>
<tr class="odd">
<td><code>g</code></td>
<td>Update result</td>
</tr>
</tbody>
</table>

Registers
---------

Any letter can be a register. (Uppercase and lowercase are distinct.) In
the follinwg examples, `<r>` represents a register name.

Working with the point:

-   `C-x r SPC <r>` Store point in register (mnemonic: C-SPC saves
    current mark)
-   `C-x r j <r>` Jump to point saved in register (mnemonic: *j*ump)

Working with text:

-   `C-x r s <r>` *S*ave region into register
-   `C-x r i <r>` *I*nsert contents of register (also works for numbers)

Working with numbers:

-   `C-u NUMBER C-x r n <r>` Save a *n*umber
-   `C-u NUMBER C-x r + <r>` Increment register `<r>` by `NUMBER` (if
    `C-u NUMBER` omitted, increments by 1)

Other:

-   `C-x C-k r <r>` Save last kbd macro to register

Special Modes
-------------

### Racket

Start everything off right with `M-x run-geiser RET racket RET`.

-   `C-c C-d TAB` Open up documentation for command under point

### Calc

-   `TAB` rotate

### Web Mode

I do a fair amount of web programming. `web-mode` is awesome! There are
way too many keystrokes for me to list. Here are my favorite, though:

-   `C-c C-e /` Close element. (Mnemonic: C-*element* / (for closing
    HTML tags))

-   `C-c C-f` Fold. Collapses current tag and subtree. Same keystroke to
    unfold.

### Markdown Mode

-   `C-c C-]` Complete markup of element. (e.g. sticks “\#\#\#” at the
    *end of a line* on a h3 element

-   `TAB` When called on a heading, collapses/expands the heading.

-   `Shift-TAB` Cycles global folding/visibility

Text keys: (all start with `C-c C-s`)

-   `C-c C-s s` Make current word/region bold (`s` is for strong)

-   `C-c C-s e` Italics. (`e` for emphasis)

Bookmarks
---------

-   I installed the `bm` module. Run `bm-toggle` to book mark a line
    visually.

Native bookmarks:

-   `C-x r m` New bookmark. Prompts for a name. Mnemonic: “*m*ark”

-   `C-x r b` Jump to a bookmark. Mnemonic: “*b*ookmark”, or “*b*ack to
    *b*ookmark”

-   `C-x r l` List bookmarks.

Jumping to a bookmark will do so in the *current window*, and will put
you where the point last was in that buffer. If you are already in the
buffer, then it will jump to the point where to bookmark was set.

Bookmarks persist over a session—I’m not sure where the file is, but
they do get stored in some file.

Expansion
---------

`M-/` will do “dynamic expansion”—if there is a word in one of the
buffers of the current session that starts with whatever your cursor is
on, it will expand to that word. Multiple consecutive invocations of
this function will cycle through available expansions.

There’s a way to do manual expansion, but I don’t know it.

Window enlargements
-------------------

I’ve defined a few nice functions. Here they are:

    (defun sticky-enlarge-window-horizontally (prefix)
      (interactive "P")
      (enlarge-window-horizontally (if prefix (car prefix) 1))
      (unless (current-message)
        (message "(Use `[' and `]' to adjust window size)"))
      (let ((map (make-sparse-keymap)))
        (define-key map (kbd "]") 'enlarge-window-horizontally)
        (define-key map (kbd "[") 'shrink-window-horizontally)
        (set-transient-map map t)))

    (defun sticky-shrink-window-horizontally (prefix)
      (interactive "P")
      (shrink-window-horizontally (if prefix (car prefix) 1))
      (unless (current-message)
        (message "(Use `[' and `]' to adjust window size)"))
      (let ((map (make-sparse-keymap)))
        (define-key map (kbd "]") 'enlarge-window-horizontally)
        (define-key map (kbd "[") 'shrink-window-horizontally)
        (set-transient-map map t)))

    (define-key global-map (kbd "C-x }") 'sticky-enlarge-window-horizontally)
    (define-key global-map (kbd "C-x {") 'sticky-shrink-window-horizontally)
    (define-key global-map (kbd "<f7>") 'shrink-window-horizontally)
    (define-key global-map (kbd "<f8>") 'balance-windows)
    (define-key global-map (kbd "<f9>") 'enlarge-window-horizontally)

Functions
---------

-   `toggle-truncate-lines` will toggle how long lines are displayed

-   `C-x C-d` is essentially `ls` — lists the contents of a directory

-   `C-u M-|` pipe region to a shell command and replace it with the
    output

    You can get sweet `sed`-like behavior with something like this:

         perl -ne 's/^(\d+)\.(\d+)/<<1 Thes. $1:$2>>/g; print'

Macro wisdom
------------

Put cursor where it is supposed to go, begin recording (`C-x (`), do
thingy, isearch to next location, and then stop recording. (`C-x )`)
This lets you see what is going to be edited next, and hit `C-s C-s` if
you want to skip to the next match.

`<f3>` Is a very fancy key. Normally, it will begin recording a macro.
Once you are defining a macro, hitting `<f3>` again will insert the
current macro counter.

`<f4>` is its best friend. Hitting `<f4>` while defining a macro will
end the macro. Hitting `<f4>` otherwise will then run the last defined
keyboard macro. Running `C-u <f4>` runs the second macro in macro ring.
Running `C-u 4 <f4>` runs the first macro 4 times. (Adjust 4 as you
will.)

You can use Lisp inside of a macro. For example, to insert incrementing
numbers, do:

    M-: (setq x 1) RET
    C-(
    C-u M-: x RET
    M-: (setq x (+ x 1))
    <whatever else>
    C-)

You can repeat a macro until an error is signaled with `C-u 0 C-x e`.

You can also run `apply-macro-to-region-lines` (`C-x C-k r`) to fire a
macro on every line in the region.

To prompt a user for input while writing a macro, do: `C-u C-x q`. This
is a variant of `C-x q` which queries the user.

### Recursive editing

Hitting `C-r` will enter a recursive editing level *when the macro is
run*, but not while you are recording.

`C-x q` enters a query state: `y` continues to execute the macro, `n`
aborts the *current* iteration, and `q` aborts all together.

`C-u C-x q` lets you enter in some text.

To finish recursive editing, type `C-M-c`. To abort and halt execution,
type `C-]`.

Rectangles
----------

To select text in a rectangle, use `C-x SPC`. The region will then
highlight like a rectangle. The kill and yank commands will work like
normal (i.e. hitting `C-k` will kill the rectangle.)

-   `C-x r M-w` Copy rectangle as kill. (Think `M-w`)

-   `C-x r N` Inserts numbered lines in the rectangle. Accepts a prefix
    argument to change at what number the lines start at.

-   `M-x string-insert-rectangle` Prompts for a string and inserts it at
    the current rectangle. So you can go from this:

         one
         two
         three
         four

    to this:

         - one
         - two
         - three
         - four

    by setting the mark on the `o` of `one`, then moving to the `f` in
    `four`, then running the command.

Misc. Keystrokes
----------------

-   `C-x <right arrow>` cycle through buffers

-   `C-x C-q` toggle read-only mode in current buffer

-   `C-x C-;` to set comment column to cursor’s current column

-   `C-x C-h` Really `<any prefix> C-h` shows a listing of all possible
    completions after the prefix character.

-   `C-x 8 RET` Insert arbitary unicode character by name. You can
    insert snowmen like this!

-   `C-x 8 <char>` There are a bunch of characters that you can insert
    after this. “&lt;” will insert “«”

-   `C-x n n` Only displays the region. Good for focusing. Use `C-x n w`
    to display everything.

-   `C-x $` To hide lines in the current buffer, type ‘C-x $’
    (‘set-selective-display’) with a numeric argument N. Then lines with
    at least N columns of indentation disappear from the screen.

-   `C-u` Prefix argument. The default is 4. If you want to grow the
    current window by, say, 15 lines, do following: `C-u 15 C-x ^`.

-   `C-u <number> <key>` Repeats `<key>` `<number>` times. It’s
    different for inserting digits. If you wanted to insert `5` seven
    times, type `C-u 7 C-u 5`.

-   `C-x C-k C-i` Inserts the current value of the keyboard macro
    counter and increments it. When `C-u` proceeds the command, the
    previous value is inserted, and the counter is not updated. A prefix
    argument specifies a different increment.

-   `C-x C-k C-c` Prompts for the initial value of the keyboard macro.
    Must be called prior to starting macro definition to be used this
    way. It has another behavior if called during macro definition. See
    [this
    page](https://www.emacswiki.org/emacs/EmacsKeyboardMacroCounter) for
    help.

-   `C-x C-k n` Give the last kbd macro a name, which you can then call

-   `ESC-^` Join this line to the previous and fix up whitespace at
    join. Useful if `auto-fill-mode` was turned on and you need to
    unwrap a line.

-   `<f1>` Run help

-   `<f2>` Appears to be a prefix command, much like `C-x`.

-   `<f10>` Opens the menu. As in, the one at the top of the screen that
    you never have actually used. With ACTUAL GRAPHICS!!

-   `C-x RET f` Allows you to set the encoding when saving the file.
    Useful for stripping bad line endings in DOS files.

Dired
-----

-   `C-o` In dired, opens the file the cursor is on in the other window.

Occur
-----

-   `C-u M-s o <pattern> RET` Copies all strings mattching `<pattern>`
    (if you use `.*thingy.*` it will copy the whole line with “thingy”
    in it) into buffer called `*Occur*` \#\#\# Regexes

Not like Perl. In `(?:aaa|bbb)`, the characters `(`, `)`, and `|` all
match themselves. If you want perl-like behavior, escape them:
`\(?:aaa\|bbb\)`.

But when you want to type that in a string literal, use
`"\\(?:aaa\\|bbb\\)"`.

#### Character Classes

Some common character classes:

-   `.` works as expected (any char)
-   `[[:ascii:]]+` any ascii character
-   `[_A-Za-z0-9]+` letters, digits, underscores
-   `"\([^"]+\)"` capture text between double quotes (not accounting for
    escaped chars)

#### Regex search and replace:

    M-x replace-regexp
    Replace regexp: right\|left
    Replace regexp with: \,(if (equal "right" \&amp;) "left" "right")

Looks like the `\,(...)` syntax says “evaluate me”. :)

#### Regex search and replace with captured bit

    M-x replace-regexp
    Replace regexp: subject(\([A-Za-z]+\))
    Replace regexp with: \1

That gets subject(*), and retuns *

Programming Languages
---------------------

### C

Compile (using `make -k`) with `M-x compile`.

Any errors will show up in a special buffer; visit with <kbd>C-x
\`</kbd>
