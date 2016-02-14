# [randomCubeCarousel](https://github.com/MStartsev) : jquery plugin 3D carousel slider

* A responsive 3D carousel widget for **7+** images.
* Full 3D effect requires `css transform3d` support browsers.
* Beta version this widget works only with _**images**_.
*

## Supports
* IE(11 ?~)
* Chrome(32~)
* Safari(6~)
* Firefox(9~)
* Opera(?~)
* iOS-Safari(ios5~)
* android-browser(?~)


## Installation

* **Include required files**

```html
<head>
	<meta charset="UTF-8">
	<title>randoCubeCarousel</title>
	
		<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/randoCubeCarousel.css">
		<link rel="stylesheet" href="css/style.css">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="js/randoCubeCarousel.js"></script>
		<script src="js/script.js"></script>
</head>

```

* **HTML markup**

randomCubeCarousel expects a very basic HTML markup structure inside your HTML document:
```html
<div class="randomCubeCarousel">

	<ul>
		<li><img src="" ></li>
		<li><img src="" ></li>
		<li><img src="" ></li>
		<li><img src="" ></li>
		<li><img src="" ></li>
		<li><img src="" ></li>
		<li><img src="" ></li>
		<!-- ... -->
	</ul>

</div>

```
* _Only one copy of the code with `div class="randomCubeCarousel"` on a page_.

* **Setup*

```html
$('.randomCubeCarousel').randomCubeCarousel();

```

*   © github.com/MStartsev