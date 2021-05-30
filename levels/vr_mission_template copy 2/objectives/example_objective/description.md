# Train the Neural Network
The process of training the neural network, where it learns the relationship between the X‘s and Y‘s, is in the model.fit call. That's where it will go through the loop before making a guess, measuring how good or bad it is (the loss), or using the optimizer to make another guess. It will do that for the number of epochs that you specify. When you run that code, you'll see the loss will be printed out for each epoch.
```py
model.fit(xs, ys, epochs=500)
```