This CLI was created using the [Click Python Package](https://click.palletsprojects.com/en/8.1.x/)

## Setup virtual environment

To setup the virtual environment run:

`python -m venv scripts/venv`

This will create the virtual environment folder in the scripts folder

## Start virtual environment

To activate virtual environment:

 `.\scripts\venv\Scripts\activate`


## Installing python packages

To install the Python packages needed to run the commands:

`pip install --editable scripts/.`

## Deactivate virtual environment

To end virtual environment run:

`deactivate`

## CLI Usage

This CLI is to run scripts through the command-line  

## Commands

The follow commands are available:

### `bar parse PATH`

Runs parsing script on the PATH(file) provided.
The file should be the file generated through apify.

### `bar ingestion`

Runs ingestion script.
Currently WIP