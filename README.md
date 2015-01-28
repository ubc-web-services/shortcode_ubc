## UBC CLF Drupal "shortcodes"


A few basic shortcodes to use with Megatron CLF in Drupal.

There are 3 shortcode options:
 * Accordion
 * Tabbed Content
 * Columns

### Accordion:<br>


 Shortcode for accordions use:<br>
            [accordion title="Your Accordion Title"]Your content here[/accordion]<br>
             To make open by default, add "expanded=1" to the accordion you want open:
             E.g. [accordion title="Open Accordion" expanded="1"]Content and text in here. [/accordion]


### Tabbed Content:

Shortcode for tabbed content use:<br>
     [tabs]<br>
     [tab-item position="1" title="Your tab title"]Your content[/tab-item]<br>
     [tab-item position="2" title="Next tab title"]Next content[/tab-item]<br>
     [/tabs]


### Columns:

 Shortcode for putting content into columns use:<br>
         [columns]<br>
         [column-item width="1-quarter"]First column content[/column-item]<br>
         [column-item width="1-half"]Fatter middle content[/column-item]<br>
         [column-item width="1-quarter"]Third and last column[/column-item]<br>
         [/columns]<br>
         Note: width options are 1-half, 1-third, 2-third, 1-quarter, 3-quarter to represent 1/2, 1/3, 2/3, 1/4 and 3/4 respectively.

