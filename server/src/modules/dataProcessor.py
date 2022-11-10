import os
import cv2 as cv
import glob as gb

from sklearn.model_selection import train_test_split

labels = {
    
    "ain":0,
    "al":1,
    "aleff":2,
    "bb":3,
    "dal":4,
    "dha":5,
    "dhad":6,
    "fa":7,
    "gaaf":8,
    "ghain":9,
    "ha":10,
    "haa":11,
    "jeem":12,
    "kaaf":13,
    "khaa":14,
    "la":15,
    "laam":16,
    "meem":17,
    "nun":18,
    "ra":19,
    "saad":20,
    "seen":21,
    "sheen":22,
    "ta":23,
    "taa":24,
    "thaa":25,
    "thal":26,
    "toot":27,
    "waw":28,
    "ya":29,
    "yaa":30,
    "zay":31
}

class DataProcessor(object):
    
    def __init__(self) -> None:
        pass
    
    def _load_files(self,path,dim=64):
        
        X = []
        y = []
        
        for folder in os.listdir(path=path):
            
            files = gb.glob(pathname=str(path+folder + "/*.JPG"))
            
            for imageFile in files:
                
                image = cv.imread(imageFile)
                
                if image is None:
                    continue
                
                image_array = cv.resize(image,(dim,dim))
                
                X.append(list(image_array))
                y.append(labels[folder])
    
        return (X,y)
    
    def decode(self,name):
        
        for x,y in labels.items():
            if name==y:
                return x
    
    def load_data(self):
        
        data = self._load_files(path='./server/data/ArASL_Database/')
        
        return self.split(data=data)
    
    def save_data(self,location):
        return
    
    def split(self,data):
                
        X,y = data
        
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
        
        return (X_train,y_train),(X_test,y_test)
    
    