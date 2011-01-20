# Usage

Basic options
	$('.simpleslider').simpleslider();

Check out the [demo here](http://www.polarblau.com/code/jquery/simpleslider).
	
Settings and defaults
	$('.simpleslider').simpleslider({
			"controls"           : $('.controls'),   // selector or jquery object
			"content"            : '.content',       // selector or jquery object
			"transitionDuration" : 500               // duration in ms
	});
	
	
HTML structure
	<div class="simpleslider">
		<div class="mask">
			<ul class="content">
				<li>Foo</li>
				<li>Bar</li>
				<li>Baz</li>
			</ul>
		</div>
		<ul class="controls">
			<li><a href="#">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
		</ul>
	</div>