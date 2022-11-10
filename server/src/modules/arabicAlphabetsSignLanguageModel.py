import tensorflow as tf

AASL_VERSIONS = [
    
    "AASL V.0",
    "AASL V.1",
    "AASL V.2"
]

class AASLModel(object):
    
    def __init__(self) -> None:
        pass
    
    def load_model(self,version="AASL V.0"):
        return tf.keras.models.load_model()
    
    def save_model(self):
        return