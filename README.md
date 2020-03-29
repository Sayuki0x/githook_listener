# githook_listener

A utility to listen for github webhooks and do file / git operations on a repository.

## prereqs

1. You must get a github secret from github in the repo settings. Set that in the secret variable in index.ts
2. Set the repo path in the repo variable in index.ts
3. By default, it will just execute a git stash and then a git pull on every push event. You can edit the commands it runs in the exec function.

## dev setup

1. Install the dependencies

`yarn`

2. Build the typescript

`yarn build`

3. Start the project

`yarn start`

You can now lint your project with `yarn lint` or `yarn lint-fix`
