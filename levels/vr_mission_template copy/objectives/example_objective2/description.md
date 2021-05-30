
How would you train a neural network to do the equivalent task? Using data! By feeding it with a set of X‘s and a set of Y‘s, it should be able to figure out the relationship between them.
# Importing Packages:
```py
import tensorflow as tf
import numpy as np
from tensorflow import keras
```
# Define and compile the neural network
```py
model = tf.keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])])
model.compile(optimizer='sgd', loss='mean_squared_error')
```
# Provide the data
```py
xs = np.array([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], dtype=float)
ys = np.array([-2.0, 1.0, 4.0, 7.0, 10.0, 13.0], dtype=float)
```