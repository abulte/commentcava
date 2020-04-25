import os
import sys
import csv
import click
import dataset

from utils import fix_end_date

db = dataset.connect(os.getenv('DB_DSN', 'sqlite:///commentcava.db'))


@click.group()
def cli():
    pass


@cli.command()
@click.option('--start', default=None, help='Start date (ISO)')
@click.option('--end', default=None, help='End date (ISO)')
@click.option('--anonymous', is_flag=True, help='Remove names')
def export_csv(start, end, anonymous):
    table = db["mood"]
    args = {"created_at": {}}
    if start:
        args["created_at"][">="] = start
    if end:
        end = fix_end_date(end)
        args["created_at"]["<"] = end
    data = list(table.find(**args))
    if not data:
        click.echo("No data to export")
        return
    fieldnames = [k for k in data[0].keys() if k != 'random']
    if anonymous:
        fieldnames = [k for k in fieldnames if k != 'name']
    writer = csv.DictWriter(sys.stdout, fieldnames=fieldnames)
    writer.writeheader()
    for d in data:
        d.pop('random')
        if anonymous:
            d.pop('name')
        writer.writerow(d)


if __name__ == '__main__':
    cli()
