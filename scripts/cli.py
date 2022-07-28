import click
import dataparsing

@click.group()
def main():
    pass

@main.command()
@click.argument('path')
def parse(path):
    """run dataparsing script"""
    dataparsing.parse(path)

@main.command()
@click.argument('path')
def ingestion(path):
    """run ingestion script (WIP)"""
    print('filler')

if __name__ == '__main__':
    main()



