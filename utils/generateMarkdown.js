// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === "No License"){
    return ``;
  }else{
  return`[![badge](https://img.shields.io/badge/license-${license}-brightgreen)](./LICENSE)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "NO License"){
    return ``;
  }else{
return`for additional licensing information - [LICENSE INFORMATION](https://opensource.org/licenses).`
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License"){
    return `No License`;
  }else{
return`${renderLicenseBadge(license)}
This application is covered by the ${license} license.

For more information on license types, please reference to this website ${ renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  const{title,description,installation,usage,license,contributing,tests,questions,username,email}=answers;
  return `
  # ${title} ${renderLicenseBadge(license)}

  ## Description

  ${description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## License

  ${renderLicenseSection(license)}

  ## Contributing

  ${contributing}
  
  ## Tests

  ${tests}

  ## Questions?

  ${questions}
 * Find me on Github:[${username}](https://github.com/${username})
 * Email me with any questions: [${email}](mailto:${email})

`;
}

module.exports = generateMarkdown;
