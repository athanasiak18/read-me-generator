// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
} else {
    return 'N/A'
  }
  //console.log(licenseType);
  return renderedLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'MIT') {
  return `[![License: MIT](https://opensource.org/licenses/MIT)`
} else {
  return 'N/A'
}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge()}
## Project Name
${data.name}
## Project Description
${data.description}
## Installation Instructions
${data.installinstructions}
## License
${data.license}
License Link: ${renderLicenseLink()}
## Contact Information
GitHub Name: ${data.gitHub}
Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;