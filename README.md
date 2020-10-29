Grid has Column Axis and Row Axis

there is a grid container and grid items

just like flex we use display:grid

the grid line is how we divid the columns and rows

there is a gutter that spereates the grid items

space between the grid lines is Grid track/row

grid area is multiple grid items and the gutter
grid cell is a single grid item

css overview

[CONTAINER]
1:(grid-container)
grid-template-rows
grid-template-columns
grid-template-areas

2: (grid gap)
grid-row-gap
grid-column-gap

3:
justify-items // center -> this will align by row horizontal
align-items //defualt set to stretch // aligns by column
justify-content
align-content

4.  grid-auto-rows
    grid-auto-columns
    grid-auto-flow: rows/columns

    //we can also add dense after rows/columns to grid-auto-flow
    exmaple:
    grid-auto-flow: rows dense
    this will tightly pack the gride making sure there is no
    empty space unless you explicitly call for it

[ITEM]
1.(grid-areas)
grid-row-start
grid-row-end
grid-column-start
grid-column-end

2.  justify-self
    align-self

3.  order

==============================
//this will auto generate all items in the grid to be a fixed heigh
// that are outside of the template
grid-auto-rows: 80px;

//this will change the flow from default row to column
grid-auto-flow: column

grid-template-areas
this lets you name areas and in the css
you can say what itemes exist in the areas

"head head head head"
"box box box left"
"big big big left"
"big big big left"
"foot foot foot foot"

=================================================

set up a container

put items inside the container
justify-content(the items) to align them how you want inside the container
example:
justify-content: center/end/start/space-between/space-around/space-evenly;

align-content is for vertically aligning our content(items)
examples:

align-content: center/end/start/space-between/space-around/space-evenly;

align-item and justify-item are used for individal items
content aligns the entire track
align always means vertical column axis
justify means horizonatal row axis
===================================================

when assigning template structure
we can use grid keywords like max-content

max-content will set the row or column depending on the template
to the size of the content inside the item
so if its text it will be the max with or heigth of all the text
min-content also does what you expect

keep in mind that these will effect other containes that share the row or column

there can be overflow when we do this
so we need to use minmax as a way to cap the min and max size of our content

example:
gride-template-rows: repeate(2 , minmax(150px, min-content));
