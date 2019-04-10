# Comingoo Driver Mobile App

## Getting Started

### Prerequisites

- NPM

```
npm install npm@latest -g

More details at : https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
```

or

- Yarn

```
https://yarnpkg.com/lang/en/docs/install/
```

- React Native CLI

```
https://facebook.github.io/react-native/docs/getting-started
```

### Installing

1- Clone the repo.

```
https://github.com/comingoo/comingoo-driver.git
```

2- Install dependencies from package.json

```
npm install

or 

yarn
```

3- Install dependencies from POD file

```
cd ios/
pod install
```

4- Linking dependencies (If needed)

```
`From project root folder`

react-native link 
```

5- To run app in iOS
```
react-native run-ios
```

6- To run app in Android
```
cd ..
react-native run-android 
```

### Development Standarts

1. Create a new branch for the task with the format <sprint_name>/c-<card_id> (e.g. sprint1/5-create-basic-structure) from development P.S. You can find card_id at the last path of trello url. e.g. https://trello.com/c/<board_id>/<card_id>

2. Push the working code daily (Error free) in your branch.

3. Commit message format: <card_number>: <message> for e.g. c-5: created basic structure.

4. Once ready for the PR, merge the development branch code into your branch. Resolve conflicts/fixes if any.

5. Create PR (Pull Request) for your branch to be merged in development.

6. PM will assign any developer to review the code, if any fixes, he'll request to change, the developer will again follow the above standard, otherwise the reviewer will approve the code and assign SQA Engineer to checkout the PR. Finally after both approvals, developer will merge code in master.
