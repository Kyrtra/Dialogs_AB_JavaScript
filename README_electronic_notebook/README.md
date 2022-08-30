# Dialogs_AB_JavaScript
My JavaScript notes - Revision

0. JavaScript:
* html-ā ( head, body, <.script> tagos)
* atsevišķā lokālā failā
* atsevišķā ārējā failā 
* +scopes {}

1. variables ( mainīgie)
* var, let, const
* primitīvie datu tipi (Number, String, Boolean...)

2. array ( masīvi)
* viens_vaards[daudzi indeksēti elementi/vērtības]
* daudzas dažādas metodes attiecībā uz šo elementu kopu
    * String - simbolu masīvs
        * "static text 1 " + variable_value_OR_operation_result + "static_text 2"
        * `static text 1 ${variable_value_OR_operation_result} static text 2.``

3. if (koda izpildes zarošana)
* +else
* +izšķiršanās par vēlamo turpmāk izmantojamo vērtību vai darāmo darbību ar konstrukciju
  (nosacījums)? true_darbiibas: false_darbiibas;

4. switch (-"- ja ir daudz plašāka nākamā zara izvēle)
    <br>+break;<br>
    +default

5. functions
* function function_name (function_arguments){function_body} - definition with statement
* const[var/let] function_name = function (function_arguments) {function_body} - definition with expression<br>
                                 function function_entire_for_recursion(function_arguments){function_body}<br>
* functions defined by expression can't be hoisted - nevar tikt izmantotas pirms definēšanas ( apraksta)

6. objects
* properties ( īpašības) - object_name.object_property_name vai object_name["object_property_name"];
* methods ( funkcijas);
* this ( Window, Object, HTML element in case of event)<br>
    * const obj_name = {};
    * const obj_name = new Object();
* object_name.object_property_name = object_property_value;
* Object.defineProperty(object_name, "object_property_name",){
    * value: .....
    * writable: true/false;
    * configurable: true/false;});
* Object.values(object_name) -> array with values of properties and descriptions of methods
* object_name.object_method_name.call(object_name, object_method_arguments);
* other_object_name.other_object_method_name = object_name.object_method_name.bind(object_name, object_method_arguments);

7. Interneta pārlūka modelis (BOM)
* Window Object
    * window.open();
    * window.open(url, windowName, [windowFeatures]);
    * let url = 'http://localhost/js/about.html';
      let jsWindow = window.open(url,'about');
    * https://www.javascripttutorial.net/javascript-bom/javascript-window/
* Alert
    * window.alert(message); or alert(message);
    * setTimeout(() => {
    alert('3 seconds has been passed!')
     }, 3000);
     * https://www.javascripttutorial.net/javascript-bom/javascript-alert/
* Confirm
    * confirm();
    * let result = window.confirm(question);
    * https://www.javascripttutorial.net/javascript-bom/javascript-confirm/
* Prompt
    * prompt();
    * let result = window.prompt(message, default);
    * https://www.javascripttutorial.net/javascript-bom/javascript-prompt/
* setTimeout
    * setTimeout();clearTimeout();
    * let timeoutID  = setTimeout(cb [,delay], arg1, arg2,...);
    * https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/
* setInterval
    * setInterval();clearInterval();
    * let intervalID = setInterval(callback, delay,[arg1, arg2, ...]);
    * https://www.javascripttutorial.net/javascript-bom/javascript-setinterval/
* Location
    * location.href - location.href is a string that contains the entire URL.
        * "http://localhost:8080/js/index.html?type=listing&page=2#title"
    * location.protocol - location.protocol represents the protocol scheme of the URL including the final colon (:).
        * 'http:'
    * location.host - location.host represents the hostname
        * "localhost:8080"
    * location.port - location.port represents the port number of the URL
        * "8080"
    * location.pathname - location.pathname contains an initial '/' followed by the path of the URL.
        * "/js/index.html"
    * location.search - location.search is a string that represents the query string of the URL:
        * "?type=listing&page=2"
    * location.hash - location.hash returns a string that contains a ‘#’ followed by the fragment identifier of the URL.
        * "#title"
    * location.origin - location.origin is a string that contains the canonical form of the origin of the specific location.
        *  "http://localhost:8080"
    * location.username - location.username is a string that contains the username before the domain name.
    * location.password
    * manipulating the location - assign(); reload(); replace();
    * https://www.javascripttutorial.net/javascript-bom/javascript-location/
* Query String
    * location.search; 
    * '?type=list&page=20'
    * const urlParams = new URLSearchParams(location.search);
    * keys(); values(); entries();
* Redirect
    * location.href = 'new_url';
    * location.href = 'https://www.javascripttutorial.net/';
    * location.assign('https://www.javascripttutorial.net/');
    * location.replace('https://www.javascripttutorial.net/');
* Navigator
    * window.navigator._____
        * window.navigator.userAgent
        * window.navigator.battery
        * window.navigator buildid
    * not all commands are avialable on all browsers
        * list of commands available/not available on certain browsers - https://developer.mozilla.org/en-US/docs/Web/API/Navigator
    * list of all window.navigator commands - https://www.javascripttutorial.net/javascript-bom/javascript-navigator/
* Screen
    * window.screen
    * window.screen properties - https://www.javascripttutorial.net/javascript-bom/javascript-screen/
* History
    * window.history - window.history.back();
        * back(); forward(); go();
            * Move to a specific URL in the history - history.go(-1);
            * To determine the number of URLs in the history stack, you use the length property:history.length;

8. JavaScript and HTML document object model (DOM)
* Document Object Model (DOM) - The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.
    * hierarchy of nodes
    * DOM tree
    * Node Types - node.nodeType;
    * nodeName and nodeType 
    * Node and Element
    * ![](../Dialogs_AB_JavaScript/images/DOM.png)
    * Node Relationships
    * https://www.javascripttutorial.net/javascript-dom/document-object-model-in-javascript/
* Element selection
    * document.getElementById() - only available on the document object, not other elements
        * const element = document.getElementById(id);
        * id is case-sensitive
        * The document.getElementById() returns a DOM element specified by an id or null if no matching element found.
        * If multiple elements have the same id, even though it is invalid, the getElementById() returns the first element it encounters.
        * https://www.javascripttutorial.net/javascript-dom/javascript-getelementbyid/
    * getElementsByName();
        * returns a live NodeList of Elements
        * the NodeList is an array-like object, not an array object
        * https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyname/
    * getElementsByTagName();
        * let elements = document.getElementsByTagName(tagName);
        * getElementsByTagName() is a method of the document or element object.
        * getElementsByTagName() accepts a tag name and returns a list of elements with the matching tag name;
        * getElementsByTagName() returns a live HTMLCollection of elements. The HTMLCollection is an array-like object.
        * https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbytagname/
    * getElementsByClassName();
        * When calling the method on the document element, it searches the entire document and returns the child elements of the document:
            * let elements = document.getElementsByClassName(names);
        * When calling the method on a specific element, it returns the descendants of that specific element with the given class name:   
            * let elements = rootElement.getElementsByClassName(names);
        * The method returns the elements which is a live HTMLCollection of the matches elements
        * The JavaScript getElementsByClassName() method is used to select the child elements of an element that has one or more give class names.
        * https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyclassname/
    * querySelector
        * https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/
        * querySelector() and querySelectorAll();
        * querySelector() is a method of the Element interface
        * allows you to select the first element that matches one or more CSS selectors
            * let element = parentNode.querySelector(selector);
            * let elementList = parentNode.querySelectorAll(selector);    
        * Universal selector -  is denoted by * that matches all elements of any type:
        * The following example uses the querySelector() selects the first element in the document:
            * let element = document.querySelector('*');
            * let elements = document.querySelectorAll('*'); - selects all elements in the document
        * type selector 
            * The following example finds the first h1 element in the document:
                * let firstHeading = document.querySelector('h1');
                * let heading2 = document.querySelectorAll('h2'); - selects all elements in the document
        * class selector
            * The following example finds the first element with the menu-item class:
                * let note = document.querySelector('.menu-item');
                * let notes = document.querySelectorAll('.menu-item');
        * ID Selector
            * To select an element based on the value of its id, you use the id selector syntax - #id
            * The following example finds the first element with the id #logo:
                * let logo = document.querySelector('#logo');
        * Attribute selector
            * To select all elements that have a given attribute, you use one of the following attribute selector syntaxes - [attribute][attribute=value][attribute~=value][attribute|=value][attribute^=value][attribute$=value][attribute*$*=value]
            * let autoplay = document.querySelector('[autoplay]');
            * let autoplays = document.querySelectorAll('[autoplay]');
        * Grouping selectors
            * To group multiple selectors, you use the following syntax:
                * selector, selector, ...
            * The following example finds all <.div> and <.p> elements:
                * let elements = document.querySelectorAll('div, p');
        * Combinations
            * descendent combinator - To find descendants of a node, you use the space ( ) descendant combinator syntax: selector selector
            * For example p a will match all <.a> elements inside the p element:
                * let links = document.querySelector('p a');
        * Child combinator 
            * The > child combinator finds all elements that are direct children of the first element: selector > selector
            * The following example finds all li elements that are directly inside a <.ul> element:
                * let listItems = document.querySelectorAll('ul > li');
            * To select all li elements that are directly inside a <.ul> element with the class nav:
                * let listItems = document.querySelectorAll('ul.nav > li');
        * General sibling combinator
            * The ~ combinator selects siblings that share the same parent:
                * selector ~ selector
                * or example, p ~ a will match all <.a> elements that follow the p element, immediately or not:
                    * let links = document.querySelectorAll('p ~ a');
        * Adjacent sibling combinator - selector + selector
            * For example, h1 + a matches all elements that directly follow an h1:
                * let links = document.querySelectorAll('h1 + a');
            * And select the first <.a> that directly follows an h1:
                * let links = document.querySelector('h1 + a');
        * Pseudo
            * Pseudo-classes. The : pseudo matches elements based on their states:
                * element:state
                * For example, the li:nth-child(2) selects the second <.li> element in a list:
                * let listItem = document.querySelectorAll('li:nth-child(2)');
            * Pseudo-elements
                * The :: represent entities that are not included in the document.
                * For example, p::first-line matches the first-line of all div elements:
                * let links = document.querySelector('p::first-line');    
                <br>
        




