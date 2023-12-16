# Lung Cancer Prediction Model

## Overview

This repository contains a deep learning model implemented in TensorFlow 2.x to predict lung cancer based on X-Ray images. The model is trained on a dataset of lung images and uses a Convolutional Neural Network (CNN) architecture.

## Table of Contents

- [Dataset](#dataset)
- [Model Architecture](#model-architecture)
- [Training](#training)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [License](#license)
- [Contact](#contact)

## Dataset

The dataset used for training is located in the `/content/drive/MyDrive/lung_image_sets` directory. It includes X-Ray images of lungs for both training and validation.

## Model Architecture

The CNN model architecture is as follows:

- Input Layer: (224, 224, 3)
- Convolutional Layer 1: 32 filters, (3, 3) kernel, ReLU activation, MaxPooling (2, 2)
- Convolutional Layer 2: 64 filters, (3, 3) kernel, ReLU activation, MaxPooling (2, 2)
- Convolutional Layer 3: 128 filters, (3, 3) kernel, ReLU activation, MaxPooling (2, 2)
- Flatten Layer
- Dense Layer 1: 128 units, ReLU activation
- Output Layer: Softmax activation based on the number of classes

The model is compiled using the Adam optimizer and sparse categorical crossentropy loss.

## Training

The model is trained for 10 epochs using an image data generator for data augmentation. The training history is stored in the `history` variable.

## Usage

To use the lung cancer prediction model, follow these steps:

1. Load the saved model using the `loading_model` function.
2. Upload an X-Ray image using the file upload widget.
3. The model predicts the likelihood of lung cancer and displays the result.
![image](https://github.com/aritradey-CS/Cancer-detection-app/assets/81703791/9604f720-acf9-4cf6-a407-e12d6ae2b9c9)
![image](https://github.com/aritradey-CS/Cancer-detection-app/assets/81703791/03e0ace0-b494-4fcf-a886-4ec629250161)

## File Structure

- `lung_image_sets/`: Directory containing the dataset.
- `lung_image_sets/keras_model.h5`: Saved trained model.
- `README.md`: Project documentation.

## Dependencies

- TensorFlow 2.x
- PIL
- ipywidgets
- NumPy

## License

This project is licensed under the [MIT License](LICENSE).

## Price and Purchase

The lung cancer prediction model is available for purchase. To inquire about pricing and make a purchase, please contact What's App [8582970748] via [aritra1999.dey@gmail.com].

## Contact

For any inquiries or support, please contact [ARITRA DEY] via [aritra1999.dey@gmail.com].

