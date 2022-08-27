import click
import dataparsing
from seed import seed


@click.group()
def main():
    pass


@main.command()
@click.argument('path')
def parse(path):
    """run dataparsing script"""
    dataparsing.parse(path)


@main.command()
@click.argument('csv')
@click.argument('json')
def ingest(csv, json):
    """run ingestion script"""
    seed.csvToJson(csv, json)


if __name__ == '__main__':
    main()
