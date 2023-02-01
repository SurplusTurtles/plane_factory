from data import manuSuffix,manuPrefix,manuSector,CountryPlaces,CountryRegimes
import random

class Manufacturer:
    '''Create a random aircraft company using data tables'''
    def __init__(self, country=False):
        self.name = random.choice(manuPrefix) + ' ' + random.choice(manuSuffix)
        self.sector = random.choice(manuSector)
        if country:
            self.country = country.name
        else:
            self.country = Country().name

    def __str__(self):
        return self.name

    def SummaryString(self):
        return f"This is {self.name} from {self.country}. A {self.sector} company."

class Country:
    '''Create a random country with a penchant for planes'''
    def __init__(self):
        if random.random() > .5 :
            self.name = random.choice(CountryPlaces)
        else:
            self.name = random.choice(CountryRegimes) + ' of ' + random.choice(CountryPlaces)
    
