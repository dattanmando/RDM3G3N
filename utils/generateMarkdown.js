// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license == 'MIT') {
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (license == 'Apache') {
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (license == 'GPL') {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    }
  }
// A function that returns the license link

function renderLicenseLink(license) {
  if (license == 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  else if (license == 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  else if (license == 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
}


// A function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description 
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
${renderLicenseLink(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
${data.questions}
`;
}

export default generateMarkdown;
