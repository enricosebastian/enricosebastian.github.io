# Welcome
This is my Github pages repository built with React.js and Sass. You can view the current state of it by clicking this link: [click me](https://enricosebastian.github.io/)

## How to run locally
1. Ensure that you are using the latest repo. Run `git pull` to make sure it is up to date
1. Install all necessary librarires before running. This can be done via the `npm install` commmand
1. Once all of the libraries are installed, run `npm start` and check `http://localhost:3000` via browser of choice

## How to update Github pages to latest build
1. Ensure that there is no pre-existing gh-pages branch
1. With the latest build in your local machine, run `npm run deploy` to push to newly created gh-pages branch
1. Go to the Pages option in the repo settings (Code and automation category) and build choose the gh-pages as the branch for building
1. Save configuration and wait for a few minutes
1. Check if the website is in its updated form at `https://enricosebastian.github.io/`

## Technologies used
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## To do
- Add socials in footer
- Ensure view dynamically changes per window size
- Make it mobile-friendly
- Create more reusable components
    - Improve DescriptionItems to support array of descriptions in a single item (e.g. two roles in one job)
