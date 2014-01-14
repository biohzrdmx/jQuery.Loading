##Introduction##

Presenting the easiest way to add 'loading' overlays and messages to containers and buttons.

And it's free! ('free', as in 'beer')

###Credits###

**Lead coder**: biohzrdmx [&lt;github.com/biohzrdmx&gt;](http://github.com/biohzrdmx)

###License###

The MIT License (MIT)

Copyright (c) 2013 biohzrdmx

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

##Basic usage##

Say you want to load some content asynchronously, but you want to tell your users 'hey, it is loading, wait a minute'. Just place your container and call a single function before fetching your content and call another one after you content has been loaded. Profit! It can't be easier!

**HTML**

	<div class="well example1">
	    I'm an empty container
	</div>
	<button class="btn btn-primary btn-example1">Fetch contents</button>

**JS**

	$('button.btn-example1').on('click', function(e) {
	    e.preventDefault();
	    $('.example1').loading();
	    setTimeout(function() {
	        $('.example1').loading('done');
	        $('.example1').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, aliquid praesentium harum voluptates odit cumque dolores quidem qui! Adipisci quo temporibus dolorum odio consequatur praesentium! Tempore, inventore corporis fugit perferendis.');
	    }, 1000);
	    return false;
	});

As you can see, you just need to call ´$('container-selector').loading()´ before fetching the contents and ´$('container-selector').loading('done')´ after the content has been fetched.

###And it's for buttons too###

Now you may want to disable the submit button and keep it disabled while the content is being fetched; a message on that button saying 'hey, don't click me, the contents are being loaded' would be nice too.

With this tiny plugin you can do so easily and with a single line of code! Let's augment our previous example:

**HTML**

	<div class="well example2">
	    I'm an empty container too
	</div>
	<button class="btn btn-primary btn-example2">Fetch contents</button>

**JS**

	$('button.btn-example2').on('click', function(e) {
	    e.preventDefault();
	    $('.example2').loading();
	    setTimeout(function() {
	        $('.example2').loading('done');
	        $('.example2').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, aliquid praesentium harum voluptates odit cumque dolores quidem qui! Adipisci quo temporibus dolorum odio consequatur praesentium! Tempore, inventore corporis fugit perferendis.');
	    }, 1000);
	    return false;
	});

Same function, but this time we've specified the text we want on the button ´$('button-selector').loading({ text: 'Some clever text' })´. We've also called ´$('button-selector').loading('done')´ after the content has been fetched.

###Getting fancy###

As with all of my other plugins, you may customize the s**t out of this f**ker!

**HTML**

	<div class="well example3">
	    I'm another empty container
	</div>
	<button class="btn btn-primary btn-example3">Fetch contents</button>

**JS**

	$('button.btn-example3').on('click', function(e) {
	    e.preventDefault();
	    $('.example3').loading();
	    setTimeout(function() {
	        $('.example3').loading('done');
	        $('.example3').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, aliquid praesentium harum voluptates odit cumque dolores quidem qui! Adipisci quo temporibus dolorum odio consequatur praesentium! Tempore, inventore corporis fugit perferendis.');
	    }, 1000);
	    return false;
	});

##Troubleshooting##

This plugin works on IE7+, Firefox and Chrome. Opera should be fine too.

If you can't see the loading overlay then check your stylesheets as they may be the cause. Also check if any extra elements are created in the DOM (and where).