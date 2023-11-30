%tensorflow_version 2.x
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.preprocessing.image import img_to_array
from ipywidgets import FileUpload, Output, Image as IPyImage, VBox, HTML
from PIL import Image
import numpy as np
from tempfile import NamedTemporaryFile





# [CODE CONTENT    CONTACT TO BUY -   8582970748  aritra1999.dey@gmail.com]






# File upload widget
file_upload = FileUpload(accept='image/*', multiple=False)

# Attach the event handler to the file upload widget
file_upload.observe(on_upload_change, names='value')

# Button for triggering file upload (not needed anymore)
# upload_button = Button(description="Upload X-Ray Image")
# upload_button.on_click(on_button_click)

# Display widgets
VBox([file_upload, output])
