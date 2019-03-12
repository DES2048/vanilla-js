// позволяет получить узел html
htmlElement = document.documentElement;

// head
headElem = document.head;

// body - возвращает null, если вызван не в body, так как этот узел еще не сформирован
bodyElem = document.body;

//коллекция childNodes - выведет все узлы первого уровня вложенные в этот элемент

function alertChildNodes(){
	childs = document.body.childNodes;
	
	for(var i=0; i < childs.length; i++){
		alert(childs[i]);
	}
}

// fisrtChild и lastChild - первый и последний узел в коллекции соответственно

//parentNode - родительский узел
// previosSibling и nextSibling - узел сверху и снизу соответственно;

// можно сделать навигацию только по элементам, исключая текстовые и другие узлы

// children - колекция дочерних элементов
// firstElementChild, lastElementChild – соответственно, первый и последний дети-элементы.
// previousElementSibling, nextElementSibling – соседи-элементы.
// parentElement – родитель-элемент.