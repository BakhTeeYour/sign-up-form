# sign-up-form
 Валидация формы по нажатию на кнопку «Отправить»
Проект был написан на чистом js, были написаны функции которые облегчают читабельность кода.
Для вывода ошибки валидации была создана функция которая при вызове отображает элемент на странице.
Для работы с формами был «повешен» обработчик событий submit с использованием специального метода addEventListener().
При отправке формы срабатывает обработчик и проверяется все условия. Если все поля валидны то условия пропускается, если нет, то появляется соответствующее сообщение в нужном поле.
Для валидации полей был использован специальный метод «Регулярные выражения (regExp)» дабы сделать код более лаконичным.
Для валидации поля «Дата рождения» был использован метод Date.
