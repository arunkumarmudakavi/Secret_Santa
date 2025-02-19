
# Secret Santa

It's a simple game which involves employees and each employee is required to choose another employee as their secret child, to whom they will anonymously give a gift.


## Table of Contents

- [General Information.](#general-information)
- [Requirements.](#requirements)
- [Technologies.](#technologies)
- [Setup.](#setup)

## General Information

The "Secret Santa" is a game. It takes a CSV file as a input and provide CSV file as a output. The main functionality is to automate the process of assigning secret children to employees based on the provided employees information.

#### Input Format

The input will be given as a CSV file containing previous year employees information. Each row in the CSV file will represent an employee and will include the following fields:
- Employee_Name: The name of the employee.
- Employee_EmailID: The email ID of the employee.
- Secret_Child_Name: The name of the assigned secret child.
- Secret_Child_EmailID: The email ID of the assigned secret child.

#### Output Format

The program should generate a new CSV file as output, containing the following fields for each employee:
- Employee_Name: The name of the employee.
- Employee_EmailID: The email ID of the employee.
- Secret_Child_Name: The name of the assigned secret child.
- Secret_Child_EmailID: The email ID of the assigned secret child.

#### Rules

- An employee cannot choose themselves as their secret child.
- An employee cannot be assigned to the same secret child as in the previous year's Secret Santa event.
- Each employee must have exactly one secret child.
- Each secret child should be assigned to only one employee.
  
## Requirements
- Node
- npm


## Technologies

Project is created with:

#### Front- End:
- ReactJS
- TailwindCSS

#### Back- End:
- NodeJS
- ExpressJS
- Multer

#### Database:
- MongoDB

## Setup

To run this project:

* Front - End Side
```
$ cd .../client
$ npm install
$ npm dev
```
* Back - End Side
```
$ cd .../server
$ npm install
$ npm start
```
