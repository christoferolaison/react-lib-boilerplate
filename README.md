# react-lib-boilerplate
## Setup

### Git

#### Clone with possibility to merge future updates
```bash
cd YOUR_NEW_PROJECT
git clone https://github.com/christoferolaison/react-lib-boilerplate.git --origin upstream .
git remote add origin git@github.com:USER_NAME/YOUR_PROJECT.git
git push --set-upstream origin master
```
##### Resolve conflicts
```bash
git checkout --ours PATH_TO_FILE
```

#### Clone without possibility to merge future updates but with fresh history
```bash
cd YOUR_NEW_PROJECT
git clone https://github.com/christoferolaison/react-lib-boilerplate.git .
rm -rf .git
git remote add origin git@github.com:USER_NAME/YOUR_PROJECT.git
git push --set-upstream origin master
```

### Scripts

	npm run build
	npm run dev
	npm run lint

### Development
### Related
- [Video course about how to publish packages on npm](https://egghead.io/courses/publish-javascript-packages-on-npm)
- [create-react-app](https://github.com/facebookincubator/create-react-app)
