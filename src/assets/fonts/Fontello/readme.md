# How to use fontello font in pdf generator

## What is fontello

Fontello allows you to select the font icons you want to generate a package with only the icons you need.
You can select from Font Awesome, Iconic, Brandico etc.

## What icons are included in this fontello.ttf

Open the demo.html which will show you all the icons available.

## How to use the icons

There are different ways on how you could do it. In the pdf templates, it is done like this:

1. Assign the unicode which you can get from demo.html to a variable. f.ex: `const educationIcon = '\ue800'`
2. Use that variable anywhere in your JSX as content. f.ex: `<div>{educationIcon}</div>

## How to add new icons

- Go to https://fontello.com/
- Select all the icons that are already used in this project (which you can see in demo.html)
- Download the webfont
- Replace the fontello.ttf, LICENSE.txt and demo.html of this project
- In the demo.html you will have to fix the import path of fontello.ttf
