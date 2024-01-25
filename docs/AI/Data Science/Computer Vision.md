---
Finished: false
tags:
  - article
  - digital-garden
created: 2024-01-06T15:04
updated: 2024-01-24T14:50
---


# Computer Vision




### Vision Transformer
Vision transformer applies the transformer architecture to computer vision algorithms. In ViTs, an image is split into fixed-size patches. These patches, along with positional encodings, are flattened and linearly embedded to retain information about their original position in the image. The transformer then processes these sequences of embeddings.
In 2021, a pure transformer model demonstrated better results than Convolutional Neural Networks. However, they require large amounts of data. Interpretability is also better because the attention mechanism in transformers can be inspected to understand which parts of the image are being focused on for a particular decision.

# Links
- 

# Thoughts 
- Never use the [pillow](https://pypi.org/project/Pillow/) if you can use [OpenCV](https://pypi.org/project/opencv-python/). The Pillow package usually mentions a lot of things in the image that might lead to bugs. 




