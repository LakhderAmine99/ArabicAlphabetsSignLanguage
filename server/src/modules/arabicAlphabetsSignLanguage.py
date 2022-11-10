from dataProcessor import DataProcessor
import numpy as np

class ArabicAlphabetsSignLanguage(object):
    
    def __init__(self,model):
        self.model = model
        self.dataProcessor = DataProcessor()
    
    def predict(self,x):
        return self.dataProcessor.decode(np.argmax(x))
    
    
    
    
    
    
    
    