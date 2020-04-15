from datetime import date, timedelta


def fix_end_date(end_date):
    """Add a day to end date"""
    parsed = date.fromisoformat(end_date)
    parsed += timedelta(days=1)
    return parsed.isoformat()
