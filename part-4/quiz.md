## Part 4: Quiz time!

Copy the questions below into a file `part-4/quiz.md`. Then, write your answer to each question directly below it.

The quiz is worth __50 points__ in total.

_Reminder: you can use the internet to help you answer these questions :)_

- What is the PATH environment variable used for in UNIX systems?

  A: The PATH environment variable tells UNIX which directories to search for commands and modules by default.

- On a UNIX computer, how do you stop a running process?

  A: `^c` ('control-c') stops a running process that is in focus (i.e. not running in the background). Some apps, like node.js require you hit `^c` twice to quit.

- Which command can you use to see which homebrew packages you`ve installed?

  A: The `brew list` command displays installed homebrew packages.

- On a UNIX computer, how do you find the process id of a running process?

  A: `pgrep + program name` will display the process id.  I also researched `pidof`. However, a quick test for this question using `pidof firefox`. threw the error `bash: pidof: command not found` whereas `pgrep firefox` display `356`.

- In a terminal, what does control-c do?

  A: `control-c` stops the current process.

- What would be the result of typing the following commands?
 
  $ cd /Users/lucy
  $ mkdir one
  $ touch alpha
  $ cd one
  $ touch alpha
  $ pwd

  A: 
  - The command `cd /Users/lucy` navigates to a directory named `/Users/lucy`
  - The command `mkdir one` creates a directory named `one`. 
  - The command `touch alpha` creates a file named `alpha`.
  - The command `cd one` navigates to a directory named `one`.
  - The command `touch alpha` creates a file named `alpha`.
  - The command `pwd` displays the path from the users home directory to the  current directory. Example: 
      My home directory is `$ /Users/d2rd/`.
      Assuming the scenario from this question after executing the `mkdir` and `cd` steps above typing `pwd` would result in this response: `/users/lucy/one`.

- How do you see which environment variables are set in your shell?

  A:   The commands `env` and `printenv` both display the environment variables in my shell. NOTE: The difference between the two commands is only apparent in their more specific functionality. For instance, with printenv, you can requests the values of individual variables:
    `printenv SHELL`
    `/bin/bash`

  On the other hand, env let's you modify the environment that programs run in by passing a set of variable definitions into a command like this:
    `env VAR1="blahblah" command_to_run command_options`

  src=`https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps`

- What keyboard shortcut do you use to perform a "Find" search in your editor?

  A: For VS Code editor `command + f` opens the Find dialog.

- How do you see which aliases you have in your shell?

  A: To display active aliases type `alias` at the prompt.

- When a terminal command completes, how can you tell if it was successful or not?

  A: It depends on the command and program. In general, the absence of an error message and return to the `$` prompt indicates success. In the case of node.js the running program returns `>` (greater than sign) as a prompt. In the case of postgreSQL nothing is returned so you're okay.

- What does your `~/.gitconfig` have in it? (paste the whole file here)

  A: `git config --list` results in:
    credential.helper=osxkeychain
    color.ui=auto
    user.name=Glenn-David Daniel
    user.email=d2rd@outlook.com
    core.repositoryformatversion=0
    core.filemode=true
    core.bare=false
    core.logallrefupdates=true
    core.ignorecase=true
    core.precomposeunicode=true
    remote.origin.url=https://github.com/d2rd/phase-2-challenge.git
    remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
    branch.master.remote=origin
    branch.master.merge=refs/heads/master

- What is the difference between a relative and absolute path?

  A:  Relative paths reference from the root of the project (application) folder.  Absolute paths reference from the root directory or users home directory.

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── airbnb-for-llamas
      │   └── package.json
      └── facebook-for-mimes
          ├── README.md
          └── package.json
  ```

  And you were in the `facebook-for-mimes` folder. What command would you use to copy the `README.md` file to the `airbnb-for-llamas` folder?

  A: To copy `README.md` file to the target folder I would use `cp README.md ../airbnb-for-llamas`.

- What keyboard shortcut do you use in your editor to quickly navigate to a file in the current project?

  A:  For the VS Code editor the command is `command + p`

- Give an example of a file or folder pattern you commonly add to a .gitignore file and why you add it

  A:  Common .gitignore patterns would be as follows:
  #ignore a path to a directory (including all its contents): `/ignoreMe/`
  # ignore a file type  `*.json`
  # to exclude a specific file from the preceding rule track it `!myFile.json`
  src=`https://softwarecave.org/2014/02/21/git-how-to-ignore-files/`

- What are the main differences between `Array.sort` and `Array.filter` in JavaScript?

  A:  `Array.sort` reorders the elements in an existing array.  `Array.filter` tests the elements of an existing array and creates a new array containing only the elements that pass the test.  All other elements of the original array are discarded.


### Requirements

- [ ] __50:__ All questions are answered correctly.