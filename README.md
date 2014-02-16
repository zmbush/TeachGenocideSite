What is this?
=============
This is the website of the Genocide Education Project. It is a Serve project.

How do I install and run it?
-------------------------------

If you don't have bundler already, install it with:
    ```gem install bundler```

Then, from the root directory of the project, run:
    ```bundle install```

To run the project, simply run:
    ```serve```

This will start Serve on port 4000. You can now view the prototype in your
Web browser at this URL:

<http://localhost:4000>


Compass and Sass
----------------

This prototype uses Compass and Sass to generate CSS. Both are distributed as
Ruby gems and can be easily installed from the command prompt. Since the
Compass gem depends on Sass, you can install them both with one command:

    gem install compass

Learn more about Sass:

<http://sass-lang.org>

Learn more about Compass:

<http://compass-style.org>

Exporting
---------

To export your project, use the new "export" command:

    serve export project output

Where "project" is the path to the project and "output" is the path to the
directory where you would like your HTML and CSS generated.
