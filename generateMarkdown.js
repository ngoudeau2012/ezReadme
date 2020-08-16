function generateMarkdown(data) {
    return `
# ${data.projectName}

## Table of Contents
1. [Description](#program-description)
2. [User Story](#user-story)
3. [Dependencies](#dependencies)
4. [How to use the program](#how-to-use-the-program)
5. [Licenses](#licenses)
6. [Contribute](#how-can-you-contribute?)
7. [Providing Feedback](#where-can-you-provide-feedback?)
    
## Program Description
${data.programDescription}
    
## User Story
${data.userStory}
    
## Dependencies
${data.dependencies}
    
## How to use the Program
${data.howTo}

## Example
![Project Image or Gif](${data.projectIMG})
    
## Licenses
Licensed under the ${data.license}.
    
## How can you contribute?
${data.contribution}
    
## Where can you provide feedback?
Please reach out to me via: ${data.feedback}
  `;
  }
  
  module.exports = generateMarkdown;