from manufacturer import Manufacturer, Country
from random import choice

countries = []
for i in range(3):
    countries.append(Country())


for j in range(10):
    manu = Manufacturer(choice(countries))
    print(manu.SummaryString())
