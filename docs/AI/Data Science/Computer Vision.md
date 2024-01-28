---
Finished: false
tags:
  - article
  - digital-garden
created: 2024-01-06T15:04
updated: 2024-01-26T14:02
---


# Computer Vision




### Vision Transformer
Vision transformer applies the transformer architecture to computer vision algorithms. In ViTs, an image is split into fixed-size patches. These patches, along with positional encodings, are flattened and linearly embedded to retain information about their original position in the image. The transformer then processes these sequences of embeddings.
In 2021, a pure transformer model demonstrated better results than Convolutional Neural Networks. However, they require large amounts of data. Interpretability is also better because the attention mechanism in transformers can be inspected to understand which parts of the image are being focused on for a particular decision.


## Augmenting data

Invariances refer to changes in the input that do not alter the output. 
It helps enhance the robustness of a model to changes in the input data. 

Encoding, on the other hand, is the process of finding a function to represent data in a way that can be quickly processed by a machine-learning model. 

Techniques such as data augmentation for images:
-  **Mobius transformations** Examples of Möbius transformations (original on left), resulting in variations in perspective, orientation, and scale while still preserving local angles and anharmonic ratios. [Article](https://iopscience.iop.org/article/10.1088/2632-2153/abd615/meta)
	![ ](../../../static/images/Pasted%20image%2020240126134511.png)
- **Mixup for images**, where you mix classes.
# Links
- 

# Thoughts 
- Never use the [pillow](https://pypi.org/project/Pillow/) if you can use [OpenCV](https://pypi.org/project/opencv-python/). The Pillow package usually mentions a lot of things in the image that might lead to bugs. 




