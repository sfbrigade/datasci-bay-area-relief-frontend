import pandas as pd

def parse(path):

    df = pd.read_csv(path, delimiter=',')

    df_copy = df.copy()
    df_filtered = df_copy[['title', 'description', 'url']]

    df_filtered_subset = df_filtered.drop_duplicates(subset=['url'])

    df_filtered_subset.to_csv('scripts/filteredSubsets.csv', index=False , encoding="utf-8-sig")
    # print("file has been parse")

