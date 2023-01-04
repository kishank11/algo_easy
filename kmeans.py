from sklearn.cluster import KMeans
import numpy as np
import pandas as pd
import statsmodels.api as sm
import matplotlib.pyplot as plt
import seaborn as sns
sns.set()
# loading the data
data = pd.read_csv("countryclusters.csv")
data
# plotting the data
plt.scatter(data["Longitude"], data["Latitude"])
plt.xlim(-180, 180)
plt.ylim(-90, 90)
plt.show()
# selecting the feature
x = data.iloc[:, 1:3]  # It for rows and second for columns
x
# clustering
kmeans = KMeans(3)
means.fit(x)
# clustering results
identified_clusters = data.copy()
data_with_clusters["CLusters"] = identified_clusters

plt.scatter(data_with_clusters["Longitude"], data_with_clusters[Latitude],
            c=data_with_clusters["Clusters"], cmap='rainbow')
