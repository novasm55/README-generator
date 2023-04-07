// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  }
  else return `![License](https://img.shields.io/badge/license-${license}-red.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return '';
  }
  else return '* [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }
  else return `
  
  ${renderLicenseBadge(license)}

  This project was created under the ${license} license and the creator retains all the rights and privileges this license confers on its possessor!`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description 

${data.description}

## Installation

Installation instructions:

${data.installation}

## Usage

Usage instructions:

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

Test Instructions:

${data.tests}

## Questions

If you have questions, suggestions, comments or concerns please reach me at ${data.email}. 

Check out my portfolio at ${data.username}.`;
}

module.exports = generateMarkdown;