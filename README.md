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



