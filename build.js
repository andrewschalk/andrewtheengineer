'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('                      Andrew Schalk'),
  description: chalk.white('         Robotics Engineering Student at ')+ chalk.red('SIUE'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~andrewschalk'),
  github: chalk.gray('https://github.com/') + chalk.green('andrewschalk'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('andrew-schalk-999550285'),
  card: chalk.gray('npx ') + chalk.yellow('andrewtheengineer'),
  email: chalk.cyan('aschalk@siue.edu'),
  labelDescription: chalk.white.bold(''),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelEmail: chalk.white.bold('   Email:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelDescription}  ${data.description}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const emailing = `${data.labelEmail}  ${data.email}`
const carding = `${data.labelCard}  ${data.card}`

// Put all our output together into a single variable so we can use boxen effectively
const output = newline + newline + heading + newline +// data.name + data.handle
               working + newline + // data.labelDescription + data.description
			   newline + // Add one whole blank line
               githubing + newline + // data.labelnpm + data.npm
               npming + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               emailing + newline + newline + // data.labelEmail + data.email
               carding +newline + newline // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.blue(boxen(output, options)))
