paws-cli
========

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/paws-cli.svg)](https://npmjs.org/package/paws-cli)
[![Downloads/week](https://img.shields.io/npm/dw/paws-cli.svg)](https://npmjs.org/package/paws-cli)
[![License](https://img.shields.io/npm/l/paws-cli.svg)](https://github.com/ChristienGuy/paws-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g paws-cli
$ paws-cli COMMAND
running command...
$ paws-cli (-v|--version|version)
paws-cli/0.0.4 darwin-x64 node-v8.11.4
$ paws-cli --help [COMMAND]
USAGE
  $ paws-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`paws-cli create-component [PATH]`](#paws-cli-create-component-path)
* [`paws-cli help [COMMAND]`](#paws-cli-help-command)

## `paws-cli create-component [PATH]`

creates a new react class component at the given path

```
USAGE
  $ paws-cli create-component [PATH]

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ paws-cli cc
```

_See code: [src/commands/create-component.ts](https://github.com/ChristienGuy/paws-cli/blob/v0.0.4/src/commands/create-component.ts)_

## `paws-cli help [COMMAND]`

display help for paws-cli

```
USAGE
  $ paws-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_
<!-- commandsstop -->
