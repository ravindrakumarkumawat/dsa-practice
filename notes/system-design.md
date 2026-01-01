# System design 

#### Component creation steps
* Determine the subcomponents of the component ((e.g. for an image carousel, there's the image, the pagination buttons, thumbnails))
* Define the external-facing API of the component (what options/props the component should accept)
* Describe the internal component state, API between the subcomponents (if relevant)
* Lastly dive into optimizations for **performance**, **accessibility**, **user experience**, **security**, etc where relevant

> You might have to write a small amount of code for one or more of the following purposes:
> * Describe the component hierarchy
> * Describe the shape of the component state
> * Explain some non-trivial logic within the component
