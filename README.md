# Pixely Group - ESLint Config

## Goals

- Catch mistakes as they are made.
- Flag areas where code can be improved.
- Promote consistency in code style & structure.

## Installation

```shell
npm i -D @pixelygroup/eslint-config-px eslint eslint-plugin-jsdoc
```

You may also need to install additional peer dependencies (the dependencies
required will depend on the configuration being used). To list the peer
dependencies:

```shell
npm info @pixelygroup/eslint-config-px peerDependencies
```

## Configuration

To use the standard configuration for JavaScript, create an `.eslintrc.js` file
with the following contents:

```js
module.exports = {
  extends: [
    '@pixelygroup/eslint-config-px',
  ],
}
```

You can also set up an `.eslintignore` file to ignore any files that shouldn't
be linted:

```text
/dist/
/public/
```

The `node_modules` directory is always ignored.

### Multiple Configurations

This package also exposes other configurations. Note that you will likely have
to install extra dev dependencies (as noted in the [Installation](#installation)
section of this readme) when using these rules as they make use of extra
plugins that are listed in this package's `peerDependencies`.

#### HTML Scripts

To lint inline scripts contained within HTML files, add the following to the
`.eslintrc.js` file:

```js
module.exports = {
  extends: ["@pixelygroup/eslint-config-px/all/html"],
}
```

#### Vue.js

To lint [Vue.js](https://vuejs.org/) single-file components (`*.vue`), add the
following to the `.eslintrc.js` file:

```js
module.exports = {
  extends: ["@pixelygroup/eslint-config-px/all/vue"],
}
```

#### Nuxt.js

To lint [Nuxt.js](https://nuxtjs.org/) projects, add the following to the
`.eslintrc.js` file:

```js
module.exports = {
  extends: ["@pixelygroup/eslint-config-px/all/nuxt"],
}
```

#### Node.js

To lint [Node.js](https://nodejs.org/en/) scripts add the following to the
`.eslintrc.js` file:

```js
module.exports = {
  extends: ["@pixelygroup/eslint-config-px/all/node"],
}
```

#### Jest

To lint [Jest](https://jestjs.io/) test scripts, add the following to the
`.eslintrc.js` file:

```js
module.exports = {
  extends: ["@pixelygroup/eslint-config-px/all/jest"],
}
```


## How to use

### Command line

Add `package.json` scripts, e.g:

```json
{
  "scripts": {
    "lint:js": "eslint --ext .js,.vue src",
    "lint:js:fix": "npm run lint:js -- --fix"
  }
}
```

You will then be able to lint your codebase by running the command
`npm run lint:js` and fix many issues with `npm run lint:js:fix`.

In a `vue-cli` project that'll use `eslint` as part of the standard lint
process, the scripts should be more like:

```json
{
  "scripts": {
    "lint": "vue-cli-service lint --no-fix src tests",
    "lint:fix": "vue-cli-service lint src tests",
  }
}
```

### IDE Integrations

#### Atom

```shell
apm install linter-eslint
```

Go to *Settings > Packages > linter-eslint > Settings* and set the list of
scopes to:

```text
source.js, source.babel, source.vue, text.html.vue, text.html.basic
```

#### Visual Studio Code

```shell
code --install-extension dbaeumer.vscode-eslint
```

To enable Vue templates to be linted by the extension, add the following to your
settings:

```json
{
  "eslint.validate": [
    "javascript",
    "vue"
  ]
}
```

To enable automatic fixing of errors on save first we turn of auto formatting on
save if that's enabled and then enable the eslint extension's `fixAll` code
action:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Tips

### Migrating old codebases

Run `npm run lint --fix` to clean up everything that can be cleaned up
automatically and then commit those changes by themselves. If there are a lot of
additional warnings that you'd rather not deal with straight away, then override
them in the `.eslintrc.js` file as follows:

```js
module.exports = {
  extends: [
    '@pixelygroup/eslint-config-px',
  ],
  rules: {
    'some-unwanted-rule': 'off',
  }
}
```

### Version control

Don't mix logical changes with lint changes in the same commit – if you are
implementing a feature in an older codebase that doesn't already follow these
lint rules, then commit any lint clean ups first, then implement the feature, or
vice-versa.

If your editor has a feature like "automatically fix errors on save", be aware
that you may have to therefore partially add files to your commits. If this is
too much effort for you, then you can/should disable the automatic fixing of
errors so you don't have this situation.

### Excluding code from linting

If there's an exceptional situation where a rule that should normally be
followed should be ignored in that specific case, disable that rule for that
specific section of code.

Try to limit the size and scope of the exclusion as much as possible.

Do **not** just disable `eslint` altogether - always provide a rule name and,
where useful, give a reason as to why you're disabling it.

#### Disabling rules for a single line

```js
// eslint-disable-next-line no-new
new Foo() // This code would normally generate a warning.
```

Or:

```js
new Foo() // eslint-disable-line no-new
```

But preferably the `next-line` variant as it's easier to read and doesn't
interfere with a true code line.

#### Disabling rules for larger sections

```js
/* eslint-disable no-new */

// These three lines would normally generate a warning.
new Foo()
new Bar()
new Baz()

/* eslint-enable no-new */
```

If you disable a rule for an entire file, ensure you re-enable it at the end of
the file to make sure that you aren't inadvertently disabling the rule for any
code that ends up concatenated with it.

See: [ESLint Documentation § Disabling Rules with Inline Comments][disabling]

If you have to disable a rule in more than a couple of cases, it may be the case
that the rule is too noisy, or you may be doing something incorrectly. Consider
whether the rule should be removed from this configuration, or if there's a
better way of writing the code in question.

### Adding new rules

New rules should be added when they stand a chance of catching a mistake, push
developers to write better code, or if they make the code more consistently
styled. Avoid rules that force developers to jump through hoops just to keep the
linter happy.

Sometimes new rules get added to this package's dependencies. It's worth
reviewing the changes when updating these dependencies to see if there are any
useful additions we can enable.

### Removing rules

If there's a rule that is generating too much noise in code that is otherwise
perfectly fine, consider removing it from this configuration. Before doing so,
take the time to understand why the rule exists and whether there's a better way
of writing the code in question.

## More information

- [ESLint](https://eslint.org/)
- [ESLint § Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)

[disabling]: https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments
